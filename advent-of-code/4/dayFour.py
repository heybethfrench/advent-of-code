inputs = ''
 
with open('inputs.txt', 'r') as file:
    inputs = file.read()
   
passports = inputs.split("\n\n")
requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

validPassports = 0
invalidPassports = 0

for passport in passports:
    valid = True
    for field in requiredFields:
        if field not in passport:
            valid = False
    if valid == True:
        validPassports = validPassports + 1

print(validPassports)