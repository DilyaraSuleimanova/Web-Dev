"""Given a year, determine whether it is a leap year. If it is a leap year, return the Boolean True, otherwise return False.

Note that the code stub provided reads from STDIN and passes arguments to the is_leap function. It is only necessary to complete the is_leap function."""

def isLeap(year):
    leap = False
    if year % 400 == 0 or year % 4 == 0 and year % 100 != 0:
        leap = True
    return leap
    

year = int(input())
print(isLeap(year))