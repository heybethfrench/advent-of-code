inputs = []
dict = {}

with open('inputs.txt', 'r') as file:
     inputs = [line.strip('\n') for line in file]

for input in inputs:
    id = 0
    dataPoints = input.split(': ')
    firstPart = dataPoints[0].split(' ')
    numRange = firstPart[0].split('-')
    letter = firstPart[1]
    password = dataPoints[1]

    print(numRange, letter, password)
