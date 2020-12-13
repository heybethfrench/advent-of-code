#TODO Parse inputs

inputs = []
 
with open('inputs.txt', 'r') as file:
     inputs = [line.strip('\n') for line in file]

#TODO For each input, calculate the row number using 'F' and 'B' in the 1st 7 charachters
    # There are 127 rows
    #'F' means take the upper half
    #'B' means take the lower half

def calculateNumRows(rowRange):
    return rowRange[0] + rowRange[1] + 1

def findRowNumber(input):
    rowInfo = input[0:7]
    lowEnd = 0
    highEnd = 127
    for char in rowInfo:
        rowRange = (lowEnd, highEnd)
        numRows = calculateNumRows(rowRange)
        if char == 'F':
            highEnd = (numRows/2) -1
            
        else:
            lowEnd = (numRows/2)
    if rowInfo[6] == 'F':
        return rowRange[0]
    elif rowInfo[6] == 'B':
        return rowRange[1]
    else:
        print('not sure how that happened')



#TODO For each input, calculate the seat number using 'R' and 'L' in the last 3 charachters
    # There are 7 columns
    #'R' means take the upper half
    #'L' means take the lower half

def findColumnNumber(input):
    rowInfo = input[7:10]
    lowEnd = 0
    highEnd = 7
    for char in rowInfo:
        colRange = (lowEnd, highEnd)
        numCols = calculateNumRows(colRange)
        if char == 'L':
            highEnd = (numCols/2) - 1
        else:
            lowEnd = (numCols/2)
    if rowInfo[2] == 'L':
        return colRange[0]
    else:
        return colRange[1]



#TODO Calculate unique Seat ID
    # multiply the row number by 8, then add the column

def findSeatId(string):
    rowNumber = findRowNumber(string)
    colNumber = findColumnNumber(string)
    uniqueSeatId = (rowNumber * 8) + colNumber
    return uniqueSeatId

#TODO Part 1 goal - find the highest seat ID on a boarding pass

def createIdList(inputs):
    mySeatIds = []
    for input in inputs:
        thisId = findSeatId(input)
        mySeatIds.append(thisId)
    return mySeatIds

thisList = createIdList(inputs)
thisList.sort()
print(thisList[len(thisList)-1])