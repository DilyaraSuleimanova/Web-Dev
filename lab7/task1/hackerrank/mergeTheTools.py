def merge_the_tools(string, k):
    t = []
    stringLen = len(string)
    for i in range(0, stringLen, k):
        substr = string[i:i + k]
        t.append(substr)

    tLen = len(t)

    for i in range(tLen):
        element = t[i]
        newStr = ''
        for x in range(k):
            if x == 0:
                newStr += element[x]
            else:
                isRepeat = False
                for y in range(len(newStr)):
                    if newStr[y] == element[x]:
                        isRepeat = True
                        break
                
                if not isRepeat:
                    newStr += element[x]
        t[i] = newStr

    for i in range(len(t)):
        print(t[i])
        
string, k = input(), int(input())
merge_the_tools(string, k)