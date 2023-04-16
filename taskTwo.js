import fs from "fs";
import {readAnswer} from "./helper/readanswer.js"


const { secondTask } = JSON.parse(fs.readFileSync('./task/task.json'));
// Перший спосіб, який при виявленні першого співпадіння закінчує роботу функції
function sameNumbers(array) {
    console.log(array);
    const individualNumber = {};
    for (const number of array) {
        individualNumber[number] = individualNumber[number] ? individualNumber[number] + 1 : 1;
        console.log(individualNumber);
        if (individualNumber[number] > 1) {
            console.log(`${number} вже було в масиві`);
            const answer = readAnswer();
            const newAnswer = {...answer,answer2:`${number} вже було в масиві`}
            console.log(newAnswer);
            return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer));
        };     
    }
             const answer = readAnswer();
            const newAnswer = {...answer,answer2:`чисел які повторюються в масиві не знайдено`}
            console.log(newAnswer);
            return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer));
};

// 2 спосіб який до кінця проходить масив і виявляє всі співпадіння
    function sameNumbersSecond(array) {
    array.filter((number, index, numbers) => {
    console.log(number, numbers.indexOf(number)); 
    console.log(index); 
        if (numbers.indexOf(number) !== index) {
            console.log(`${number} вже було у цьому масиві`);
            return
    }
    return numbers.indexOf(number) !== index;
});
}


sameNumbers(secondTask);
// sameNumbersSecond(secondTask);