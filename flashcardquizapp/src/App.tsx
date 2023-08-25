import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../src/App.css';

import Flashcards from "./components/Flashcards";
import FlashcardsList from "./components/FlashcardsList";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  options: string[];
}

const App: React.FC = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(TestIt);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(response => {
        // tbd
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const TestIt: Flashcard[] = [
    {
      id: 1,
      question: 'What does a dog say?',
      answer: 'woof',
      options: [
        'ello, guvnah',
        'woof',
        'neigh',
        'squeak'
      ]
    },
    {
      id: 2,
      question: 'What does a cat say?',
      answer: 'meow',
      options: [
        'meow',
        'moo',
        'oink',
        'ungga ungga'
      ]
    },
    {
      id: 3,
      question: 'What does a lion say?',
      answer: 'roar',
      options: [
        'yip',
        'To be or not to be',
        'roar',
        'quack'
      ]
    }
  ];

  return (
    <div>
      <FlashcardsList flashcards={flashcards} />
    </div>
  );
};

export default App;