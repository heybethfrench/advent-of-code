const fs = require('fs');
const fish = fs.readFileSync('inputs.txt',{encoding:'utf8', flag:'r'})
                .split(',')
                .map((x) => Number.parseInt(x));
const numDays = 80;

//optimize in order to be able to solve part 2

for(let i=0; i < numDays; i++){
    for(let fishIndex = 0; fishIndex < fish.length; fishIndex++){
        if(fish[fishIndex] == 0){
            fish[fishIndex] = 6;
            fish.push(9);
            
        } else {
            fish[fishIndex]--;
        }
    }
}

console.log(fish.length);
