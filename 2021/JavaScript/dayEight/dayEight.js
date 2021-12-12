const fs = require('fs');
const data = fs.readFileSync('inputs.txt',{encoding:'utf8', flag:'r'})
                .split(',')
                .map((x) => Number.parseInt(x));

console.log(data);