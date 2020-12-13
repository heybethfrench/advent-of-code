#TODO parse input, each blank line represents another group

inputs = ''
 
with open('inputs.txt', 'r') as file:
    inputs = file.read()
   
groups = inputs.split("\n\n")
groups = [group.split("\n") for group in groups]

#TODO calculate the number of unique questions that a group answered yes to

def calcUniqueAnswers(group):
    uniqueAnswers = []
    for survey in group:
        for answer in survey:
            if answer not in uniqueAnswers:
                uniqueAnswers.append(answer)
    return len(uniqueAnswers)



#TODO calculate the sum of these answers

def calcTotalAnswers(groups):
    numAnswers = 0
    for group in groups:
        numAnswers = numAnswers + calcUniqueAnswers(group)
    return numAnswers

print(calcTotalAnswers(groups))


        