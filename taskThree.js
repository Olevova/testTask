import fs from 'fs';
import { readAnswer } from './helper/readanswer.js';

const {thirdTask:{first}} = JSON.parse(fs.readFileSync('./task/task.json'));

// функція для пошуку найближчого більшого числа до останьої піднятої ваги
function findClosestNumber(arr, target) {
  return arr.reduce(function (closestNumber, currentNumber) {
    let closestDifference = Math.abs(target - closestNumber); 
    let currentDifference = Math.abs(target - currentNumber); 
    return currentDifference < closestDifference ? currentNumber : closestNumber;
  });
}

function weight(lastWeight) {
  //вага грифа 
  const barbelWeight = 20;
  // масив ваг блінів по парно, по ним буде проходити пошук для вибірки тих які найбільше підходять
  const plateWeight = [1,5,9.0718474,10,20,22.6796185,30, 31.7514659 ,40,40.8233133,50];
  // иаксимальна вага що може бути по умові 
  const MAXWEIGHT = 620;
  // найменша вага що може бути по умові
  const MINWEIGHT = 21;
  // число пар блінів
  let plateNumber = null;
  // вага яка є динамічною, за мінусом грифа
  let searchWeight = lastWeight - barbelWeight;
  // масив з вагами
  let arrayOfPlate = {};
  if (lastWeight >= MAXWEIGHT || lastWeight < MINWEIGHT) {
    const answer = readAnswer();
    const newAnswer = { ...answer, answer3One: `такі параметри ваги штанги не допустимі` };
    return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer));
  }
  
  for (let i = 0; i < 12; i += 1){
      
    let closesNumber = findClosestNumber(plateWeight, searchWeight);
    if (searchWeight >= closesNumber) {
        const Riznucy = searchWeight % closesNumber;
        const plate = (searchWeight - Riznucy) / closesNumber;
      if (!Riznucy) {
        const res = lastWeight+1
        const answer = readAnswer();
        const newAnswer = { ...answer, answer3One: `найближча мінімальна вага ${res}` };
        return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer));
      }
        arrayOfPlate = { ...arrayOfPlate, [closesNumber]: plate };
        plateNumber += plate;
    if (plateNumber < 12 || searchWeight > 0 || searchWeight < 1) {
            searchWeight = Riznucy;            
        }
    }
       
    else {
      const all = closesNumber - searchWeight;
      const res = lastWeight + all
      const answer = readAnswer();
      const newAnswer = { ...answer, answer3One:`найближча мінімальна вага ${res}`}
      return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer));
    }
        if (!closesNumber  || searchWeight < 1) {
            console.log(searchWeight);
    }

  }
      
};

weight(first);
const answer = readAnswer();
console.log(answer);