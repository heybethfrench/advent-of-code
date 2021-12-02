const fs = require('fs');
const data = fs.readFileSync('inputs.txt',
            {encoding:'utf8', flag:'r'}).split('\n');

//part 1
var numIncreases = 0;

for(let i=0; i<data.length; i++){
    if(i+1 != null && Number.parseInt(data[i+1]) > Number.parseInt(data[i])){
        numIncreases += 1;
    }
}

console.log("number of increases", numIncreases);

//part 2

numIncreases = 0;

compareSums(data);

console.log("number of increases", numIncreases);

function compareSums(data){
    let firstSum;
    let newSum;
    for(let i = 0; i < data.length; i++){
        if(data[i] && data[i+1] && data[i+2]){
            newSum = Number.parseInt(data[i]) + Number.parseInt(data[i+1]) + Number.parseInt(data[i+2]);
            if(newSum > firstSum){
                numIncreases += 1;
            }
        } 
        firstSum = newSum;
        newSum = 0;
    }
}
