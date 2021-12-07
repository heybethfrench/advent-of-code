const fs = require('fs');
const data = fs.readFileSync('inputs.txt',
            {encoding:'utf8', flag:'r'}).split('\n');



var gamma = '';
var epsilon = '';
var o2generator = '';
var c02scrubber = '';
var lifeSupport;
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

// part 2
const length = data[0].length;
function getCount(data) {
    const zeros = Array(length).fill(0);
    const ones = Array(length).fill(0);
  
    for (const line of data) {
      const bits = [...line];
      bits.forEach((bit, index) => {
        if (bit === "0") {
          zeros[index]++;
        } else {
          ones[index]++;
        }
      });
    }
  
    return { zeros, ones };
  }

function getOxygenRating(data, index = 0){
    const { zeros, ones} = getCount(data); 
    let mostCommonBit = zeros[index] > ones[index] ? '0' : '1';
    const filtered = data.filter((line) => line[index] == mostCommonBit);
    if(filtered.length == 1){
        return filtered[0];
    }

    return getOxygenRating(filtered, index+1);

}

function getc02Rating(data, index = 0){
    const { zeros, ones} = getCount(data); 
    let leastCommonBit = zeros[index] > ones[index] ? '1' : '0';
    const filtered = data.filter((line) => line[index] == leastCommonBit);
    if(filtered.length == 1){
        return filtered[0];
    }

    return getc02Rating(filtered, index+1);

}

o2generator = getOxygenRating(data);
c02rate = getc02Rating(data);
console.log(Number.parseInt(c02rate, 2) * Number.parseInt(o2generator, 2));
