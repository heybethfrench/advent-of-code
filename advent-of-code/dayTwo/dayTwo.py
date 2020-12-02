inputs = []
dict = {}
password_key = "password"
numRange_key = "numRange"
letter_key = "letter"
numGoodPasswords = 0

with open('inputs.txt', 'r') as file:
     inputs = [line.strip('\n') for line in file]

id = 0
for input in inputs:
    
    dataPoints = input.split(': ')
    firstPart = dataPoints[0].split(' ')
    numRange = firstPart[0].split('-')
    numRange = [int(num) for num in numRange]
    letter = firstPart[1]
    password = dataPoints[1]

    tempDict = {}

    tempDict[numRange_key] = numRange
    tempDict[letter_key] = letter
    tempDict[password_key] = password

    dict[id]=tempDict

    id= id+1

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

print(numGoodPasswords)
    
