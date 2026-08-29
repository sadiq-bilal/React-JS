import React from 'react'
import { useState } from 'react';

function Accordion({questions}) {

    const [showindex, setShowIndex] = useState();
    const handleClick = (index) => {
        
        if(index === showindex){
            setShowIndex(null);
        } else {
            setShowIndex(index);
        }
    }

  return (
    <div className='container'>

      <h1>Accordian UI</h1>
      
      {questions.map((question,index) => {
        return(
            <div key={index} >
              {/* Header */}
              <div className="child" onClick={() => handleClick(index)}>
                <p>{question.question} <span>{ index === showindex ? "-":"+"}</span></p>
               </div>
               

               {/*  Body */}
                {index === showindex && 
                    <p>{question.answer}</p>}
          </div>

        )
      })}
      
    </div>
  )
}

export default Accordion
