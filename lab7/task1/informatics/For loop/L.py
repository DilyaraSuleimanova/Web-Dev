"""Переведите натуральное число из двоичной системы в десятичную (в двоичном числе не более 10 цифр).

Входные данные
Вводится натуральное число, записанное в двоичной системе.

Выходные данные
Выведите число, записанное в десятичной системе."""

binaryNumber = input()

iteration = binaryNumber.__len__()

decimalNumber = 0

binaryNumber = int(binaryNumber)

for i in range(iteration):
    lastNum = binaryNumber % 10
    decimalNumber += lastNum * 2 ** i

    binaryNumber //= 10
    
print(decimalNumber)    


