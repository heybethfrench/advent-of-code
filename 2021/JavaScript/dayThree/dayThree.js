const fs = require('fs');
const data = fs.readFileSync('inputs.txt',
            {encoding:'utf8', flag:'r'}).split('\n');



var gamma = '';
var epsilon = '';
var o2generator = '';
var c02scrubber = '';
var halfwayPoint = data.length/2;
var resultGammaEpsilon = [];            

//part 1

for(let binaryIndex = 0; binaryIndex < data.length; binaryIndex++){
    for(let binaryChar = 0; binaryChar < data[binaryIndex].length; binaryChar++){
        if(resultGammaEpsilon[binaryChar] == null || resultGammaEpsilon[binaryChar] == undefined){
            resultGammaEpsilon.push(Number.parseInt(data[binaryIndex][binaryChar]));
        } else {
            resultGammaEpsilon[binaryChar] = resultGammaEpsilon[binaryChar] + Number.parseInt(data[binaryIndex][binaryChar]);
        }
    }
}

for(let resultIndex = 0; resultIndex < resultGammaEpsilon.length; resultIndex++){
    if(resultGammaEpsilon[resultIndex] > halfwayPoint){
        gamma = gamma + '1';
        epsilon = epsilon + '0';
    } else {
        gamma = gamma + '0';
        epsilon = epsilon + '1';
    }
}
console.log(Number.parseInt(gamma, 2)*Number.parseInt(epsilon, 2));

