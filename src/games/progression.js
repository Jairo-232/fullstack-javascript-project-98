import { playGame } from '../index.js';

const generateQuestion = () => {
  const a = Math.floor(Math.random() * 100) + 1;
  const b = Math.floor(Math.random() * 10) + 1;

  const progression = [];
    for (let j = 0; j < 10; j++) {
      progression.push(a + j * b);
    };
  const positionHidden = Math.floor(Math.random() * 10);
  const correctAnswer = progression[positionHidden].toString();
  progression[positionHidden] = '..'; // ← oculta el número
    return {
      question: progression.join(' '),
      correctAnswer
    }
};

export const playProgression = (name) => {
  playGame(name, '¿Qué número falta en la progresión?', generateQuestion);
}




