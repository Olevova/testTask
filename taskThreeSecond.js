import fs from 'fs';
import { readAnswer } from './helper/readanswer.js';

const {thirdTask:{second}} = JSON.parse(fs.readFileSync('./task/task.json'));

// першим параметром передаємо обєкт з кількістю закуплених футболок, другий параметер масив з розмірами спортсменів
function isIn(objHave, arrNeed) {
    const sizeChart = Object.keys(objHave);
    for (const tShirt of arrNeed) {
        if (objHave[tShirt] > 0) {
            objHave[tShirt] -= 1;
            console.log(objHave, "have", tShirt);
        }
        else if (objHave[tShirt] <= 0) {
            const index = sizeChart.indexOf(tShirt);
            console.log(index);
            if (objHave[sizeChart[index + 1]] > 0) {
                objHave[sizeChart[index + 1]] -= 1;
                console.log("one", objHave, tShirt);
            }
            else if (objHave[sizeChart[index - 1]] > 0) {
                objHave[sizeChart[index - 1]] -= 1;
                console.log("two", objHave, tShirt);
            }
            else {
                const answer = readAnswer();
                const newAnswer = { ...answer, answer3Two: `для всіх спортсменів футболок буде не достатньо` } 
                console.log(newAnswer);
                return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer))
            }
        }
        console.log("one cicle");
    }
    const answer = readAnswer();
     const newAnswer = { ...answer, answer3Two: `кожному спортсмену дістанеться футболка` }
    console.log(newAnswer);
    return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer))
};
const players = second;
// закуплена кількість футболок для спортсменів
const haveTshirts = {'s': 1, 'm': 1, 'l': 1, 'xl': 1, "xxl": 1, 'xxxl': 1};;
isIn(haveTshirts, players);
