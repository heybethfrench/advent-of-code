const fs = require('fs');
const data = fs.readFileSync('inputs.txt', {encoding:'utf8', flag:'r'})
                .split('\n')
                .map((x) =>
                    x
                    .split(" -> ")
                    );
const rowLength =10;
diagramResult = Array(rowLength*rowLength).fill(0);
class point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class lineSegment{
    constructor(point1, point2){
        this.firstPoint = point1;
        this.secondPoint = point2;
        this.isVertical = false;
        this.isHorizontal = false;

        if(this.firstPoint.x == this.secondPoint.x){
            this.isVertical = true;
        } else if(this.firstPoint.y == this.secondPoint.y){
            this.isHorizontal = true;
    }
}
}

lineSegmentList = new Array();

for(const segment of data){
    let pointList = new Array();
    for(const stringPoint of segment){
        let newPoint = stringPoint.split(',').map((x) => Number.parseInt(x));
        const pointObject = new point(newPoint[0], newPoint[1]);
        pointList.push(pointObject);
    }
    let newSegment = new lineSegment(pointList[0], pointList[1]);
    lineSegmentList.push(newSegment);
}

for(const line of lineSegmentList){
    let biggerX = line.firstPoint.x;
    let smallerX = line.secondPoint.x;
    let biggerY = line.firstPoint.y;
    let smallerY = line.secondPoint.y;

    if(line.firstPoint.y < line.secondPoint.y){
        biggerY = line.secondPoint.y;
        smallerY = line.firstPoint.y;
    } 

    if(line.firstPoint.x < line.secondPoint.x){
        biggerX = line.secondPoint.x;
        smallerX = line.firstPoint.x;
    }
    if(line.isVertical){
        let startingIndex = line.firstPoint.x + smallerY*rowLength;
        let length = biggerY - smallerY;
        for(let i = 0; i <= length; i++){
            diagramResult[startingIndex]+= 1;
            startingIndex += rowLength;
        }

    }else if(line.isHorizontal){
        let startingIndex = smallerX + line.firstPoint.y*rowLength;
        let length = biggerX - smallerX;
        console.log(length);
        console.log(startingIndex);
        for(let i = 0; i <= length; i++){
            diagramResult[startingIndex] += 1;
            startingIndex += 1;
        }
    } else {
        //finish code to handle diagonals
        let currentX = line.firstPoint.x;
        let currentY = line.firstPoint.y;
        let index = currentX + (currentY*rowLength);
        let [slopeX, slopeY] = reduce(line.secondPoint.x - line.firstPoint.x,line.secondPoint.y - line.firstPoint.y);
        
    }
}

console.log(diagramResult.filter(x => x>=2).length);
console.log(diagramResult.slice(0,10));
function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }
