import '../styling/character.css'
import { List, ListItemText, Typography } from '@mui/material';
import  Slider  from '@mui/material/Slider'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {getCharacterData} from '../data/characterdata'
import { useState,useEffect } from 'react';
import  Button from "@mui/material/Button"
import axios from 'axios'
import {useNavigate} from "react-router-dom";



function CreateCharacter({user,setGameMode}) {
    const statType = ['strength','defense','accuracy','evasion']
    const [type, setType] = useState('frontend')
    const [stats, setStats] = useState(getCharacterData(type).STATS)
    const [data, setData] = useState(getCharacterData(type))
    const [update, setUpdate] = useState(false)
    const [spending, setSpending] = useState(3)
    const nav = useNavigate()


    const handleChangeTab = (event, newType) => {
      setType(newType)
      let data = getCharacterData(newType)
      setStats(data.STATS)
      setData(data)
      setSpending(3)
    };

    function changeStat(e, stat){

        let sum = Object.values(stats).reduce((a,b)=>{
            return a+b
        })

        let baseStat = getCharacterData(type).STATS[stat]

        if(((e.target.value-stats[stat])+sum)-data.SUM<=3 || (e.movementX<=0 && (e.target.value<baseStat))){
            let temp= stats
            temp[stat] = e.target.value
            setStats(temp)
            update === false ? setUpdate(true) : setUpdate(false)
        }

        setSpending(3-(sum-data.SUM))
    
    }

    const createChar = function(event,type){
        event.preventDefault()
        axios.post('/gamedata', {type:type, ...stats}).then((response)=>{
            setGameMode('MapView')
            console.log('response from server: ', response)
        })
    }


    return (
        <div className='row justify-content-center'>
            <h1>
                Choose Character
            </h1>
            <Button variant="outlined" onClick={(event)=>createChar(event,type)}>Start Journey</Button>
            {/*TODO Remove these when done testing them*/}
            {/*<Button variant="outlined" onClick={viewChar}>VIEW CHARACTER</Button>*/}
            {/*TODO Remove these when done testing them*/}
            {/*<Button variant="outlined" onClick={updateChar}>UPDATE CHARACTER</Button>*/}
            <Box sx={{ width: '100%' }}>
                <Tabs p={0} value={type} onChange={handleChangeTab} centered>
                    <Tab sx={{height:150}} className="char-tab" value = "frontend" label={<span style={{'padding-top':'20px'}}>Frontend</span>} icon={<div className="frontend"></div>}/>
                    <Tab sx={{height:150}} className="char-tab" value = "backend" label={<span style={{'padding-top':'20px'}}>Backend</span>} icon={<div className="backend"></div>}/>
                    <Tab sx={{height:150}} className="char-tab" value = "fullstack" label={<span style={{'padding-top':'20px'}}>FullStack</span>} icon={<div className="fullstack"></div>}/>
                </Tabs>
            </Box>
            <div className='col-md-4 align-self-center'>
                <h1>Stats</h1>
                <h5>Spending: {spending}</h5>
                <List>
                    {statType.map((val, ind)=>{
                        return <ListItemText key={ind}> {`${val.charAt(0).toUpperCase() + val.slice(1)}`}: {stats[val]} <Slider size={'small'} min={0} max={10} value = {stats[val]} valueLabelDisplay="auto" onChange={(e) => getCharacterData(type).STATS[val] <= e.target.value && changeStat(e,val)}/></ListItemText>
                    })}
                </List>
            </div>
            <div className='col-md-4 align-self-start'>
                <h1>Skills</h1>
                <List>
                    {data.MOVES.map((val, ind)=>{
                        return (
                            <ListItemText>
                                <h5>{val.name}</h5>
                                <h6>Accuracy: {val.accuracy}</h6>
                                <h6>Power: {val.power}</h6>
                            </ListItemText>)
                    })}
                </List>
            </div>
        </div>
    )
}

export default CreateCharacter