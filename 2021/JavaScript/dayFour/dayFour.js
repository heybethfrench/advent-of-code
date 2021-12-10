const fs = require('fs');
const data = fs
    .readFileSync('inputs.txt',{encoding:'utf8', flag:'r'})
    .split("\n\n")
    .filter((x) => Boolean(x))
    .map((x) =>
    x
      .replace(/[\n ,]+/g, " ")
      .trim()
      .split(" ")
      .map((y) => parseInt(y))
  );

let [drawnNumbers, ...cards] = data;
let calledNums = new Array();



class Card {
    constructor(numbers){
        this.cardSize = 5;
        this.numbers = numbers;
        this.numberToPosition = new Map();
        for(let i = 0; i < this.numbers.length; i++){
            const n = this.numbers[i];
            this.numberToPosition.set(n, {
                line: Math.floor(i/ this.cardSize), 
                column: i%this.cardSize,});
        }
        this.lines = Array(this.cardSize).fill(0);
        this.columns = Array(this.cardSize).fill(0);
        this.isComplete = false;
    }

    addMarkedNumber(number){
        const position = this.numberToPosition.get(number);
        if(!position){
            return;
        }
        this.lines[position.line]++;
        this.columns[position.column]++;
        if(this.lines[position.line] == this.cardSize|| this.columns[position.column == this.cardSize]){
            this.isComplete = true;
        }
    }

}

cards = cards.map((x) => new Card(x));
console.log(cards[0]);

let winningCard;
for(const num of drawnNumbers){
    calledNums.push(num);
    let finished = false;
    for(card of cards){
        card.addMarkedNumber(num);
        if(card.isComplete){
            finished = true;
            winningCard = card;
            break;
            
        }
    }
    if(finished){
        break;
    }
}

console.log(winningCard);

let unmarkedNums = winningCard.numbers.filter(number => !calledNums.includes(number));
console.log(unmarkedNums);
console.log(unmarkedNums.reduce((a, b) => a + b, 0) * calledNums.slice(-1));


