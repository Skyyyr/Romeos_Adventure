import CreateCharacter from '../Components/gamemenu/CreateCharacter'
import BattleView from '../Components/gamemenu/BattleView'
import MapView from '../Components/gamemenu/MapView'
import TownView from '../Components/gamemenu/TownView'
import { useState } from 'react'


function Game() {
    const [gameMode, setGameMode] = useState('Create Character')


    return (
        <div>
            <h1>
                Game Page
            </h1>
            <button onClick={()=>setGameMode("Create Character")}>Create Character</button>
            <button onClick={()=>setGameMode("Map View")}>Map View</button>
            <button onClick={()=>setGameMode("Town View")}>Town View</button>
            <button onClick={()=>setGameMode("Battle View")}>Battle View</button>
            <>
                {gameMode === "Create Character" && <CreateCharacter/>}
                {gameMode === "Map View" && <MapView/>}
                {gameMode === "Town View" && <TownView/>}
                {gameMode === "Battle View" && <BattleView/>}
            </>

        </div>
    )
}

export default Game