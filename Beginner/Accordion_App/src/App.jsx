import React from 'react'
import Accordion from './Components/Accordion';

function App() {
  const questions = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is useState?",
    answer: "useState is a React Hook used to manage state."
  },
  {
    question: "What is JSX?",
    answer: "JSX allows us to write HTML-like syntax inside JavaScript."
  },
   {
            question: "What is a component?",
            answer: "A component is a reusable piece of UI in React."
        },
        {
            question: "What is useState?",
            answer: "useState is a React Hook used to manage state in a component."
        },{
            question: "What is props?",
            answer : "Props are used to pass data from parent to child."
        }
     ];
  
  return (
    <div>
      <Accordion
      questions = {questions}
     
      />

    </div>
  )
}

export default App

