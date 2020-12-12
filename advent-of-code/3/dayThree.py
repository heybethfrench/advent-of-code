inputs = []
 
with open('inputs.txt', 'r') as file:
     inputs = [line.strip('/n') for line in file]
  
x = 0 %31
index = 0
numTrees = 0

for index in range(len(inputs)):
    position = inputs[index][x]
    print(position)
    if position == '#':
        numTrees = numTrees + 1
    x=(x+3)%31
    index=index+1

print(numTrees)