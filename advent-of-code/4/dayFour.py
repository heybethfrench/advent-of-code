inputs = ''
 
with open('inputs.txt', 'r') as file:
    inputs = file.read()
   
passports = inputs.split("\n\n")
requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

validPassports = 0
invalidPassports = 0

for passport in passports:
    valid = True
    for reqField in requiredFields:
        if reqField not in passport:
            valid = False
    if valid == True:
        thisPassport = passport.split()
        fieldsAreValid = True
        for myField in thisPassport:
            field = myField.split(':')

            if field[0] == 'byr':
                if field[1].isdigit() == True and len(field[1]) != 4 or int(field[1]) < 1920 or int(field[1]) > 2002:
                    fieldsAreValid = False
                    break
                break

                   
            elif field[0] == 'iyr':
                if field[1].isdigit() == True and len(field[1]) !=4 or int(field[1]) < 2010 or int(field[1]) > 2020:
                    fieldsAreValid = False
                    break
                break
        
            elif field[0] == 'eyr':
                if field[1].isdigit() == True and len(field[1]) !=4 or int(field[1]) < 2020 or int(field[1]) > 2030:
                    fieldsAreValid = False
                    break
                break
        
            elif field[0] == 'hgt':

                if 'cm' in field[1]:
                    heightInCM =field[1].rstrip('cm')
                    if heightInCM.isdigit() == True:
                        if int(heightInCM) < 150 or int(heightInCM) > 193:
                            fieldsAreValid = False
                            break

                elif 'in' in field[1]:
                    heightInIn = field[1].rstrip('in')
                    if heightInIn.isdigit() == True:
                        if int(heightInIn) < 59 or int(heightInIn) > 76:
                            fieldsAreValid = False
                            break
                        break
                else:
                    fieldsAreValid = False
                    break
                    
            elif field[0] == 'hcl':
                allowedStrings = '0123456789abcdef'
                if field[1][0] == '#':
                    color = field[1][1:len(field[1])]
                    for char in color:
                        if char not in allowedStrings:
                            print(char)
                            fieldsAreValid = False
                            break
                        break
                    
                     
                else:
                    fieldsAreValid = False
                    break
                   

            elif field[0] == 'ecl':
                eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
                if field[1] not in eyeColors:
                    fieldsAreValid = False
                    break
                else:
                    break
            
            elif field[0] == 'pid':
                if len(field[1]) != 9 or field[1].isdigit() == False:
                    fieldsAreValid = False
                    break
                else:
                    break

            else:
                fieldsAreValid = True
                break
        if fieldsAreValid == True:
            validPassports = validPassports + 1
               
                  
        

print(validPassports)
