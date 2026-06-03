import { playGame } from '../index.js'; 


const operators = ['+', '-', '*'];
const getResult = (a, b, operator) => {

    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
    }
};

const generateQuestion = () => {
   
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const operator = operators[Math.floor(Math.random() * 3)];
    return {
        question: `${a} ${operator} ${b}`,
        correctAnswer: getResult(a, b, operator).toString()
    }
};

export const playCal = (name) => {
    playGame(name, '¿Cuál es el resultado de la expresión?', generateQuestion);
}

