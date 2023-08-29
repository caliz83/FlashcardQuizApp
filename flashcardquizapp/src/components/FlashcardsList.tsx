import React from 'react'
import Flashcards from './Flashcards'

export interface Flashcard {
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
            <Flashcards flashcard={...FlashcardProps, flashcard} key={Flashcard.id} />
        })}      
    </div>
  )
}

export default FlashcardsList
