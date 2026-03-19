"""The provided code stub reads an integer, n, from STDIN. For all non-negative integers i < n, print i^2."""

n = int(input())
arr = [el for el in range(n)]

for i in range(n):
    print(i * i)