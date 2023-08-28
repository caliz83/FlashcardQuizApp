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

const App = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(TestIt);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(response => {
        setFlashcards(response.data.results.map((questionItem: any, index: number) => {
          const answer = decodeWeirdness(questionItem.correct_answer);
          const options = [...questionItem.incorrect_answers.map((a: string) => decodeWeirdness(a)), answer];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeWeirdness(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          };
        }));
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function decodeWeirdness(str: string): string {
    const textArea = document.createElement('textArea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <div className="container">
      <FlashcardsList flashcards={flashcards} />
    </div>
  );
};

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

export default App;