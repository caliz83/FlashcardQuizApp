import React, { useState, useEffect, useRef } from 'react';
// import FlashcardsList, { Flashcard } from './FlashcardsList';

interface Flashcard {
    id: number;
    question: string;
    answer: string;
    options: string[];
}

interface FlashcardProps {
    flashcards: Flashcard;
}

const Flashcards = ( {flashcards}: FlashcardProps ) => {

    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState<number | string>('initial');

    const frontEl = useRef(null);
    const backEl = useRef(null);  
    
    // function setMaxHeight() {
    //     if(frontEl.current && backEl.current) {
    //         const frontHeight = frontEl.current.getBoundingClientRect().height;
    //         const backHeight = backEl.current.getBoundingClientRect().height;
    //         //change to const [rect, setRect] = useState(getRect(current)); or...?????
    //         setHeight(Math.max(frontHeight, backHeight, 100));
    //     }
    // }

    // useEffect(setMaxHeight, [flashcards.question, flashcards.answer, flashcards.options]);
    // useEffect(() => {
    //     window.addEventListener('resize', setMaxHeight);
    //     return () => {
    //         window.removeEventListener('resize', setMaxHeight);
    //     }    
    // }, [])

  return (
    <div onClick={() => setFlip(!flip)} className={`card ${flip ? 'flip' : ''}`} style={{height : height}}>
    <div className='front' ref={frontEl}>
        {flashcards.question}  
        <div className='flashcard-options'>
            {flashcards.options.map(option => (
                <div key={option} className='flashcard-option'>{option}</div>

            ))}            
            </div>    
    </div>
    <div className='back' ref={backEl}>{flashcards.answer}</div>
    {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  )
}

export default Flashcards
