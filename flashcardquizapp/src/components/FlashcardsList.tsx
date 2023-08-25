import React from 'react'
import Flashcards from './Flashcards'

export const FlashcardsList = () => {

    interface Flashcard {
        id: number;
        question: string;
        answer: string;
        options: string[];
    }
    
  return (
    <div className='card-grid'>
        {flashcards.map(flashcard: Flashcard => {
            <Flashcards flashcard={flashcard} key={flashcard.id} />
        })}      
    </div>
  )
}

export default FlashcardsList
