import '../styling/battle.css'
import {Bar} from './HealthBar'
import {getCharacterData} from '../../character/data/characterdata'
import {getEnemyData} from '../../character/data/enemydata'
import { useState, useEffect, useRef } from 'react'
import Button from "@mui/material/Button" 
import { Typography, Tooltip } from '@mui/material'
import {wait, Damage} from '../helpers/helpers'
import { STAGES } from '../../../Components/Stages'

import Animation from '../helpers/Animation'
import { walkRight, walkLeft, whiteHit, fireHit, getAttackAnimation } from '../helpers/AnimationConstants'

function BattleView({gameData,setStateStage, enemy, setGameMode,stateStage}) {

    
    const [romeoStats, setRomeoStats] = useState({'accuracy':gameData.accuracy,'defense':gameData.defense,'evasion':gameData.evasion,'strength':gameData.strength})
    const [romeoMoves, setRomeoMoves] = useState(getCharacterData(gameData.type).MOVES)
    const [enemyData, setEnemyData] = useState(getEnemyData(enemy))
    const [turn, setTurn] = useState('Player One')
    const [romeoHealth, setRomeoHealth] = useState(100)
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [currAttack, setCurrAttack] = useState('')
    const [disabled, setDisabled] = useState(false)

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
            let rand = Math.floor(Math.random() * 3)
            enemyAttack(enemyData.MOVES[rand])
        }
    },[turn])

    useEffect(()=>{
        const checkDead = async () =>{
            if(romeoHealth <= 0){
                await wait(3000)
                setStateStage(prev=>prev-1)
                setGameMode('MapView')
            }
            else if(enemyHealth <= 0){
                await wait(3000)
                if(stateStage===STAGES.indexOf('STAGE_11_BATTLE')){
                  setStateStage(prev=>prev+1)
                  setGameMode('Story')
                }else{
                  setStateStage(prev=>prev+1)
                  setGameMode('MapView')
                }
            }
        }
        checkDead()
    },[romeoHealth,enemyHealth])
    
    const attack = (move) => {
        setDisabled(true)
        let atkAnim = getAttackAnimation(move.label)
        if (move.type === 'melee') playerMelee(move, atkAnim)
        if (move.type === 'ranged') playerRanged(move, atkAnim)
        if (move.type === 'magic') playerMagic(move, atkAnim)
    }

    const enemyAttack = (move) => {
        let atkAnim = getAttackAnimation(move.label)
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
        if (damage === 0) return false
        else return true
    }

    function reverseMagic(anim) {
      let revFrames = anim.frames.reverse()
      anim.frames = [...revFrames]
      return anim
    }

    async function playerMelee(move, atkAnim) {
      setPlayerMoveEffect('user-walk')
      newKey.current++
      setPlayerAnimation(walkRight)
      await wait(2000)
      newKey.current++
      setPlayerAnimation(atkAnim)
      await wait(400)
      newKey.current++
      setPlayerAnimation('')
      newKey.current++
      await inflictDamage(move) ? setEnemyEffect(whiteHit) : null
      await wait(600)
      newKey.current++
      setEnemyEffect('')
      newKey.current++
      setPlayerFlip('flip')
      setPlayerAnimation(walkLeft)
      await wait(2000)
      newKey.current++
      setPlayerAnimation('')
      setPlayerMoveEffect('')
      setPlayerFlip('')
      await wait(1000)
      setTurn("Player Two")
    }
    async function playerRanged(move, atkAnim) {
      await wait(500)
      newKey.current++
      setPlayerAnimation(atkAnim)
      await wait(300)
      newKey.current++
      setPlayerAnimation('')
      newKey.current++
      await inflictDamage(move) ? setEnemyEffect(whiteHit) : null
      await wait(1000)
      newKey.current++
      setEnemyEffect('')
      await wait(1000)
      setTurn("Player Two")
    }
    async function playerMagic(move, atkAnim) {
      setPlayerMoveEffect('magic-hover')
      newKey.current++
      setPlayerAnimation(atkAnim)
      await wait(1000)
      newKey.current++
      await inflictDamage(move) ? setEnemyEffect(fireHit) : null
      await wait(1000)
      newKey.current++
      setEnemyEffect('')
      newKey.current++
      setPlayerAnimation(reverseMagic(atkAnim))
      await wait(1000)
      setPlayerMoveEffect('')
      newKey.current++
      setPlayerAnimation('')
      await wait(2000)
      setTurn("Player Two")
    }

    async function enemyMelee(move, atkAnim) {
      setEnemyMoveEffect('enemy-walk')
      newKey.current++
      setEnemyAnimation(walkLeft)
      await wait(2000)
      newKey.current++
      setEnemyAnimation(atkAnim)
      await wait(400)
      newKey.current++
      setEnemyAnimation('')
      newKey.current++
      await inflictDamage(move) ? setPlayerEffect(whiteHit) : null
      await wait(600)
      newKey.current++
      setPlayerEffect('')
      newKey.current++
      setEnemyFlip('flip')
      setEnemyAnimation(walkRight)
      await wait(2000)
      newKey.current++
      setEnemyAnimation('')
      setEnemyMoveEffect('')
      setEnemyFlip('')
      await wait(2000)
      setDisabled(false)
      setTurn("Player One")
    }
    async function enemyRanged(move, atkAnim) {
      await wait(500)
      newKey.current++
      setEnemyAnimation(atkAnim)
      await wait(300)
      newKey.current++
      setEnemyAnimation('')
      newKey.current++
      await inflictDamage(move) ? setPlayerEffect(whiteHit) : null
      await wait(1000)
      newKey.current++
      setPlayerEffect('')
      await wait (1000)
      setDisabled(false)
      setTurn("Player One")
    }
    async function enemyMagic(move, atkAnim) {
      //console.log('enemy magic:', atkAnim)
      setEnemyMoveEffect('magic-hover')
      newKey.current++
      setEnemyAnimation(atkAnim)
      await wait(1000)
      newKey.current++
      await inflictDamage(move) ? setPlayerEffect(fireHit) : null
      await wait(1000)
      newKey.current++
      setPlayerEffect('')
      newKey.current++
      setEnemyAnimation(reverseMagic(atkAnim))
      await wait(1000)
      setEnemyMoveEffect('')
      newKey.current++
      setEnemyAnimation('')
      await wait(500)
      setDisabled(false)
      setTurn("Player One")
    }

    return (
        <div className={`${enemyData.BACKGROUND} battle-background`}>
            <div className='d-flex m-0 py-5 align-items-center' style={{'height':'20%'}}>
                <div className='mx-4' style={{width:'180px'}}>
                    <Bar label="Romeo" value={romeoHealth}/>
                </div>
                <div className='mx-auto justify-content-center align-items-center' style={{backgroundColor:'rgba(17,85,158,.8)'}}>
                    <div>
                        <Typography variant="h4">
                          Turn
                        </Typography>
                        <hr className="w-50 mx-auto p-0 my-0"/>
                        <Typography variant="h3">
                          { turn === "Player One" ? "Romeo" : enemyData.NAME }
                        </Typography>
                    </div>
                </div>
                <div className='mx-4'>
                    <Bar label={enemyData.NAME} value={enemyHealth}/>
                </div> 
            </div>
            <div className="row m-0 align-items-end" id="battle-background" style={{'height':'40%'}}>
                <div className='wrapper'>
                    <div className ="row align-items-center justify-content-center" style={{'width':"300px", 'height': "200px"}}>
                        <div id='canvas-container' className={`${playerMoveEffect} ${playerFlip}`}>
                          { playerAnimation ? 
                              <Animation 
                                key={newKey.current} 
                                {...playerAnimation}
                                type={gameData.type}
                              />
                            : <div className={`${gameData.type}-battle player-battle-stance`}></div> }
                          { playerEffect ? 
                              <Animation 
                                key={newKey.current}
                                {...playerEffect}
                                zIndex={10}
                              />
                            : null }
                        </div>
                    </div>
                    <div className = {"row align-items-center justify-content-center"} style={{'width':"300px", 'height': "200px"}}>
                        <div id='canvas-container' className={`${enemyMoveEffect} ${enemyFlip}`}>
                          { enemyAnimation ?
                              <Animation
                                key={newKey.current}
                                {...enemyAnimation}
                                type={enemyData.NAME}
                              />
                            : <div className={`${enemyData.NAME}-battle enemy-battle-stance`}></div> }
                          { enemyEffect ? 
                              <Animation
                                key={newKey.current}
                                {...enemyEffect}
                                zIndex={10}
                              />
                            : null }
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-0 battleDialog' style={{'height':'32%'}}>
                <div className='col-3 vstack align-self-center'>
                    {
                      romeoMoves.map(elem => 
                        <Tooltip 
                          disableInteractive
                          leaveTouchDelay='0'
                          title={`Power: ${elem.power}, Accuracy: ${elem.accuracy}`}
                        >
                          <Button 
                            id={elem.name}
                            color="secondary"
                            variant="contained"
                            onClick={()=> (turn == "Player One") && attack(elem)}
                            className="my-1"
                            disabled={disabled}
                          >
                            {elem['name']}
                          </Button>
                        </Tooltip>
                      )
                    }
                    <Button 
                      variant="contained"
                      onClick={()=>(setGameMode("MapView"), setStateStage(prev=>prev-1))}
                      sx={{'background':"darkred"}}
                    >
                      Forfeit
                    </Button>
                </div>
                <div className='col-8 align-self-center'>
                    <Typography variant='h5'>{currAttack}</Typography>
                </div>
            </div>
            <Button color="secondary" variant="contained" onClick={()=>(setEnemyHealth(0))}>
                Dev-Win
            </Button>
            <Button color="secondary" variant="contained" onClick={()=>(setRomeoHealth(0))}>
                Dev-Lose
            </Button>
        </div>
    )
}

export default BattleView