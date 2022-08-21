import { useState } from 'react'
import CreateCharacter from '../features/character_creation/components/CreateCharacter'
import ViewCharacter from '../features/character_creation/components/ViewCharacter'
import BattleView from '../features/battling/components/BattleView'
import MapView from '../features/map_view/MapView'
import TownView from '../features/town_view/TownView'
import RiddleMinigameModal from '../features/riddle_minigame/RiddleMinigameModal'
import { Button } from '@mui/material';
import MainMenu from '../features/main_menu/MainMenu'


function Game( {user} ) {
    const [gameMode, setGameMode] = useState('MainMenu')

    return (
        <div className="page-container">
          {/* DEV GODMODE BUTTONS */}
          <div className="d-flex gap-3">
            <Button variant="contained" onClick={()=>setGameMode("Character")}>Character</Button>
            <Button variant="contained" onClick={()=>setGameMode("MapView")}>Map View</Button>
            <Button variant="contained" onClick={()=>setGameMode("TownView")}>Town View</Button>
            <Button variant="contained" onClick={()=>setGameMode("BattleView")}>Battle View</Button>
            <RiddleMinigameModal />
          </div>
          {/* GODMODE END */}
          <div className="game-container">
            <>
              {gameMode === "MainMenu" && <MainMenu user={user} setGameMode={setGameMode}/>}
              {gameMode === "Character" && user && !user.character && <CreateCharacter user={user}/>}
              {gameMode === "Character" && user && user.character && <ViewCharacter/>}
              {gameMode === "Character" && !user && <h1>You need to login to create a character</h1>}
              {gameMode === "MapView" && <MapView/>}
              {gameMode === "TownView" && <TownView/>}
              {gameMode === "BattleView" && <BattleView/>}
            </>
          </div>
        </div>
    )
}

export default Game