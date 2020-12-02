inputs = []
dict = {}

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

    print(numRange, letter, password)

    tempDict = {}

    tempDict["numRange"] = numRange
    tempDict["letter"] = letter
    tempDict["password"] = password

    print(tempDict)

    dict[id]=tempDict

    id= id+1

print(dict)
    
