const fs = require('fs');
const data = fs.readFileSync('inputs.txt',
            {encoding:'utf8', flag:'r'}).split('\n\n');

console.log(data[2].split('\n'));
console.log(data[0]);
