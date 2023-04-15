import fs from 'fs';
import { readAnswer } from './helper/readanswer.js';

const {fourthTask} = JSON.parse(fs.readFileSync('./task/task.json'));


// функція для створення матриці, приймає два числа, перше -кількість рядків, друге - кількість колонок
function matrixArray(rows,columns){
    const arr = [];
    console.log(arr);
  for(let i=0; i<rows; i++){
    arr[i] = [];
    for(let j=0; j<columns; j++){
        arr[i][j] = 0;
    }
  }
  return arr;
}

const [actorsNumber, r, c] = fourthTask;

// функція для створення сцени та розташування акторів
function actorsIn(actorsNumber,r,c)
{const matrix = matrixArray(r, c);
let sum=0;
for (const i of matrix) {
    for (const j of i) {
        console.log(sum+=1); 
    }
    }
    if (actorsNumber >= sum) {
        console.log("не можливо згідно умови поставити прожектор");
        return []
    };
    
    while (actorsNumber > 0) {
        const row = Math.floor(Math.random() * r);
        const colum = Math.floor(Math.random() * c)
        if (matrix[row] [colum] === 0) {
            matrix[row] [colum] = "a";
            actorsNumber -= 1;
        }
    }
    console.log(matrix);
    return matrix
    
};

//функція для перевірки клітинки  матриці згідно завдання, вліво, вправо, вверх, та вниз
function checkAdjacentValues(matrix, row, col) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const adjacentValues = [];
    if (matrix[row][col] === 'a') {
    return 'no'}
  if (row > 0) {
    adjacentValues.push(matrix[row - 1][col]);
  }
  if (row < numRows - 1) {
    adjacentValues.push(matrix[row + 1][col]);
  }
  if (col < numCols - 1) {
    adjacentValues.push(matrix[row][col + 1]);
  }
  if (col > 0) {
    adjacentValues.push(matrix[row][col - 1]);
  }
  if (adjacentValues.includes("a")) { return [row, col] };
    return "no"

}


// створюю сцену з акторами
const plan = actorsIn( actorsNumber, r, c);
// console.log(plan, 222, actorsNumber, r, c);
// функція яка отримує план сцени та робить розрахунок 
function result(matr) {
    const result = []
    for (let i = 0; i < matr.length; i+=1) {
      for (let j = 0; j < matr.length; j += 1) {
        console.log("Перевіряємо координати", i, j);
        const answ = checkAdjacentValues(matr, i, j)
        if (answ === 'no') {
          continue;
        }
        else (result.push(answ));
        }
  }
  if (result.length > 0) {
    const answer = readAnswer();
    const newAnswer = { ...answer, answer4: `прожектор краще розмістит в насупних координатах ${result}` }
    console.log(newAnswer);
    return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer));
  }
  else {
    const answer = readAnswer();
    const newAnswer = { ...answer, answer4: `місця для прожектора не має` }
    console.log(newAnswer);
    return fs.writeFileSync('./answer/answer.json', JSON.stringify(newAnswer));
  }

  // console.log("місця для прожектора не має");
};

result(plan)