import CreateCharacter from '../features/character_creation/components/CreateCharacter'
import ViewCharacter from '../features/character_creation/components/ViewCharacter'
import BattleView from '../features/battling/components/BattleView'
import MapView from '../features/gamemenu/MapView'
import TownView from '../features/gamemenu/TownView'
import RiddleMinigameModal from '../features/riddle_minigame/RiddleMinigameModal'
import { useState } from 'react'


function Game({user}) {
    const [gameMode, setGameMode] = useState('Create Character')


    return (
        <div>
            <h1>
                Game Page
            </h1>
            <button onClick={()=>setGameMode("Character")}>Character</button>
            <button onClick={()=>setGameMode("Map View")}>Map View</button>
            <button onClick={()=>setGameMode("Town View")}>Town View</button>
            <button onClick={()=>setGameMode("Battle View")}>Battle View</button>
            <RiddleMinigameModal />
            <>
                {gameMode === "Character" && user && !user.character && <CreateCharacter user={user}/>}
                {gameMode === "Character" && user && user.character && <ViewCharacter/>}
                {gameMode === "Character" && !user && <h1>You need to login to create a character</h1>}
                {gameMode === "Map View" && <MapView/>}
                {gameMode === "Town View" && <TownView/>}
                {gameMode === "Battle View" && <BattleView/>}
            </>
        </div>
    )
}

export default Game