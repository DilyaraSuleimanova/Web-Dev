"""Входные данные
Вводится натуральное число x.

Выходные данные
Выведите сумму цифр числа x."""

x = input()

sum = 0
iterations = x.__len__()

x = int(x)

for i in range(iterations):
    lastNum = x % 10
    x //= 10

    sum += lastNum

print(sum)