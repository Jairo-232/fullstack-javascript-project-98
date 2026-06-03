import { playGame } from '../index.js';

const getGcd = (a, b) => {
    
    while (b !== 0) {
        const r = b;
        b = a % b;
        a = r; 
    }
    return a; 
}; 

const generateQuestion = () => {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    return {
        question: `${a} ${b}`,
        correctAnswer: getGcd(a, b).toString()
    }
};

export const playGcd = (name) => {
    playGame(name, 'Encuentra el máximo común divisor de los números dados.', generateQuestion);
};



