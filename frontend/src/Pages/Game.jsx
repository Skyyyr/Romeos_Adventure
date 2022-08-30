import { useState,useEffect } from 'react'
import CreateCharacter from '../features/character/components/CreateCharacter'
import ViewCharacter from '../features/character/components/ViewCharacter'
import BattleView from '../features/battling/components/BattleView'
import MapView from '../features/map_view/MapView'
import MainMenu from '../features/main_menu/MainMenu'
import axios from "axios";
import StoryMenu from '../features/story/storymenu'


function Game( {user, gameData, getGameData, setGameData} ) {

  const [gameMode, setGameMode] = useState('MainMenu') 
  const [stateStage, setStateStage] = useState(gameData ? gameData.stage : 0)

  function saveGame() {
    axios.put('/gamedata', {
      'savegame':
        {
          'stage':stateStage,
          'currency':gameData.currency
        }
    }).then((response) => {
      getGameData()
   })
  }

  useEffect(()=>{
    getGameData()
  },[gameMode])

  return (
    <div className="page-container">
      { 
        gameMode === "MapView" && gameData && 
          <div className='map primary-bg'>
            <MapView 
              gameData={gameData}
              setGameMode={setGameMode}
              stage={gameData.stage}
              getGameData={getGameData}
              stateStage={stateStage}
              saveGame={saveGame}
            />
          </div>
      }
      {
        !(gameMode === "MapView") &&
        <div className="game-container primary-bg">
          <>
            {
              gameMode === "MainMenu" &&
                <MainMenu
                  user={user}
                  setGameMode={setGameMode}
                  gameData={gameData}
                  setStateStage={setStateStage}
                  setGameData={setGameData}
                />
            }
            {
              gameMode === "Character" && user &&
                <CreateCharacter
                  setGameMode={setGameMode}
                  user={user}
                  setStateStage={setStateStage}
                  saveGame={saveGame}
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
              gameMode === "BattleView" &&
                <BattleView
                  enemy={stateStage}
                  gameData={gameData}
                  setGameMode={setGameMode}
                  setStateStage={setStateStage}
                  stateStage={stateStage}
                />
            }
            {
              gameMode === "Story" &&
                <StoryMenu
                  stage={ gameData ? gameData.stage : 0}
                  setGameMode={setGameMode}
                  setStateStage={setStateStage}
                  gameData={gameData}
                  stateStage={stateStage}
                  getGameData={getGameData}
                />
            }
          </>
        </div>
      }
    </div>
  )
}

export default Game