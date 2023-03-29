import Score from './Components/Score';
import Solution from './Components/Solution';
import Letters from './Components/Letters';
import Letter from './Components/Letter';
import { useState } from 'react'
import EndGame from './Components/EndGame';

function App() {
  const [score , setScore] = useState(80)

  const [solution , setSolution] = useState({
    word : "FUCKER",
    hint : "wdl3"
  })

  const generateLetterStatuses = function () {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };

  

  const [game , setGame] = useState({
    letterStatus : generateLetterStatuses(),
  })

  const selectedLetter = (letter) => {
    let newLetterStatus = {...game.letterStatus}
    newLetterStatus[letter] = true;
    setGame({letterStatus : newLetterStatus})
    isExistLetter(letter)
  }

  const isExistLetter = (letter) => {
      let newScore = score
      solution.word.includes(letter) 
      ? newScore+=5 
      : newScore-=20
      setScore(newScore)
  }


  const endGame = () => {
    let countLetter=0
    let arrayLetters = solution.word.split("")
    arrayLetters.forEach((letter) => {
      if(game.letterStatus[letter] === true){
          countLetter++
      }
    })
    if(countLetter == arrayLetters.length){
      return "you Win !"
    }
    if(score <= 0){
      return "you Lost !"
    }
    
  }
  

  
  return (
    <>
    <Score score={score} />
    <Solution letterStatus={game.letterStatus} solution={solution}/>
    <Letters letterStatus={game.letterStatus} selectedLetter={selectedLetter}/>
    <EndGame text={endGame()}/>
    </>
  );
}

export default App;
