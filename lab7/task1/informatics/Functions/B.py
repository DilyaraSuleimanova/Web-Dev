"""Напишите функцию double power (double a, int n) (C/C++), function power (a:real; n:longint): real (Pascal), вычисляющую значение an.

Входные данные
Вводится 2 числа - a (вещественное) и n (целое неотрицательное).

Выходные данные
Необходимо вывести  значение an."""

def power(a, n):
    return a ** n

a, n = map(int, input().split())
print(power(a, n))