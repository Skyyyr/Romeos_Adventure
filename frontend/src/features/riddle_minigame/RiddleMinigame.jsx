import './Riddle.css';
import { useState, useEffect, useRef } from 'react';
// Components
import AnswerField from './riddle_components/AnswerField';
import Options from './riddle_components/Options';
import LetterTiles from './riddle_components/LetterTiles';
import WinOverlay from './riddle_components/WinOverlay';
// data & helpers
import riddles from './riddle_data/riddles.json';
import NewLetterChoices from './riddle_helper_functions/NewLetterChoices';


function Riddle_Minigame( {handleRiddleClose, riddleID, gameData,getGameData} ) {

  let isMounted = useRef(false);

  const [ riddleIdNumber, setRiddleIdNumber ] = useState(riddleID);
  const [ lettersGuessed, setLettersGuessed ] = useState(false);
  const [ letterChoices, setLetterChoices ] = useState(false);
  const [ riddleSolved, setRiddleSolved ] = useState(false);

  const CURRENT_RIDDLE = riddles.find(x => x.id == riddleIdNumber);
  const RIDDLE_QUESTION = CURRENT_RIDDLE.question;
  const RIDDLE_ANSWER = CURRENT_RIDDLE.answer.toUpperCase();
  
  // Renders initial gameboard
  useEffect( () => {
    setupNewGame();
  }, [])
  
  // Checks win status every time user adds a letter to answer area
  useEffect( () => {
    if (lettersGuessed) {
      checkForWin();
    }
  }, [lettersGuessed])

  // Sets up a new riddle when riddleID changes
  useEffect( () => {
    if (riddleSolved === true && isMounted.current) {
      resetLettersGuessed();
      setLetterChoices(NewLetterChoices(RIDDLE_ANSWER));
      setRiddleSolved(false);
    }
    // dev reset:
    if (isMounted.current) {
      resetLettersGuessed();
      setLetterChoices(NewLetterChoices(RIDDLE_ANSWER));
      setRiddleSolved(false);
    }
  }, [riddleIdNumber])

  function handleContinueClick() {
    handleRiddleClose(true)
  }

  // Generates new letter choices and clears answer field for new riddle
  function setupNewGame() {
    resetLettersGuessed();
    setLetterChoices(NewLetterChoices(RIDDLE_ANSWER));
    setRiddleSolved(false);
    isMounted.current = true;
  }

  // Creates and sets new empty array for answer field
  function resetLettersGuessed(num = riddleIdNumber) {
    const freshAnswerArray = new Array(riddles.find(x => x.id === num).answer.length).fill(['','']);
    setLettersGuessed(freshAnswerArray);
  }

  // Checks for win status and produces win-screen overlay after 0.5 seconds
  function checkForWin() {
    const user_answer = lettersGuessed.map((elem) => {
      if (elem[1].match(/[A-Z]/)) return elem[1];
    }).join('')
    if (RIDDLE_ANSWER === user_answer) {
      setTimeout( () => {
        setRiddleSolved(true);
      }, 500)
    }
    setAnswerTileColor(user_answer);
  }

  // Sets answer field text color based on state of users current guess:
  // If incomplete: White. If filled: correct = green, incorrect = orange
  function setAnswerTileColor(user_answer) {
    const answerTiles = document.querySelectorAll('.ans-tile');
    answerTiles.forEach(element => {
      if (user_answer.length === RIDDLE_ANSWER.length) {
        if (RIDDLE_ANSWER === user_answer) element.style.color = 'rgb(0,220,0)';
        else element.style.color = 'rgb(255,130,0)';
      }
      else element.style.color = 'rgb(255,255,255)';
    })
  }

  return (
    <section id="riddle-container">
      { letterChoices ?
        <>
          <div className="centered" id="title-box">
            <div className="text-center">
              <h2>
                You Must Solve the Riddle
              </h2>
            </div>
          </div>
          <hr className="my-0"/>
          <div className="centered" id="question-box">
            <div id="display-question">
              <h3>
                {RIDDLE_QUESTION}
              </h3>
            </div>
          </div>
          <div id="options-box">
            <Options
              letterChoices={letterChoices}
              setLetterChoices={setLetterChoices}
              resetLettersGuessed={resetLettersGuessed}
              answer={RIDDLE_ANSWER}
              gameData={gameData}
              getGameData={getGameData}
            />
          </div>
          <div className="centered" id="answer-box">
            <AnswerField 
              lettersGuessed={lettersGuessed}
              setLettersGuessed={setLettersGuessed}
            />
          </div>
          <div className="centered" id="letters-box">
            <LetterTiles 
              lettersGuessed={lettersGuessed} 
              setLettersGuessed={setLettersGuessed} 
              letterChoices={letterChoices}
            />
          </div>
        </> : null
      }
      { riddleSolved ?
        <div className="win-overlay centered">
          <WinOverlay
            answer={RIDDLE_ANSWER}
            handleRiddleClose={() => handleContinueClick()}
          />
        </div> : null 
      }
    </section>
  )
}

export default Riddle_Minigame



  /////////////////////// ORIGINAL SAVE/LOAD DATA CODE /////////////////////////////

  // useEffect( () => {
  //   if (letterChoices) {
  //     save_data()
  //   }
  // }, [letterChoices])

  // async function save_data() {
  //   const letterChoicesAsString = [].concat(...letterChoices).join('')
  //   const data = {
  //     riddle_number: riddleIdNumber,
  //     riddle_letter_choices: letterChoicesAsString
  //   }
  //   const response = await axios.post('/save', data).catch(resp => {
  //     console.log('save error: ', resp)
  //   })
  //   console.log('data saved: ', response)
  // }

  // async function load_game_data() {
  //   const response = await axios.get('/loadsave').catch(resp => {
  //     console.log('riddle load error: ', response)
  //   })
  //   console.log('load response: ', response)
  //   isMounted.current = true
  //   if (response.data['fail']) {
  //     getInitialData()
  //   } else {
  //     const game_data = response.data[0].fields
  //     if (game_data['riddle_letter_choices']) {
  //       loadGameData(game_data)
  //     } else {
  //       getInitialData()
  //     }
  //   }
  // }

  // function loadGameData(game_data) {
  //   console.log('loading game data')
  //   const loadedLetterChoices = rebuildNestedArrayFromString(game_data['riddle_letter_choices'])
  //   setRiddleIdNumber(game_data['riddle_number'])
  //   resetLettersGuessed(game_data['riddle_number'])
  //   setLetterChoices(loadedLetterChoices)
  // }