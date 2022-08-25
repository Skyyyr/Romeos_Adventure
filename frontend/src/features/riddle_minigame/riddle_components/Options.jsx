import ShuffleArray from '../riddle_helper_functions/ShuffleArray';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import axios from 'axios';


function RiddleOptions( {letterChoices, setLetterChoices, resetLettersGuessed, gameData, answer, getGameData} ) {

  const shuffleLetterChoiceTiles = () => {
    let newChoices = ShuffleArray(letterChoices)
    setLetterChoices(newChoices)
  }

  const purchaseHint = async () => {
    const resp = await axios.put('/gamedata',{'riddlepurchase': {'currency':(gameData.currency-1)}}).catch((response)=>{
        console.log(response)
    })
    if (resp.data['result']) {
      getGameData()
      const i = Math.floor(Math.random() * answer.length)
      alert(`
      RNGesus has revealed that letter number ${i} is ${answer[i]}...
      `)
    }
}

  return (
    <>
      <div>
        <ShuffleIcon className="riddle-icon" onClick={shuffleLetterChoiceTiles} />
        <RefreshIcon className="riddle-icon" onClick={() => resetLettersGuessed()} />        
      </div>
      <div>
        <Button 
          variant="contained"
          color="primary"
          onClick={purchaseHint}
          disabled={gameData.currency <= 0 ? true : false}
        >
          Hint ($1)
        </Button>
      </div>
    </>
  )
}

export default RiddleOptions