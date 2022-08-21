

function AnswerField( {lettersGuessed, setLettersGuessed} ) {

  // removes letters from answer state when clicked
  function handleUnselectLetterClick(event) {
    if (event.target.textContent !== '_') {
      let newLettersGuessed = JSON.parse(JSON.stringify(lettersGuessed))
      const index = event.target.dataset.index
      newLettersGuessed[index][0] = ''
      newLettersGuessed[index][1] = ''
      setLettersGuessed(newLettersGuessed)
    }
  }

  return (
    <div id="ans-container">
      { lettersGuessed &&
        lettersGuessed.map((elem, index) => {
          return (
            <div className="ans-tile" id={`ans${index}`} data-index={index} onClick={(e) => handleUnselectLetterClick(e)}>
              { elem[1] ? elem[1] : '_' }
            </div>
          )
        })
      }
    </div>
  )
}

export default AnswerField