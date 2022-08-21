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
        </div>
    )
}

export default ViewCharacter