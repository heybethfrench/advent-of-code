const { timeStamp } = require('console');
const fs = require('fs');
const data = fs.readFileSync('inputs.txt',{encoding:'utf8', flag:'r'})
                .split('\n');

const tokens = [
    ['{','}'],
    ['[',']'],
    ['(',')'],
    ['<','>'],
];

const scoreMap = new Map();

scoreMap.set(')', 3);
scoreMap.set(']', 57);
scoreMap.set('}', 1197);
scoreMap.set('>', 25137);

let stack = new Array();

function isOpenTerm(char){
    let isOpen = false;
    for(const bracket in tokens){
       
        if(tokens[bracket][0] == char){
            isOpen = true;
           
        }
    }
    
    return isOpen;

}

function matches(openTerm, closedTerm){
    for(const bracket in tokens){
        if(bracket[0] == openTerm && bracket[1] == closedTerm){
            return true;
        }
    }

    return false;
}


function isBalanced(string){
    let score = 0;
    
    for(let i=0; i < string.length; i++){
        let foundMismatch = false;
        if(foundMismatch){
            break
        } else {
        if(isOpenTerm(string[i])){
            stack.push(string[i]);
        } else {
            if(stack.length == 0){
                return score;
            } else if(!matches(stack.pop, string[i])) {
                score = score + scoreMap.get(string[i]);
                foundMismatch = true;
                break;
            }
        }
    }
    } 
    
    return score;
}

let totalScore = 0;
for(const line of data){
    totalScore += isBalanced(line);
   
}
    console.log(totalScore)
