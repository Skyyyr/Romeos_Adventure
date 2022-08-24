import '../styling/character.css'
import * as React from 'react';
import  Button from "@mui/material/Button"
import axios from 'axios'
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import MainMenu from '../../main_menu/MainMenu';




function ViewCharacter({gameData,getGameData,setGameMode}) {

    const increaseStat = function(event){
        console.log(event.target.value)
        axios.put('/gamedata', {'statincrease':{'stat':event.target.value, 'value':(gameData[event.target.value]+1),'currency':(gameData.currency-1)}}).then((response)=>{
            getGameData()
            console.log(response)
        })
    }

   
    return (
        <div className='row justify-content-center'>
            <Typography variant='h2'>
                Romeo, The {`${gameData.type.charAt(0).toUpperCase() + gameData.type.slice(1)}`} Developer
            </Typography>
            <Button color="secondary" variant="contained" onClick={()=>setGameMode("MapView")}>Return to Map</Button>
            <div className='col-md-4 align-self-center'>
                <div className={`${gameData.type}-view`}></div>
            </div>
            <div className='col-md-5 align-self-center'>
                <Typography variant='h3'>Strength: {gameData.strength} <Button variant="outlined" disabled={gameData.currency<1} value = 'strength' onClick={(event)=>increaseStat(event)}>+</Button></Typography>
                <Typography variant='h3'>Defense: {gameData.defense} <Button variant="outlined" disabled={gameData.currency<1} value = 'defense' onClick={(event)=>increaseStat(event)}>+</Button></Typography>
                <Typography variant='h3'>Accuracy: {gameData.accuracy} <Button variant="outlined" disabled={gameData.currency<1} value = 'accuracy' onClick={(event)=>increaseStat(event)}>+</Button></Typography>
                <Typography variant='h3'>Evasion: {gameData.evasion} <Button variant="outlined" disabled={gameData.currency<1} value = 'evasion' onClick={(event)=>increaseStat(event)}>+</Button> </Typography>
                <Typography variant='h3'>Stage: {gameData.stage} </Typography>
                <Typography variant='h3'>Dinero: ${gameData.currency} </Typography>
            </div>
        
        </div>
    )
}

export default ViewCharacter