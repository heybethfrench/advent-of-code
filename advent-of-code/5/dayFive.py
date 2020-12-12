#TODO Parse inputs

inputs = []
 
with open('inputs.txt', 'r') as file:
     inputs = [line.strip('\n') for line in file]

#TODO For each input, calculate the row number using 'F' and 'B' in the 1st 7 charachters
    # There are 127 rows
    #'F' means take the upper half
    #'B' means take the lower half


#TODO For each input, calculate the seat number using 'R' and 'L' in the last 3 charachters
    # There are 7 columns
    #'R' means take the upper half
    #'L' means take the lower half
#TODO Calculate unique Seat ID
    # multiply the row number by 8, then add the column
#TODO Part 1 goal - find the highest seat ID on a boarding pass