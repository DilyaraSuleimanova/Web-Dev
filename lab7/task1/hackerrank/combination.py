from math import comb

n = int(input())
letters = input().split()
k = int(input())

count_a = letters.count('a')

total = comb(n, k)
no_a = comb(n - count_a, k)

probability = 1 - (no_a / total)

print(round(probability, 4))