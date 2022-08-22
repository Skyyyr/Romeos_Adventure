import { useState,useEffect } from 'react'
import CreateCharacter from '../features/character_creation/components/CreateCharacter'
import ViewCharacter from '../features/character_creation/components/ViewCharacter'
import BattleView from '../features/battling/components/BattleView'
import MapView from '../features/map_view/MapView'
import TownView from '../features/town_view/TownView'
import RiddleMinigameModal from '../features/riddle_minigame/RiddleMinigameModal'
import { Button } from '@mui/material';
import MainMenu from '../features/main_menu/MainMenu'
import axios from "axios";


function Game( {user, gameData} ) {

  const [gameMode, setGameMode] = useState('MainMenu')
  const [stage, setStage] = useState(gameData ? gameData.stage : 0)

  function nextStage() {
    setStage(stage + 1)
    setGameMode("MapView")
    // TODO: axios PUT request to update data
  }

  return (
    <div className="page-container">
      {/* DEV GODMODE BUTTONS */}
      <div className="d-flex gap-3">
        <Button variant="contained" onClick={()=>setGameMode("Character")}>Character</Button>
        <Button variant="contained" disabled={!gameData} onClick={()=>setGameMode("MapView")}>Map View</Button>
      </div>
      {/* GODMODE END */}
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
            gameMode === "Character" && user && !gameData && 
              <CreateCharacter 
                user={user}
              />
          }
          {
            gameMode === "Character" && user && gameData && 
              <ViewCharacter 
                gameData={gameData}
              />
          }
          {
            gameMode === "Character" && !user && 
              <h1>
                You need to login to create a character
              </h1>
          }
          {
            gameMode === "MapView" && 
              <MapView 
                gameData={gameData}
                setGameMode={setGameMode}
                stage={stage}
                nextStage={nextStage}
              />
          }
          {
            gameMode === "TownView" && 
              <TownView/>
          }
          {
            gameMode === "BattleView" && 
              <BattleView 
                enemy={stage}
                gameData={gameData}
                nextStage={nextStage}
              />
          }
        </>
      </div>
    </div>
  )
}

export default Game