import React, { useState } from 'react';
import FlashcardsList from './FlashcardsList';

interface FlashcardProps {
    flashcard: {
        question: string;
        answer: string;
        options: string[];
    }
}

const Flashcards = ( {flashcard}: FlashcardProps ) => {

    const [flip, setFlip] = useState(false);

  return (
    <div onClick={() => setFlip(!flip)} className={`card ${flip ? 'flip' : ''}`}>
    <div className='front'>
        {flashcard.question}  
        <div className='flashcard-options'>
            {flashcard.options.map((option, index) => {
                return <div key={index} className='flashcard-option'>{option}</div>
            })}
            </div>    
    </div>
    <div className='back'>{flashcard.answer}</div>
    {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  )
}

export default Flashcards
