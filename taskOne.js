import fs from "fs";
import { readAnswer } from './helper/readanswer.js';

const {firstTask} = JSON.parse(fs.readFileSync('./task/task.json'));
const [number1, number2] = firstTask;

// функція, де потрібно вказати два числа
function friendsGame(number1, number2) {
    const answer22 = readAnswer();
    console.log(answer22);
    
    if (typeof (number1) !== 'number' || typeof (number2) !== 'number') {
        console.log("загадані значення мають бути числами");
        const answer = readAnswer();
        const answerNew = {...answer, answer1: "загадані значення мають бути числами" };
        return fs.writeFileSync('./answer/answer.json', JSON.stringify(answerNew))
    };

    for (let i = number1; i <= number2; i *= 2){
        console.log(i, number2);
        if (i === number2) {
            console.log(`число ${number1} можна перетворити на число ${number2} за допом множення на 2`);
            const answer = readAnswer();
            const answerNew = {...answer, answer1: `число ${number1} можна перетворити на число ${number2} за допом множення на 2` };
            console.log(JSON.stringify(answerNew));
            return fs.writeFileSync('./answer/answer.json', JSON.stringify(answerNew))
        }
    };
    for (let i = number1; i <= number2; i = Number(i.toString() + '1')){
        console.log(i, number2);
        if (i === number2) {
            i === number2
            console.log(`число ${number1} можна перетворити на число ${number2} за допом додавання чисда один до строкового значення`);
            const answer = readAnswer();
            const answerNew = {...answer, answer1: `число ${number1} можна перетворити на число ${number2} за допом додавання чисда один до строкового значення` };
            console.log(JSON.stringify(answerNew));
            return fs.writeFileSync('./answer/answer.json', JSON.stringify(answerNew));
           
        }
    }
    console.log(`число ${number1} не можна перетворити на число ${number2} одним з цих способів`);
    const answer = readAnswer();
    const answerNew = {...answer, answer1: `число ${number1} не можна перетворити на число ${number2} одним з цих способів` };
    console.log(JSON.stringify(answerNew));
    return fs.writeFileSync('./answer/answer.json', JSON.stringify(answerNew));
}

friendsGame(number1,number2)
