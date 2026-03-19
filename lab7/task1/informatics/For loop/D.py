"""Входные данные
Вводятся 2 числа: x и d.

Выходные данные
Подсчитайте и выведите одно число - сколько раз встречается в записи натурального числа x цифра d."""

x = input()
d = int(input())

cnt = 0
iterations = x.__len__()

x = int(x)

for i in range(iterations):
    lastNum = x % 10
    x //= 10

    if lastNum == d:
        cnt += 1

print(cnt)