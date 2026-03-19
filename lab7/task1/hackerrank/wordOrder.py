words = {}
n = int(input())

for i in range(n):
    element = input()
    if element not in words:
        words[element] = 1
    else:
        words[element] += 1

print(len(words))
for value in words.values():
    print(value, end=" ")