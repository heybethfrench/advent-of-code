inputs = []

password_key = "password"
numRange_key = "numRange"
letter_key = "letter"


with open('inputs.txt', 'r') as file:
     inputs = [line.strip('\n') for line in file]

def prepEntryForDict(input):
    tempDict = {}
    dataPoints = input.split(': ')
    firstPart = dataPoints[0].split(' ')
    numRange = firstPart[0].split('-')
    numRange = [int(num) for num in numRange]
    letter = firstPart[1]
    password = dataPoints[1]
    tempDict[numRange_key] = numRange
    tempDict[letter_key] = letter
    tempDict[password_key] = password
    return tempDict

def cleanTheData(inputs):
    id = 0
    dict = {}
    for input in inputs:
        tempDict = prepEntryForDict(input)
        dict[id]=tempDict
        id= id+1
    return dict

def partOne(inputs):
    numGoodPasswords = 0
    dict = cleanTheData(inputs)
    for entry in dict:
        counter = 0
        thisPassword = dict[entry][password_key]
        thisLetter = dict[entry][letter_key]
        thisNumRange = dict[entry][numRange_key]
        for char in thisPassword:
            if char == thisLetter:
                counter = counter + 1
        if counter >= thisNumRange[0] and counter<= thisNumRange[1]:
            numGoodPasswords = numGoodPasswords + 1
    return numGoodPasswords

def partTwo(inputs):
    numGoodPasswords = 0
    dict = cleanTheData(inputs)
    for entry in dict:
        thisPassword = dict[entry][password_key]
        thisLetter = dict[entry][letter_key]
        thisNumRange = dict[entry][numRange_key]
        if thisPassword[thisNumRange[0]-1] == thisLetter and thisPassword[thisNumRange[1]-1] == thisLetter:
            continue
        elif thisPassword[thisNumRange[0]-1] != thisLetter and thisPassword[thisNumRange[1]-1] != thisLetter:
            continue
        else:
            numGoodPasswords = numGoodPasswords + 1

    return numGoodPasswords
        

        
print(partOne(inputs))
print(partTwo(inputs))
    
