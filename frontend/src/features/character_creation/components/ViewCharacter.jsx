import '../assets/character.css'
import * as React from 'react';
import  Button from "@mui/material/Button"
import axios from 'axios'
import { Typography } from '@mui/material';




function ViewCharacter({gameData}) {


    const deleteChar = function(event){
        event.preventDefault()
        axios.delete('/gamedata').then((response)=>{
            window.location.reload()
            console.log('response from server: ', response)
         })
    }
    console.log(gameData)
    return (
        <div className='row justify-content-center'>
            <Typography variant='h2'>
                Romeo, The {`${gameData.type.charAt(0).toUpperCase() + gameData.type.slice(1)}`} Developer
            </Typography>
            <Button variant="outlined" onClick={(event)=>deleteChar(event)}>Delete Character</Button>
            <div className='col-md-4 align-self-center'>
                <div className={`${gameData.type}-view`}></div>
            </div>
            <div className='col-md-4 align-self-center'>
                <Typography variant='h3'>Strength: {gameData.strength} </Typography>
                <Typography variant='h3'>Defense: {gameData.defense} </Typography>
                <Typography variant='h3'>Accuracy: {gameData.accuracy} </Typography>
                <Typography variant='h3'>Evasion: {gameData.evasion} </Typography>
                <Typography variant='h3'>Stage: {gameData.stage} </Typography>
                <Typography variant='h3'>Dinero: ${gameData.currency} </Typography>
            </div>
        
        </div>
    )
}

export default ViewCharacter