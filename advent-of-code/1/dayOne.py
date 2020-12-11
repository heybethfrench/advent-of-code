inputs = []
 
with open('inputs.txt', 'r') as file:
     inputs = [line.strip('/n') for line in file]
     inputs = [int(line) for line in inputs]
        
def part_one(inputs):
    sum = 0
    product = 0
    for num in inputs:   
        i = 0
        for i in range(len(inputs)-1):
            sum=num + inputs[i]
            if sum == 2020:
                product = num * inputs[i]
                break
            else:
                i = i + 1
    return product

def part_two(inputs):
    sum = 0
    product = 0
    for num in inputs:
        for i in range(len(inputs)):
            for x in range(len(inputs)):
                sum = num + inputs[i] + inputs[x]
                if sum == 2020:
                    product = num * inputs[i] * inputs[x]
    return product



print(part_two(inputs))
        