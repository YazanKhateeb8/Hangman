import React from 'react'

export default function Score({score}) {
  const statusScore = () => {
    if(score >= 60) { return "green-score"}
    if(score >= 40 && score < 60) { return "orange-score"}
    else{return "red-score"}
  }

  return (
    <div className={statusScore()}>{score}</div>
  )
}
