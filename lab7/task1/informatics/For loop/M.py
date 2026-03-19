"""Входные данные
Вводится число N, а затем N чисел.

Выходные данные
Подсчитайте и выведите, сколько среди данных N чисел нулей."""

n = int(input())

cnt = 0

for i in range(n):
    number = int(input())

    if number == 0:
        cnt += 1

print(cnt)