inputs = []
 
with open('inputs.txt', 'r') as file:
     inputs = [line.strip('/n') for line in file]
  


sumTreesList = []

listOfSlopes=[(1,1), (3,1), (5,1), (7,1), (1,2)]

def treeCountBySlope(x_coord, y_coord):
    x = 0 %31
    index = 0   

    numTrees = 0
    for index in range(len(inputs)):
        position = inputs[index][x]
        if position == '#':
            numTrees = numTrees + 1
        x=(x+x_coord)%31
        index=index+y_coord
    return numTrees
print(treeCountBySlope(3, 1)) #part 1

print(treeCountBySlope(3, 1) *
      treeCountBySlope(1, 1) *
      treeCountBySlope(5, 1) *
      treeCountBySlope(7, 1) *
      treeCountBySlope(1, 2)) # part 2