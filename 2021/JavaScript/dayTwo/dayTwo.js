const fs = require('fs');
const data = fs.readFileSync('inputs.txt',
            {encoding:'utf8', flag:'r'}).split('\n');


//part 1

var x = 0;
var y = 0;

for(let i = 0; i < data.length; i++){
    const directions = data[i].split(' ');
    console.log(directions);
    switch (directions[0]){
        case 'forward':
            x = x + Number.parseInt(directions[1]);
            break;
        case 'up':
            y = y - Number.parseInt(directions[1]);
            break;
        case 'down':
            y = y + Number.parseInt(directions[1]);
            break;
    }

}

console.log('the ending coordinates are', x, y);
console.log('the answer is', x * y);


//part 2

var aim = 0;
x = 0;
y = 0;

for(let i = 0; i < data.length; i++){
    const directions = data[i].split(' ');
    console.log(directions);
    switch (directions[0]){
        case 'forward':
            x = x + Number.parseInt(directions[1]);
            y = y + (aim * Number.parseInt(directions[1]));
            break;
        case 'up':
            aim = aim - Number.parseInt(directions[1]);
            break;
        case 'down':
            aim = aim + Number.parseInt(directions[1]);
            break;
    }

}

console.log('the ending coordinates are', x, y);
console.log('the answer is', x * y);
