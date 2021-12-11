const fs = require('fs');
const data = fs.readFileSync('inputs.txt', {encoding:'utf8', flag:'r'})
                .split('\n')
                .map((x) =>
                    x
                    .split(" -> ")
                    );

diagramResult = Array(100).fill(0);
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
    if(line.isVertical){
        let biggerY = line.firstPoint.y;
        let smallerY = line.secondPoint.y;
        if(line.firstPoint.y < line.secondPoint.y){
            biggerY = line.secondPoint.y;
            smallerY = line.firstPoint.y;
        } 
        let startingIndex = line.firstPoint.x + smallerY*10;
        let length = biggerY - smallerY;
        for(let i = 0; i <= length; i++){
            diagramResult[startingIndex]+= 1;
            startingIndex += 10;
        }

    }else if(line.isHorizontal){
        console.log(line);
        let biggerX = line.firstPoint.x;
        let smallerX = line.secondPoint.x;
        if(line.firstPoint.x < line.secondPoint.x){
            biggerX = line.secondPoint.x;
            smallerX = line.firstPoint.x;
        }
        let startingIndex = smallerX + line.firstPoint.y*10;
        let length = biggerX - smallerX;
        console.log(length);
        console.log(startingIndex);
        for(let i = 0; i <= length; i++){
            diagramResult[startingIndex] += 1;
            startingIndex += 1;
        }
    } else {

    }
}

console.log(diagramResult.filter(x => x>=2).length);

