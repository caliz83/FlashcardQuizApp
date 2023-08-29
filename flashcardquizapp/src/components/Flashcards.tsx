import React, { useState, useEffect, useRef } from 'react';
import FlashcardsList, { Flashcard } from './FlashcardsList';

// interface Flashcard {
//     id: number;
//     question: string;
//     answer: string;
//     options: string[];
// }

interface FlashcardProps {
    flashcard: Flashcard;
}

const Flashcards = ( {flashcard}: FlashcardProps ) => {

    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState<number | string>('initial');

    const frontEl = useRef(null);
    const backEl = useRef(null);  
    
    function setMaxHeight() {
        if(frontEl.current && backEl.current) {
            const frontHeight = frontEl.current.getBoundingClientRect().height;
            const backHeight = backEl.current.getBoundingClientRect().height;
            //change to const [rect, setRect] = useState(getRect(current)); or...?????
            setHeight(Math.max(frontHeight, backHeight, 100));
        }
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options]);
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight);
        return () => {
            window.removeEventListener('resize', setMaxHeight);
        }    
    }, [])

  return (
    <div onClick={() => setFlip(!flip)} className={`card ${flip ? 'flip' : ''}`} style={{height : height}}>
    <div className='front' ref={frontEl}>
        {flashcard.question}  
        <div className='flashcard-options'>
            {flashcard.options.map(option => (
                <div key={option} className='flashcard-option'>{option}</div>

            ))}            
            </div>    
    </div>
    <div className='back' ref={backEl}>{flashcard.answer}</div>
    {/* {flip ? flashcard.answer : flashcard.question} */}
    </div>
  )
}

export default Flashcards
