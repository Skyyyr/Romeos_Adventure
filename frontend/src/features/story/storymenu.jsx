import './styling/sprites.css';
import { useEffect, useRef } from "react"
import story_test from "./stories/story_test.json"
import StoryOption from "./storyoption"
import { useState } from "react"
import startintro from "../story/stories/story_start_intro.json"
import startoutro from "../story/stories/story_start_outro.json"
import roomoneintro from "../story/stories/room_one_intro.json"
import roomtwointro from "../story/stories/room_two_intro.json"
import roomthreeintro from "../story/stories/room_three_intro.json"
import roomfourintro from "../story/stories/room_four_intro.json"
import roomfiveintro from "../story/stories/room_five_intro.json"
import roomsixintro from "../story/stories/room_six_intro.json"
import roomsevenintro from "../story/stories/room_seven_intro.json"
import roomeightintro from "../story/stories/room_eight_intro.json"
import roomnineintro from "../story/stories/room_nine_intro.json"
import roomtenintro from "../story/stories/room_ten_intro.json"
import roomelevenintro from "../story/stories/room_eleven_intro.json"
import gameisbeaten from "../story/stories/game_is_beaten.json"

import { Typography } from "@mui/material"

import { STAGES } from "../../Components/Stages"
import RiddleMinigameModal from "../riddle_minigame/RiddleMinigameModal"

function StoryMenu({setGameMode, stateStage, gameData, setStateCurrency, setStateStage, getGameData}) {
    
    const [playerSprite, setPlayerSprite] = useState(true)
    const [sprites, setSprites] = useState('')
    const [playerChoices, setPlayerChoices] = useState('')
    const [convo, setConvo] = useState('')
    // const fullConvo = useRef()
    const [jsonStory, setJsonStory] = useState('')
    const [background, setBackground] = useState('')
    const riddleStages = [
        STAGES.indexOf('STAGE_2_CONVO'),
        STAGES.indexOf('STAGE_4_CONVO'),
        STAGES.indexOf('STAGE_5_CONVO'),
        STAGES.indexOf('STAGE_8_CONVO'),
        STAGES.indexOf('STAGE_9_CONVO')
    ]

    function updateMenu(clickedOptionId) {
        
        for (let i = 0; i < jsonStory.length; i++) {
            if (jsonStory[i]['id'] === clickedOptionId) {
                setPlayerChoices(jsonStory[i])
                handleFunction(jsonStory[i]['func'])
                // fullConvo.current = createNpcDialog(jsonStory[i]['dialogue'])
                setConvo(createNpcDialog(jsonStory[i]['dialogue']))
                if (jsonStory[i]["anim"]) {
                    for (let j = 0; j < jsonStory[i]['animation_control'].length; j++) {
                        handleAnimation(
                            jsonStory[i]['animation_control'][j]['html'],
                            jsonStory[i]['animation_control'][j]['anim_add'],
                            jsonStory[i]['animation_control'][j]['anim_remove']
                        )
                    }
                }
                break
            }
        }
    }

    function determineStage(){
        switch(stateStage){
            case STAGES.indexOf('STAGE_TEST_INTRO'):
                setPlayerSprite(false)
                setJsonStory(startintro)
                break
            case STAGES.indexOf('STAGE_TEST_OUTRO'):
                setPlayerSprite(false)
                setJsonStory(startoutro)
                break
            case STAGES.indexOf('STAGE_1_CONVO'):
                setJsonStory(roomoneintro)
                break
            case STAGES.indexOf('STAGE_2_CONVO'):
                setJsonStory(roomtwointro)
                break
            case STAGES.indexOf('STAGE_3_CONVO'):
                setJsonStory(roomthreeintro)
                break
            case STAGES.indexOf('STAGE_4_CONVO'):
                setJsonStory(roomfourintro)
                break
            case STAGES.indexOf('STAGE_5_CONVO'):
                setJsonStory(roomfiveintro)
                break
            case STAGES.indexOf('STAGE_6_CONVO'):
                setJsonStory(roomsixintro)
                break
            case STAGES.indexOf('STAGE_7_CONVO'):
                setJsonStory(roomsevenintro)
                break
            case STAGES.indexOf('STAGE_8_CONVO'):
                setJsonStory(roomeightintro)
                break
            case STAGES.indexOf('STAGE_9_CONVO'):
                setJsonStory(roomnineintro)
                break
            case STAGES.indexOf('STAGE_10_CONVO'):
                setJsonStory(roomtenintro)
                break
            case STAGES.indexOf('STAGE_11_CONVO'):
                setJsonStory(roomelevenintro)
                 break
            case STAGES.indexOf('GAME_IS_BEATEN'):
                setJsonStory(gameisbeaten)
                break
            default:
                setJsonStory(story_test)
                break
        }
           
    }

    function handleAnimation(requestedHtml, requestedAnimationAdd, requestedAnimationRemove) {
        console.log(requestedHtml)
        const htmlElement = document.getElementById(requestedHtml)

        if (requestedAnimationRemove !== "") {
            htmlElement.classList.remove(requestedAnimationRemove)
        }        
        if (requestedAnimationAdd !== "") {
            htmlElement.classList.add(requestedAnimationAdd)
        }
    }

    function createMenuOptions(allOptions) {
        let htmlContent = []
        for (let i = 0; i < allOptions.length; i++) {
            htmlContent.push(<StoryOption key={i} option={allOptions[i]} clickFunction={updateMenu}/>)
        }
        if(riddleStages.includes(stateStage)){
            htmlContent.push(
              <div className='col-12 menu-section'>
                <RiddleMinigameModal
                currency={gameData.currency}
                setGameMode={setGameMode}
                name={"Attempt the Riddle"}
                riddleID={riddleStages.indexOf(stateStage).toString()}
                gameData={gameData}
                getGameData={getGameData}
                setStateStage={setStateStage}
                storyBG={jsonStory[0]['animation_control'][0]['anim_add']}
                setStateCurrency={setStateCurrency}
                />
              </div>
             )
        }
        return htmlContent
    }

    function createNpcDialog(dialog) {
        return <div className={'dialog text-center'}>{dialog}</div>
    }

    useEffect(()=>{
        determineStage()
    },[])

    useEffect(() => {
      if (jsonStory !== '') {
        updateMenu(0)
        setConvo(createNpcDialog(jsonStory[0]['dialogue']))        
      }
    }, [jsonStory])

    // const textFrame = useRef(0)
    // const frameTime = (1000/60) * (60/30) - (1000/60) * 0.5;
    // useEffect( () => {
    //   let dialogue = '';

    //   if (fullConvo.current && convo !== fullConvo.current) {

    //   }
      
    //   const wait = ms =>
    //     new Promise(resolve => {
    //       setTimeout(() => {
    //         resolve();
    //       }, ms);
    //     });


    //   async function makeDialogue() {
    //     if (fullConvo.current && convo !== fullConvo.current) {
    //       dialogue += fullConvo.current[textFrame.current];
    //       textFrame.current++;
    //       await(wait(30))
    //       makeDialogue()
    //     }
    //   }
    // })

    function handleFunction(requestedFunction) {
        switch (requestedFunction) {
            case 'battle':
                setStateStage(prev=>prev+1)
                setGameMode("BattleView")
                break
            case 'map':
                setStateStage(prev=>prev+1)
                setGameMode("MapView")
                break
            case 'newGame':
                setGameMode("Character")
                break
            // case 'createSprites':
            //     displaySprites()
            //     break
            default:
                ///console.log("DEFAULT")
                break
        }
    }

    // function displaySprites() {

    // }
    useEffect( () => {
      if (playerChoices !== '') {
        let arr = []
        console.log('myconsolelog', playerChoices.characters)
        for (let i = 0; i < playerChoices.characters.length; i++) {
          arr.push(
            <div 
              className={`sprite ${playerChoices.characters[i].add}`}
            ></div>
          )
        }
        setSprites(arr)
      }
    }, [playerChoices])

    return (
        <div className="story-container" id="dialogue-bg">
            <div className="row story-top">
              { convo ?
                  <Typography 
                    variant="h6"
                    sx={{width:'95%'}}
                    id="story-dialogue"
                  >
                    {convo}
                  </Typography>
                : null }
            </div>
            <div className="story-middle">
              { 
                gameData && playerSprite && 
                  <div id="player-sprite" className={`sprite ${gameData.type}-right`}></div>
              }
             
              {sprites}
            </div>
            <div className="row story-bottom d-flex flex-column justify-content-end">
                {playerChoices ?
                  createMenuOptions(playerChoices.options)
                : null }
            </div>
            
        </div>
       
    )
}

export default StoryMenu
