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
  const [stateCurrency, setStateCurrency] = useState(gameData ? gameData.currency : 0)


  function saveGame() {
    axios.put('/gamedata', {
      'savegame':
        {
          'stage':stateStage,
          'currency':stateCurrency
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
              <div id="mainmenu-background-image">
                <MainMenu
                  user={user}
                  setGameMode={setGameMode}
                  gameData={gameData}
                  setStateStage={setStateStage}
                  setGameData={setGameData}
                />
                </div>
            }
            {
              gameMode === "Character" && user &&
                <CreateCharacter
                  setGameMode={setGameMode}
                  user={user}
                  setStateStage={setStateStage}
                  saveGame={saveGame}
                  setStateCurrency={setStateCurrency}
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
                  setStateCurrency={setStateCurrency}
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
                  setStateCurrency={setStateCurrency}
                />
            }
          </>
        </div>
      }
    </div>
  )
}

export default Game