if __name__ == '__main__':
    s = input()
    logoLetters = dict()
    
    for i in range (len(s)):
        if s[i] not in logoLetters:
            logoLetters[s[i]] = 1
        else:
            logoLetters[s[i]] += 1
    
    sorted_list = sorted(logoLetters.items(), key=lambda item: (-item[1], item[0]))
    
    for i in range(3):
        print(sorted_list[i][0], sorted_list[i][1])
