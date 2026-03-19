"""Напишите функцию int min (int a, int b, int c, int d) (C/C++), static int min (int a, int b, int c, int d) (Java) function min (a,b,c,d: integer):integer (Pascal), находящую наименьшее из четырех данных чисел.

Входные данные
Вводится четыре числа.

Выходные данные
Необходимо вывести  наименьшее из 4-х данных чисел."""

def min(a, b, c, d):
    arr = []
    arr.extend([a, b, c, d])
    arr.sort()
    return arr[0]


a, b, c, d = map(int, input().split())
print(min(a, b, c, d))
