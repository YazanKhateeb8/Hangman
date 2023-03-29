import React from 'react'
import Letter from './Letter'

export default function Solution({letterStatus , solution}) {
  let letterWord = solution.word.split("")
  
  return (
    <div>
      {letterWord.map(l => <Letter letter={letterStatus[l] ? l : "_ "}/>)}
      <div>
      <em>{solution.hint}</em>
      </div>
    </div>
    
  )
}
