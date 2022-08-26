import { useEffect } from "react"
import story_test from "./stories/story_test.json"
import story_second from "./stories/story_second.json"
import StoryOption from "./storyoption"
import { useState } from "react"
import background from "../assets/field_night_bg.png"

function StoryMenu({setGameMode,stage}) {

    const [playerChoices, setPlayerChoices] = useState(story_second[0])
    const [convo, setConvo] = useState('')
    const [testState, setTestState] = useState(false)
    const [jsonStory, setJsonStory] = useState(story_second)
    const [playerOptions, setPlayerOptions] = useState()


    // function updateMenu(clickedOptionId) {
    //     for (let i = 0; i < story_test.length; i++) {
    //         console.log(story_test[i])
    //         if (story_test[i]['id'] === clickedOptionId) {
    //             setPlayerChoices(story_test[i])
    //             handleFunction(story_test[i]['func'])
    //             setConvo(createNpcDialog(story_test[i]['dialogue']))
    //             if (story_test[i]["anim"]) {
    //                 for (let j = 0; j < story_test[i]['animation_control'].length; j++) {
    //                     handleAnimation(
    //                         story_test[i]['animation_control'][j]['html'],
    //                         story_test[i]['animation_control'][j]['anim_add'],
    //                         story_test[i]['animation_control'][j]['anim_remove']
    //                     )
    //                 }
    //             }
    //             break
    //         }
    //     }
    // } 
    function updateMenu(clickedOptionId) {
        console.log('this is update menu', jsonStory[0]['dialogue'])
        for (let i = 0; i < jsonStory.length; i++) {
            // console.log(jsonStory[i])
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
        switch(stage){
            case 0:
                console.log('stage 0')
                setJsonStory(story_test)
                break
            case 1:
                console.log('stage 1')
                setJsonStory(story_second)
                break
            case 2:
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
                console.log('none')
                break
        }
           
    }


    function testSwap(){
        // console.log("test swap starts")
        if(testState){
            setJsonStory(story_second)
            setTestState(false)
            // console.log("test swap false")
        } else{
            setJsonStory(story_test)
            setTestState(true)
            // console.log("test swap true")
        }
        console.log(jsonStory)
        
    }

    // useEffect(() => {updateMenu(jsonStory[0])},[jsonStory, playerChoices])

    // useEffect(() => {
    //     setPlayerOptions(createMenuOptions(playerChoices.options))
    // },[playerChoices])

    // useEffect(() => { console.log('this is player options', playerOptions)
    // },[playerOptions])


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
        // createMenuOptions(playerChoices.options)
        setConvo(createNpcDialog(jsonStory[0]['dialogue']))
    }, [jsonStory])

    // ()=>setGameMode("MapView")
    function handleFunction(requestedFunction) {
        switch (requestedFunction) {
            case 'test':
                console.log("HI")
                break
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
            
            {/*<button onClick={testSwap}>TEST</button>*/}
            <div className="convo" id="story-top">
            {convo}
            </div>
            <div className="row story-bottom d-flex flex-column justify-content-end">
                {createMenuOptions(playerChoices.options)}
                {/* {playerOptions} */}
            </div>
        </div>
    )
}

export default StoryMenu