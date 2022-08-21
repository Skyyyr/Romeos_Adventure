import ShuffleArray from '../riddle_helper_functions/ShuffleArray';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RefreshIcon from '@mui/icons-material/Refresh';


function RiddleOptions( {letterChoices, setLetterChoices, resetLettersGuessed} ) {

  const shuffleLetterChoiceTiles = () => {
    let newChoices = ShuffleArray(letterChoices)
    setLetterChoices(newChoices)
  }

  return (
    <>
      <ShuffleIcon className="riddle-icon" onClick={shuffleLetterChoiceTiles} />
      <RefreshIcon className="riddle-icon" onClick={resetLettersGuessed} />
    </>
  )
}

export default RiddleOptions