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
import StatWarning from './StatWarning';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import {Tooltip} from '@mui/material';
//import { STAGE_TEST_OUTRO } from '../../../Components/Stages';
import { STAGES } from '../../../Components/Stages';


function CreateCharacter({user,setGameMode,setStateStage,saveGame}) {
    const statType = ['strength','defense','accuracy','evasion']
    const [type, setType] = useState('frontend')
    const [stats, setStats] = useState(getCharacterData(type).STATS)
    const [data, setData] = useState(getCharacterData(type))
    const [update, setUpdate] = useState(false)
    const [spending, setSpending] = useState(3)
    const [romeoMoves,setRomeoMoves] = useState(getCharacterData(type).MOVES)


    useEffect(()=>{
    },[stats])
  

    const handleChangeTab = (event, newType) => {
      setType(newType)
      let data = getCharacterData(newType)
      setStats(data.STATS)
      setData(data)
      setSpending(3)
      
    };

    function generateMoves() {
        return romeoMoves.map((elem)=>{ 
          return (      
            <ListItem>
              <ListItemIcon>
                <span class="material-symbols-outlined">swords</span>
              </ListItemIcon>
              <Tooltip title={`Power: ${elem['power']}, Accuracy: ${elem['accuracy']}`}>
                <ListItemText primary= {`${elem['name']}`}/> 
              </Tooltip>
              </ListItem>
              )
        })
      
      }

      function generateStats() {
        
        return statType.map((val, ind)=>{
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
        })
      }


    function addStat(val){

        if(stats[val]< 10 && spending>0){
            setStats((prevState)=>{
                let stats = prevState
                stats[val]+=1
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
            setStateStage(STAGES.indexOf('STAGE_TEST_OUTRO'))
            setGameMode('Story')
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
            <Grid container columns={{ xs: 6, sm: 6, md: 6 }} spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Typography sx={{ mt: 2, mb: 1 }} variant="h6" component="div">
                            Moves
                        </Typography>
                        <List style={{ columns: 3}} dense={false}>
                            {generateMoves()}
                        </List>
                        <hr></hr>
                        <Typography sx={{ mt: 2, mb: 1 }} variant="h6" component="div">
                            Stats,Spending: {spending}
                        </Typography>
                        <List style={{ columns: 2}} dense={false}>
                            {generateStats(
                            <ListItem>
                                <ListItemText
                                primary= "primary"
                                />
                            </ListItem>,
                            )}
                        </List>
                    </Grid>
                </Grid>
            </div>
            <StatWarning createChar={(event)=>createChar(event,type)} spending={spending} setGameMode={setGameMode}/>

        </div>
    )
}

export default CreateCharacter