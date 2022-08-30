import '../styling/character.css'
import * as React from 'react';
import  Button from "@mui/material/Button"
import axios from 'axios'
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {getCharacterData} from '../data/characterdata';
import { useState } from 'react';
import {Tooltip} from '@mui/material';


function ViewCharacter({gameData,getGameData,setGameMode,setStateCurrency}) {

    const [romeoMoves,setRomeoMoves] = useState(getCharacterData(gameData.type).MOVES)

    const increaseStat = function(){
        const statsArr = ['strength','defense','accuracy','evasion']
        let rand = Math.floor(Math.random() * 4);
        let stat = statsArr[rand]
        setStateCurrency(prev=>prev-1)
        axios.put('/gamedata', {'statincrease':{'stat':stat, 'value':(gameData[stat]+1),'currency':(gameData.currency-1)}}).then((response)=>{
            getGameData()
            //console.log(response)
        })
    }

    function generateStats(gameData) {
        let output = []
        let dispStats = ['strength','defense','accuracy', 'evasion']
      
        for (const item in gameData) {
          if(dispStats.includes(item))
            output.push(
            <ListItem>
              <ListItemIcon>
                <span class="material-symbols-outlined">swords</span>
              </ListItemIcon>
            <ListItemText
              primary= {`${item.charAt(0).toUpperCase() + item.slice(1)}: ${gameData[item]}`}
            />
            </ListItem>)
        }
        return output
      }

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

   
    return (
        <div className='container'>
        <div className='row justify-content-center'>
            <Typography variant='h2' style={{'margin':'10px'}}>
                Romeo, The {`${gameData.type.charAt(0).toUpperCase() + gameData.type.slice(1)}`} Developer
            </Typography>
            <div className='col-md-3 vstack gap-3 d-flex align-items-center justify-content-center'>
                <div style={{'height':'300px','padding-top':'100px'}}>
                    <div className={`${gameData.type}-view`}></div>
                </div>
                <div>
                    <List style={{ columns: 1}} dense={false}>
                        <ListItem>
                            <ListItemIcon>
                            <span class="material-symbols-outlined">paid</span>
                            </ListItemIcon>
                            <ListItemText
                            primary= {`Dinero: ${gameData.currency}`}
                            />
                        </ListItem>
                        {/*<ListItem>
                            <ListItemText
                            primary= {`Current Stage: ${gameData.stage}`}
                            />
                        </ListItem>*/}
                    </List>
                </div>
            </div>
            <div className='col-md-6 align-self-center'>
            
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
                            Stats
                        </Typography>
                        <List style={{ columns: 2}} dense={false}>
                            {generateStats(gameData,
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
            </div>
            <Button color="secondary" disabled={gameData.currency<=0} variant="contained" style={{'margin':'10px', 'width':'100px','place-item':'left'}} onClick={increaseStat}>Purchase Stat</Button>
            <Button color="secondary" variant="contained" style={{'margin':'10px', 'width':'100px','place-item':'left'}} onClick={()=>setGameMode("MapView")}>Return to Map</Button>

        </div>
    )
}

export default ViewCharacter