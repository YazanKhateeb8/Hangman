import React, { useState } from 'react'

export default function Letter({letter , letterClass , selectedLetter}) {

  return (
    <span onClick={() => selectedLetter(letter)} className={letterClass}>{letter}</span>
  )
}
