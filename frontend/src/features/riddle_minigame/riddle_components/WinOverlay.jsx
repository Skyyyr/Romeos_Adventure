import { Button } from '@mui/material'
import { useRef } from 'react'


function RiddleWinOverlay( {answer, handleRiddleClose} ) {

  const firstAnswer = useRef(answer)

  return (
    <div className="text-center">
      <h1>
        <u>Correct!</u>
      </h1>
      <h3 className="mt-5 mb-5">
        The correct answer is
      </h3>
      <h2 className="mb-5">
        {firstAnswer.current}
      </h2>
      <Button
        variant="contained"
        onClick={handleRiddleClose}
        id="riddle-win-button"
      >
        Continue
      </Button>
    </div>
  )
}

export default RiddleWinOverlay