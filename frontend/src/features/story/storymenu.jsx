import { useEffect } from "react"
import story_test from "./stories/story_test.json"
import StoryOption from "./storyoption"
import { useState } from "react"
function StoryMenu() {

    const [playerChoices, setPlayerChoices] = useState(story_test[0])
    const [convo, setConvo] = useState('')


    function updateMenu(clickedOptionId) {
        for (let i = 0; i < story_test.length; i++) {
            console.log(story_test[i])
            if (story_test[i]['id'] === clickedOptionId) {
                setPlayerChoices(story_test[i])
                handleFunction(story_test[i]['func'])
                setConvo(createNpcDialog(story_test[i]['dialogue']))
                if (story_test[i]["anim"]) {
                    for (let j = 0; j < story_test[i]['animation_control'].length; j++) {
                        handleAnimation(
                            story_test[i]['animation_control'][j]['html'],
                            story_test[i]['animation_control'][j]['anim_add'],
                            story_test[i]['animation_control'][j]['anim_remove']
                        )
                    }
                }
                break
            }
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

    useEffect(() => {
        setConvo(createNpcDialog(story_test[0]['dialogue']))
    }, [])

    function handleFunction(requestedFunction) {
        switch (requestedFunction) {
            case 'test':
                console.log("HI")
                break
            default:
                console.log("DEFAULT")
                break
        }
    }

    return (
        <div>
            {convo}
            {createMenuOptions(playerChoices.options)}
        </div>
    )
}

export default StoryMenu