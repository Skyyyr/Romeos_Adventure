import '../styling/battle.css'
import {Bar} from './HealthBar'
import {getCharacterData} from '../../character/data/characterdata'
import {getEnemyData} from '../../character/data/enemydata'
import { useState, useEffect, useRef } from 'react'
import Button from "@mui/material/Button" 
import { Typography, Tooltip } from '@mui/material'
import {wait, Damage} from '../helpers/helpers'

import Animation from '../helpers/Animation'
import { walkRight, walkLeft, getAttackAnimation } from '../helpers/AnimationConstants'

function BattleView({gameData, enemy, setGameMode,nextStage}) {
    
    const [romeoStats, setRomeoStats] = useState({'accuracy':gameData.accuracy,'defense':gameData.defense,'evasion':gameData.evasion,'strength':gameData.strength})
    const [romeoMoves, setRomeoMoves] = useState(getCharacterData(gameData.type).MOVES)
    const [enemyData, setEnemyData] = useState(getEnemyData(enemy))
    const [turn, setTurn] = useState('Player One')
    const [romeoHealth, setRomeoHealth] = useState(100)
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [currAttack, setCurrAttack] = useState('')

    const [playerEffect, setPlayerEffect] = useState('')
    const [enemyEffect, setEnemyEffect] = useState('')
    
    const [enemyAnimation, setEnemyAnimation] = useState('')
    const [enemyMoveEffect, setEnemyMoveEffect] = useState('')
    const [enemyFlip, setEnemyFlip] = useState('')

    const [playerAnimation, setPlayerAnimation] = useState('')
    const [playerMoveEffect, setPlayerMoveEffect] = useState('')
    const [playerFlip, setPlayerFlip] = useState('')

    const newKey = useRef(0)
    

    useEffect(()=>{
        if(turn === "Player Two"){
            let rand = Math.floor(Math.random() * (3))
            enemyAttack(enemyData.MOVES[rand])
        }
    },[turn])

    useEffect(()=>{
        const checkDead = async () =>{
            if(romeoHealth <= 0){
                await wait(3000)
                setGameMode('BattleEndLost')
            }
            else if(enemyHealth <= 0){
                await wait(3000)
                setGameMode('BattleEndWon')
                nextStage()
            }
        }
        checkDead()
    },[romeoHealth,enemyHealth])
    
    const attack = async(move) => {
        document.getElementById(move.name).disabled = true;
        const atkAnim = getAttackAnimation(move.label)
        if (move.type === 'melee') playerMelee(move, atkAnim)
        if (move.type === 'ranged') playerRanged(move, atkAnim)
        if (move.type === 'magic') playerMagic(move, atkAnim)
    }

    const enemyAttack = async(move) => {
        await wait(1000)
        const atkAnim = getAttackAnimation(move.label)
        if (move.type === 'melee') enemyMelee(move, atkAnim)
        if (move.type === 'ranged') enemyRanged(move, atkAnim)
        if (move.type === 'magic') enemyMagic(move, atkAnim)
    }

    const inflictDamage = async (move) => {
        const damage = Damage(turn, romeoStats, enemyData.STATS, move)
        if(turn === "Player One"){
            setCurrAttack(`Romeo used ${move.name} it did ${damage} damage${damage === 0 ? ', it missed.' : '.'}`)
            setEnemyHealth(val => (val - damage) < 0 ? 0 : (val - damage))
        }
        else if(turn === "Player Two"){
            setCurrAttack(`Player Two used ${move.name} it did ${damage} damage${damage === 0 ? ', it missed.' : '.'}`)
            setRomeoHealth(val => (val - damage) < 0 ? 0 : (val - damage))
        }
    }

    function reverseMagic(anim) {
      let revFrames = anim.frames.reverse()
      anim.frames = [...revFrames]
      console.log('reversed?', anim)
      return anim
    }

    async function playerMelee(move, atkAnim) {
      setPlayerMoveEffect('user-walk')
      newKey.current++
      setPlayerAnimation(walkRight)
      await wait(2000)
      newKey.current++
      setPlayerAnimation(atkAnim)
      await wait(500)
      // setEnemyEffect('hit')
      inflictDamage(move)
      await wait(500)
      // setEnemyEffect('')
      newKey.current++
      setPlayerFlip('flip')
      setPlayerAnimation(walkLeft)
      await wait(2000)
      newKey.current++
      setPlayerMoveEffect('')
      setPlayerAnimation('')
      setPlayerFlip('')
      await wait(1000)
      document.getElementById(move.name).disabled = false;
      setTurn("Player Two")
    }
    async function playerRanged(move, atkAnim) {
      newKey.current++
      setPlayerAnimation(atkAnim)
      await wait(1000)
      // setEnemyEffect('hit')
      inflictDamage(move)
      await wait(1000)
      // setEnemyEffect('')
      newKey.current++
      setPlayerAnimation('')
      await wait(1000)
      document.getElementById(move.name).disabled = false;
      setTurn("Player Two")
    }
    async function playerMagic(move, atkAnim) {
      setPlayerMoveEffect('magic-hover')
      newKey.current++
      setPlayerAnimation(atkAnim)
      await wait(1500)
      // setEnemyEffect('hit')
      inflictDamage(move)
      newKey.current++
      setPlayerAnimation(reverseMagic(atkAnim))
      await wait(1500)
      // setEnemyEffect('')
      newKey.current++
      setPlayerAnimation('')
      await wait(500)
      setPlayerMoveEffect('')
      document.getElementById(move.name).disabled = false;
      setTurn("Player Two")
    }

    async function enemyMelee(move, atkAnim) {
      setEnemyMoveEffect('enemy-walk')
      newKey.current++
      setEnemyAnimation(walkLeft)
      await wait(2000)
      newKey.current++
      setEnemyAnimation(atkAnim)
      await wait(500)
      // setPlayerEffect('hit')
      inflictDamage(move)
      await wait(500)
      // setPlayerEffect('')
      newKey.current++
      setEnemyFlip('flip')
      setEnemyAnimation(walkRight)
      await wait(2000)
      newKey.current++
      setEnemyMoveEffect('')
      setEnemyAnimation('')
      setEnemyFlip('')
      await wait(1000)
      setTurn("Player One")
    }
    async function enemyRanged(move, atkAnim) {
      newKey.current++
      setEnemyAnimation(atkAnim)
      await wait(1000)
      // setPlayerEffect('hit')
      inflictDamage(move)
      await wait(1000)
      // setPlayerEffect('')
      newKey.current++
      setEnemyAnimation('')
      await wait (1000)
      setTurn("Player One")
    }
    async function enemyMagic(move, atkAnim) {
      setEnemyMoveEffect('magic-hover')
      newKey.current++
      setEnemyAnimation(atkAnim)
      await wait(1500)
      // setPlayerEffect('hit')
      inflictDamage(move)
      newKey.current++
      setEnemyAnimation(reverseMagic(atkAnim))
      await wait(1500)
      // setPlayerEffect('')
      newKey.current++
      setEnemyAnimation('')
      await wait(500)
      setEnemyMoveEffect('')
      await wait(1000)
      setTurn("Player One")
    }

    return (
        <>
            <div className='row  m-0 align-items-center' style={{'height':'20%'}}>
                <div className='col-md-3'>
                    <Bar label="Romeo" value={romeoHealth}/>
                </div>
                <div className='col-md-6'></div>
                <div className='col-md-3'>
                    <Bar label={enemyData.NAME} value={enemyHealth}/>
                </div> 
            </div>
            <div className='row m-0 align-items-end' style={{'height':'40%'}}>
                <div className='wrapper'>
                    <div className ="row align-items-center justify-content-center" style={{'width':"300px", 'height': "200px"}}>
                        <div id='canvas-container' className={`${playerMoveEffect} ${playerFlip}`}>
                          { playerAnimation ? 
                              <Animation key={newKey.current} {...playerAnimation} type={gameData.type}/>
                            : <div className={`${gameData.type}-battle player-battle-stance`}></div> }
                        </div>
                    </div>
                    <div className = {"row align-items-center justify-content-center"} style={{'width':"300px", 'height': "200px"}}>
                        <div id='canvas-container' className={`${enemyMoveEffect} ${enemyFlip}`}>
                          { enemyAnimation ?
                              <Animation key={newKey.current} {...enemyAnimation} type={enemyData.NAME}/>
                            : <div className={`${enemyData.NAME}-battle enemy-battle-stance`}></div> }
                        </div>
                    </div>
                </div>
            </div>
            <div className='row m-0 battleDialog' style={{'height':'30%'}}>
                <div className='col-md-3 vstack my-2 align-self-center'>
                    {
                      romeoMoves.map(elem => 
                        <Tooltip 
                          disableInteractive
                          title={`Power: ${elem.power}, Accuracy: ${elem.accuracy}`}
                        >
                          <Button 
                            id={elem.name}
                            color="secondary"
                            variant="contained"
                            onClick={()=> (turn == "Player One") && attack(elem)}
                          >
                            {elem['name']}
                          </Button>
                        </Tooltip>
                      )
                    }
                    <Button 
                      color="outline"
                      variant="outlined"
                      onClick={()=>setGameMode("MapView")}
                    >
                      Forfeit
                    </Button>
                </div>
                <div className='col-md-9 align-self-start'>
                    <Typography variant='h3'>{turn}'s Turn!</Typography>
                    <Typography variant='h5'>{currAttack}</Typography>
                </div>
            </div>
            <Button color="secondary" variant="contained" onClick={()=>(setEnemyHealth(0))}>
                Dev-Win
            </Button>
            <Button color="secondary" variant="contained" onClick={()=>(setRomeoHealth(0))}>
                Dev-Lose
            </Button>
        </>
    )
}

export default BattleView