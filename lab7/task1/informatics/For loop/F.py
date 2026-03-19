"""Входные данные
Вводится натуральное число x

Выходные данные
Выведите число, состоящее из цифр данного числа x в обратном порядке. Ведущие нули выводить не нужно.
"""

x = input()

iterations = x.__len__()
x = int(x)

newNum = 0

for i in range(iterations):
    lastNum = x % 10
    x //= 10

    newNum = newNum * 10 + lastNum

print(newNum)