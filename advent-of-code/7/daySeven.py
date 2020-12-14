#TODO parse input

inputs = []
 
with open('inputs.txt', 'r') as file:
     inputs = [line.strip('\n') for line in file]


listOfBags = {'shiny gold'}

#TODO find bags that could contain shiny gold bags.
def findBags(list):
    mySet = set()
    for input in inputs:
        for bag in list:
            if bag in input:
                thisRule = input.split(" bags contain ")
                if bag != thisRule[0]:
                    mySet.add(thisRule[0])
                    
    return mySet

setOfBags = findBags(listOfBags)
print(setOfBags)
realSetOfBags = findBags(setOfBags)
nextSetOfBags = findBags(realSetOfBags)
thisNextSetOfBags = findBags(nextSetOfBags)

print(len(thisNextSetOfBags))


            
                
            

