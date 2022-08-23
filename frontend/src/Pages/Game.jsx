import { useState,useEffect } from 'react'
import CreateCharacter from '../features/character/components/CreateCharacter'
import ViewCharacter from '../features/character/components/ViewCharacter'
import BattleView from '../features/battling/components/BattleView'
import MapView from '../features/map_view/MapView'
import { Button } from '@mui/material';
import MainMenu from '../features/main_menu/MainMenu'
import axios from "axios";
import BattleEndView from '../features/battling/components/BattleEndView'


function Game( {user, gameData, getGameData} ) {

  const [gameMode, setGameMode] = useState('MainMenu') 

  function nextStage() {
    axios.put('/gamedata', {'advancestage':{'stage':gameData.stage+1, 'currency':gameData.currency+2}}).then((response)=>{
      getGameData()
      console.log(response)
   })
  }

  useEffect(()=>{
    console.log('useeffect')
    getGameData()
  },[gameMode])

  return (
    <div className="page-container">
      {/* DEV GODMODE BUTTONS
      <div className="d-flex gap-3">
        <Button variant="contained" onClick={()=>setGameMode("ViewCharacter")}>Character</Button>
        <Button variant="contained" disabled={!gameData} onClick={()=>setGameMode("MapView")}>Map View</Button>
      </div>
      GODMODE END */}
      <div className="game-container">
        <>
          {
            gameMode === "MainMenu" && 
              <MainMenu 
                user={user}
                setGameMode={setGameMode}
                gameData={gameData}
              />
          }
          {
            gameMode === "Character" && user && 
              <CreateCharacter 
                setGameMode={setGameMode}
                user={user}
              />
          }
          {
            gameMode === "ViewCharacter" && user && gameData && 
              <ViewCharacter 
                gameData={gameData}
                getGameData={getGameData}
                setGameMode={setGameMode}
              />
          }

          {
            gameMode === "MapView" && 
              gameData && <MapView 
                gameData={gameData}
                setGameMode={setGameMode}
                stage={gameData.stage}
                nextStage={nextStage}
              />
          }

          {
            gameMode === "BattleView" && 
              <BattleView 
                nextStage={nextStage}
                enemy={gameData.stage}
                gameData={gameData}
                setGameMode={setGameMode}
              />
          }
          {
            gameMode === "BattleEndWon" && 
              <BattleEndView 
                nextStage={nextStage}
                gameData={gameData}
                getGameData = {getGameData}
                gameMode = {gameMode}
                setGameMode={setGameMode}
              />
          }
          {
          gameMode === "BattleEndLost" && 
            <BattleEndView 
            gameMode = {gameMode}
            setGameMode={setGameMode}
          />
      }
        </>
      </div>
    </div>
  )
}

export default Game