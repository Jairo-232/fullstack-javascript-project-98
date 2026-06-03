import readlineSync from 'readline-sync';

export const playGame = (name, description, generateQuestion) => {
  console.log(description);
  
  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = generateQuestion();
     const answer = readlineSync.question(`Pregunta: ${question}\nTu respuesta: `);
            if (answer === correctAnswer) {
                console.log('¡Correcto!');
            } else {
                console.log(`Respuesta incorrecta. La respuesta correcta es ${correctAnswer}`);
                console.log(`¡Intentémoslo de nuevo, ${name}!`);
                return;
            }
        }
        console.log(`¡Felicidades, ${name}!`);   
}