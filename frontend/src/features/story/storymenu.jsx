import { useEffect } from "react"
import story_test from "./stories/story_test.json"
import story_second from "./stories/story_second.json"
import StoryOption from "./storyoption"
import { useState } from "react"
import { STAGE_TEST_INTRO, STAGE_TEST_OUTRO } from "../../Components/Stages"
import startintro from "../story/stories/story_start_intro.json"
import startoutro from "../story/stories/story_start_outro.json"

// --------TODO-------
// update jsonStory and playerChoices to Intro


function StoryMenu({setGameMode,stateStage}) {
    

    const [playerChoices, setPlayerChoices] = useState(startintro[0])
    const [convo, setConvo] = useState('')
    const [jsonStory, setJsonStory] = useState(startintro)

    function updateMenu(clickedOptionId) {
        for (let i = 0; i < jsonStory.length; i++) {
            if (jsonStory[i]['id'] === clickedOptionId) {
                setPlayerChoices(jsonStory[i])
                handleFunction(jsonStory[i]['func'])
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
            case STAGE_TEST_INTRO:
                console.log('STAGE_TEST_INTRO')
                setJsonStory(startintro)
                break
            case STAGE_TEST_OUTRO:
                console.log('STAGE_TEST_OUTRO')
                setJsonStory(startoutro)
                break
            case STAGE_1_CONVO:
                console.log('stage 2')
                break
            case 3:
                console.log('stage 3')
                break
            case 4:
                console.log('stage 4')
                break
            case 5:
                console.log('stage 5')
                break
            case 6:
                console.log('stage 6')
                break
            case 7:
                console.log('stage 7')
                break
            case 8:
                console.log('stage 8')
                break
            case 9:
                console.log('stage 9')
                break
            case 10:
                console.log('stage 10')
                break
            case 11:
                console.log('stage 11')
                break
            default:
                setJsonStory(story_test)
                console.log('none')
                break
        }
           
    }

    function handleAnimation(requestedHtml, requestedAnimationAdd, requestedAnimationRemove) {
        const htmlElement = document.getElementById(requestedHtml)
        if (requestedAnimationAdd !== "") {
            htmlElement.classList.add(requestedAnimationAdd)
        }
        if (requestedAnimationRemove !== "") {
            htmlElement.classList.remove(requestedAnimationRemove)
        }
    }

    function createMenuOptions(allOptions) {
        let htmlContent = []
        for (let i = 0; i < allOptions.length; i++) {
            htmlContent.push(<StoryOption key={i} option={allOptions[i]} clickFunction={updateMenu}/>)
        }
        console.log(htmlContent)
        return htmlContent
    }

    function createNpcDialog(dialog) {
        console.log("Dialog", dialog)
        return <div className={'dialog text-center'}>{dialog}</div>
    }

    useEffect(()=>{
        determineStage()
    },[])

    useEffect(() => {
        updateMenu(0)
        setConvo(createNpcDialog(jsonStory[0]['dialogue']))
    }, [jsonStory])

    function handleFunction(requestedFunction) {
        switch (requestedFunction) {
            case 'battle':
                setGameMode("BattleView")
                break
            case 'map':
                setGameMode("MapView")
                break
            case 'newGame':
                setGameMode("Character")
            default:
                console.log("DEFAULT")
                break
        }
    }

    return (
        <div className="story-container">
            <div className="convo" id="story-top">
            {convo}
            </div>
            <div className="row story-bottom d-flex flex-column justify-content-end">
                {createMenuOptions(playerChoices.options)}
            </div>
        </div>
       
    )
}

export default StoryMenu
