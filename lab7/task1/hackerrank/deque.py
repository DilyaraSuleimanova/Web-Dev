from collections import deque

n = int(input())
dequearr = deque()

for i in range(n):
    operation = input().split()

    match operation[0]:
        case "append":
            num = int(operation[1])
            dequearr.append(num)
        
        case "appendleft":
            num = int(operation[1])
            dequearr.appendleft(num)

        case "pop":
            dequearr.pop()

        case "popleft":
            dequearr.popleft()
            

for i in range(len(dequearr)):
    print(dequearr[i], end=" ")

