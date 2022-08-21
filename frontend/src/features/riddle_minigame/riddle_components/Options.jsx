import { shuffleArray } from './riddle_components/riddlehelperfunctions';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RefreshIcon from '@mui/icons-material/Refresh';


function RiddleOptions( {letterChoices, setLetterChoices, resetLettersGuessed} ) {

  const shuffleLetterChoiceTiles = () => {
    let newChoices = shuffleArray(letterChoices)
    setLetterChoices(newChoices)
  }

  return (
    <>
      <ShuffleIcon className="riddle-icon" onClick={shuffleLetterChoiceTiles} />
      <RefreshIcon className="riddle-icon" onClick={() => resetLettersGuessed()} />
    </>
  )
}

export default RiddleOptions