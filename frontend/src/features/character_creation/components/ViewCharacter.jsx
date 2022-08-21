import '../assets/character.css'
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



function ViewCharacter() {
    const statType = ['strength','defense','accuracy','evasion']
    const [type, setType] = useState('frontend')
    const [stats, setStats] = useState(getCharacterData(type).STATS)
    const [data, setData] = useState(getCharacterData(type))
    const nav = useNavigate()
    ////const [update, setUpdate] = useState(false)


    const handleChangeTab = (event, newValue) => {
      setType(newValue)
      let data = getCharacterData(newValue)
      setStats(data.STATS)
      setData(data)
    };

    function changeStat(e, stat){
        let temp= stats
        temp[stat] = e.target.value
        setStats(temp)
        ////update === false ? setUpdate(true) : setUpdate(false)
    
    }

    const deleteChar = function(event,type){
        event.preventDefault()
        axios.post('/deletecharacter').then((response)=>{
            window.location.reload()
            console.log('response from server: ', response)
         })
    }

    // // useEffect(() => {
    // // }, [stats])
    console.log(data)
    return (
        <div className='row justify-content-center'>
            <h1>
                This page will display character the user picked.
            </h1>
            <Button variant="outlined" onClick={(event)=>deleteChar(event,type)}>Delete Character</Button>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs p={0} value={type} onChange={handleChangeTab} centered>
                    <Tab sx={{height:150}} className="char-tab" value = "frontend" label={<span style={{'padding-top':'20px'}}>Frontend</span>} icon={<div className="frontend"></div>}/>
                    <Tab sx={{height:150}} className="char-tab" value = "backend" label={<span style={{'padding-top':'20px'}}>Backend</span>} icon={<div className="backend"></div>}/>
                    <Tab sx={{height:150}} className="char-tab" value = "fullstack" label={<span style={{'padding-top':'20px'}}>FullStack</span>} icon={<div className="fullstack"></div>}/>
                </Tabs>
            </Box>
            <div className='col-md-4 align-self-center'>
                <h1>Stats</h1>
                <List>
                    {statType.map((val, ind)=>{
                        return <ListItemText key={ind}> {`${val.charAt(0).toUpperCase() + val.slice(1)}`}: {stats[val]} <Slider size={'small'} min={0} max={10} value = {stats[val]} valueLabelDisplay="auto" onChange={(e) => changeStat(e,val)}/></ListItemText>
                    })}
                </List>
            </div>
            <div className='col-md-4 align-self-start'>
                <h1>Skills</h1>
                <List>
                    {data.MOVES.map((val, ind)=>{
                        return (
                            <ListItemText>
                                <h3>{val.name}</h3>
                                <h5>Accuracy: {val.accuracy}</h5>
                                <h5>Power: {val.power}</h5>
                            </ListItemText>)
                    })}
                </List>
            </div>
        </div>
    )
}

export default ViewCharacter