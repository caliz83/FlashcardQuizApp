import React from 'react'
import Flashcards from './Flashcards'

interface Flashcard {
    id: number;
    question: string;
    answer: string;
    options: string[];
}

interface FlashcardsListProps {
    flashcards: Flashcard[];
}

const FlashcardsList = ({flashcards}: FlashcardsListProps) => {

    
  return (
    <div className='card-grid'>
        {flashcards.map(flashcard: Flashcard => {
            <Flashcards flashcard={flashcard} key={flashcard.id} />
        })}      
    </div>
  )
}

export default FlashcardsList
