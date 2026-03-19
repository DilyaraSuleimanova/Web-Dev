n, m = map(int, input().split())

arr = [element for element in input().split()]
A = set([element for element in input().split()])
B = set([element for element in input().split()])

happiness = 0

for i in range(n):
    if arr[i] in A:
        happiness += 1
    elif arr[i] in B:
        happiness -= 1

print(happiness)