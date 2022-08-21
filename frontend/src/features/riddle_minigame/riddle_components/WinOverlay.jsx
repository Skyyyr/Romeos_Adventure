import { Button } from '@mui/material'
import { useRef } from 'react'


function RiddleWinOverlay( {answer, riddleIdNumber, setRiddleIdNumber, handleClose} ) {

  const firstAnswer = useRef(answer)

  // const nextRiddle = () => {
  //   const next = riddleIdNumber+1
  //   setRiddleIdNumber(next)
  // }

  return (
    <div className="text-center" style={'color: gold'}>
      <h1>
        <u>Correct!</u>
      </h1>
      <hr id="win-horiz-rule"/>
      <h3 className="mt-5 mb-5">
        The correct answer is
      </h3>
      <h2 className="mb-5">
        {firstAnswer.current}
      </h2>
      <Button variant="contained" onClick={() => handleClose()} id="riddle-win-button">
        Continue
      </Button>
    </div>
  )
}

export default RiddleWinOverlay