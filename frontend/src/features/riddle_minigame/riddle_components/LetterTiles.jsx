import { useEffect } from "react"
import { Button } from "@mui/material"


function LetterTiles( {lettersGuessed, setLettersGuessed, letterChoices} ) {

  // Adds clicked letters to the answer state
  function handleSelectLetterClick(event) {
    for (let i = 0; i < lettersGuessed.length; i++) {
      if (lettersGuessed[i][0] == '') {
        let newLettersGuessed = JSON.parse(JSON.stringify(lettersGuessed))
        newLettersGuessed[i][0] = event.target.dataset.id
        newLettersGuessed[i][1] = event.target.value
        setLettersGuessed(newLettersGuessed)
        return
      }
    }
  }

  // Determines visibility of chosen and unchosen letter tiles
  useEffect(() => {
    if (letterChoices && lettersGuessed) {
      letterChoices.forEach(letter => {
        let letterTile = document.getElementById('ltr'+letter[0])
        let chosen = false
        lettersGuessed.forEach(guessed => {
          if (letter[0] === guessed[0]) chosen = true
        })
        if (chosen) letterTile.style.visibility = 'hidden'
        else letterTile.style.visibility = 'visible'
      })
    }
  })
  
  return (
    <div id="letter-choices-container">
      { 
        letterChoices.map((elem) => {
          return (
            <Button
              variant="contained"
              id={`ltr${elem[0]}`}
              data-id={elem[0]}
              value={elem[1]}
              onClick={(e) => handleSelectLetterClick(e)}
            >
              {elem[1]}
            </Button>
          )
        })
      }
    </div>
  )
}

export default LetterTiles