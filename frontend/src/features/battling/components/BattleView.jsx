import '../assets/battle.css'
import {Bar} from './HealthBar'
import {getCharacterData} from '../../character_creation/data/characterdata'
import {getEnemyData} from '../../character_creation/data/enemydata'
import { useState,useEffect } from 'react'
import  Button from "@mui/material/Button" 
import { Typography, Tooltip } from '@mui/material'
import {wait, Damage} from '../helpers/helpers'



function BattleView({gameData, enemy}) {
    console.log(enemy)
    const [romeoStats,setRomeoStats] = useState({'accuracy':gameData.accuracy,'defense':gameData.defense,'evasion':gameData.evasion,'strength':gameData.strength})
    const [romeoMoves,setRomeoMoves] = useState(getCharacterData(gameData.type).MOVES)
    const [enemyData,setEnemyData] = useState(getEnemyData(enemy))
    const [turn, setTurn] = useState('Player One')
    const [romeoHealth, setRomeoHealth] = useState(100)
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [currAttack, setCurrAttack] = useState('')
    const [enemyAnimation, setEnemyAnimation] = useState('')
    const [playerAnimation, setPlayerAnimation] = useState('')


    const enemyAttack = async (move) => {

        await wait(3000)
        setEnemyAnimation('eneAttack')
        await wait(500)
        setEnemyAnimation("eneReset")
        setPlayerAnimation('hit')
        await wait(500)
        setPlayerAnimation('')
        inflictDamage(move)
        setTurn("Player One")
        
    }

    const attack = async (move) => {
        
        document.getElementById(move.name).disabled = true;
        setPlayerAnimation('attack')
        await wait(500)
        setPlayerAnimation("reset")
        setEnemyAnimation('hit')
        await wait(500)
        inflictDamage(move)
        setEnemyAnimation('')
        setTurn("Player Two")
        document.getElementById(move.name).disabled = false;
        
    }

    useEffect(()=>{
        if(turn === "Player Two"){
            let rand = Math.floor(Math.random() * (3))
            enemyAttack(enemyData.MOVES[rand])
        }
    },[turn])

    useEffect(()=>{

        const checkDead = async () =>{
            console.log(romeoHealth,enemyHealth)
            // // if(playerOneHealth <= 0){
            // //     await wait(2000)
            // //     props.BattleCur("lostBattle")
            // // }
            // // else if(playerTwoHealth <= 0){
            // //     await wait(2000)
            // //     props.BattleCur("wonBattle")
            // // }

        }

        checkDead()

    },[romeoHealth,enemyHealth])

    const inflictDamage = async (move) => {
        const damage = Damage(turn, romeoStats, enemyData.STATS, move)

        if(turn == "Player One"){
            setCurrAttack(`Romeo used ${move.name} it did ${damage} damage${damage == 0 ? ', it missed.' : '.'}`)
            setEnemyHealth(val => (val - damage) < 0 ? 0 : (val - damage))

        }
        else if(turn == "Player Two"){
            setCurrAttack(`Player Two used ${move.name} it did ${damage} damage${damage == 0 ? ', it missed.' : '.'}`)
            setRomeoHealth(val => (val - damage) < 0 ? 0 : (val - damage))

        }

    }

    return (

        <div className='container'>
            <div className='row align-items-center' style={{'height':'20vh', 'overflow': 'hidden'}}>
                <div className='col-md-3'>
                    <Bar label="Romeo" value={romeoHealth}/>
                </div>
                <div className='col-md-6'></div>
                <div className='col-md-3'>
                    <Bar label={enemyData.NAME} value={enemyHealth}/>
                </div> 
            </div>                        

        <div className='row align-items-end' style={{'height':'20vh', 'overflow': 'hidden'}}>
            <div className='wrapper'>
                <div className = {"row align-items-center justify-content-center"} style={{'width':"300px", 'height': "200px"}}>
                    <div className={`${gameData.type}-battle ${turn} ${playerAnimation}`} ></div>
                </div>
                <div className = {"row align-items-center justify-content-center"} style={{'width':"300px", 'height': "200px"}}>
                    <div className={`frontend-battle ${enemyAnimation}`} ></div> 
                </div>
            </div>
        </div>
        <div className='row battleDialog' style={{'height':'20vh','overflow': 'hidden'}}>
            <div className='col-md-3 vstack gap-2 align-self-center'>
                {romeoMoves.map(elem=><Tooltip disableInteractive title={`Power: ${elem.power}, Accuracy: ${elem.accuracy}`}><Button id={elem.name} variant="contained" onClick={()=> (turn == "Player One") && attack(elem)}>{elem['name']}</Button></Tooltip>)}
            </div>
            <div className='col-md-9 align-self-start'>
                <Typography variant='h3'>{turn}'s Turn!</Typography>
                <Typography variant='h5'>{currAttack}</Typography>
            </div>
        </div>
    </div>
    )
}

export default BattleView