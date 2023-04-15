import path from 'path';
import fs from "fs";
const answerPath = path.join("answer", "answer.json");

export function readAnswer() {
    console.log(answerPath);
    try {
        const answer = JSON.parse(fs.readFileSync(answerPath));
        console.log(answer);
        return answer
    }
    catch (error) {
        console.log(error);   
    }
}