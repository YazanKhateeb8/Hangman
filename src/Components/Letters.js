import React from 'react'
import Letter from './Letter'

export default function Letters({letterStatus , selectedLetter}) {
  let letters = Object.keys(letterStatus)
  
  return (
    <div>
      <div>Available Letters</div>
      {letters.map((letter) => ( <Letter letter={letter} selectedLetter ={selectedLetter} letterClass={letterStatus[letter] ? "line-through" : " "} /> ))}
    </div>
  )
}
