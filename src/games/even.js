import { playGame } from '../index.js'; 

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return {
    question: number,
    correctAnswer: isEven(number) ? 'yes' : 'no'
  };
};

export const playEven = (name) => {
  playGame(name, 'Responde "yes" si el número es par, de lo contrario responde "no".', generateQuestion);
};
  
  
