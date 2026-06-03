import { playGame } from '../index.js';

const getPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    if (number === 2 ) {
        return true; 
    }
    if (number % 2 === 0) {
        return false; 
    }
    for (let i =  3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const generateQuestion = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const isPrimeNumber = getPrime(number);
    return {
        question: number,
        correctAnswer: isPrimeNumber ? 'yes' : 'no'
    }
};

export const playPrime = (name) => {
    playGame(name, 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".', generateQuestion);
};

