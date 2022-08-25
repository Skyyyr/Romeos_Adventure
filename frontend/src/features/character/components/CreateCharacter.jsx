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
import StatBar from './StatBar';



function CreateCharacter({user,setGameMode}) {
    const statType = ['strength','defense','accuracy','evasion']
    const [type, setType] = useState('frontend')
    const [stats, setStats] = useState(getCharacterData(type).STATS)
    const [data, setData] = useState(getCharacterData(type))
    const [update, setUpdate] = useState(false)
    const [spending, setSpending] = useState(3)

    useEffect(()=>{

    },[stats])
  


    const handleChangeTab = (event, newType) => {
      setType(newType)
      let data = getCharacterData(newType)
      setStats(data.STATS)
      setData(data)
      setSpending(3)
    };


    function addStat(val){
        let baseStat = getCharacterData(type).STATS[val]

        console.log(stats[val])
        if(stats[val]< 10 && spending>0){
            setStats((prevState)=>{
                let stats = prevState
                stats[val]+=1
                console.log('in setstate',stats)
                return stats
        })
        setSpending(prevState=>prevState-1)
        }
        update === false ? setUpdate(true) : setUpdate(false)

    }

    function removeStat(val){

        let baseStat = getCharacterData(type).STATS[val]

        if(stats[val]>baseStat){
            setStats((prevState)=>{
                let stats = prevState
                stats[val]-=1
                return stats
        })
        setSpending(prevState=>prevState+1)
        }
        update === false ? setUpdate(true) : setUpdate(false)
        
    }

    const createChar = function(event,type){
        event.preventDefault()
        axios.post('/gamedata', {type:type, ...stats}).then((response)=>{
            setGameMode('MapView')
            console.log('response from server: ', response)
        })
    }


    return (
        <div className='container'>
        <div className='row justify-content-center'>
            <Box sx={{ width: '100%' }}>
                <Tabs p={0} value={type} onChange={handleChangeTab} centered textColor="text" indicatorColor="secondary">
                    <Tab sx={{height:150}} className="char-tab" value = "frontend" label={<span style={{'padding-top':'20px'}}>Frontend</span>} icon={<div className="frontend"></div>}/>
                    <Tab sx={{height:150}} className="char-tab" value = "backend" label={<span style={{'padding-top':'20px'}}>Backend</span>} icon={<div className="backend"></div>}/>
                    <Tab sx={{height:150}} className="char-tab" value = "fullstack" label={<span style={{'padding-top':'20px'}}>FullStack</span>} icon={<div className="fullstack"></div>}/>
                </Tabs>
            </Box>
            <div className='col-4 align-self-center'>
                <h1>Stats</h1>
                <h5>Spending: {spending}</h5>
                <List>
                    {statType.map((val, ind)=>{
                        return (
                            <ListItemText key={ind}> 
                                <StatBar 
                                    stats={stats} 
                                    type={type} 
                                    val={val} 
                                    statName={`${val.charAt(0).toUpperCase() + val.slice(1)}`} 
                                    addStat={addStat}
                                    removeStat={removeStat}
                                    />
                            </ListItemText>)
                    })}
                </List>
            </div>
            <div className='col-4 align-self-start'>
                <h1>Moves</h1>
                <List>
                    {data.MOVES.map((val, ind)=>{
                        return (
                            <ListItemText>
                                <h5>{val.name}</h5>
                                <h6>Accuracy: {val.accuracy}/Power: {val.power}</h6>
                            </ListItemText>)
                    })}
                </List>
            </div>
            </div>
            <Button color="secondary" variant="contained" style={{'margin':'10px', 'width':'100px','place-item':'bottom'}} onClick={(event)=>createChar(event,type)}>Start Journey</Button>

        </div>
    )
}

export default CreateCharacter