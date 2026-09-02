import React from 'react'
import { useState } from 'react';

function CharCounter() {
    const [text, setText] = useState("");
    const maxLength = 50;
    const str = "Limit reached";
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className='container'>
      <h1>Char Counter</h1>
    <textarea
      placeholder='Type something here'
      value={text}
      onChange={(e) => {
        setText(e.target.value)
        }}
      maxLength={maxLength} // 
    ></textarea>
    <p>No of characters : {text.length} / {maxLength}</p>
    <p>Remaining : {text.length >= 50  ?  str : (maxLength - text.length)}</p>
    <p>No of Words : {wordCount}</p>
    {text.length !== 0 && <button  onClick={() => {
      setText("");
    }}>Clear Text</button>}
    </div>
  )
}

export default CharCounter;

