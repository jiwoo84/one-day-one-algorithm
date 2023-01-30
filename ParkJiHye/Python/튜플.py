import re

def solution(s):
    answer = []

    s = re.findall(r'\{[^{}]*\}',s)

    for i in range(len(s)):
        s[i] = re.sub("{|}", "", s[i])
        s[i] =list(map(int , s[i].split(",")))

    s.sort(key=lambda x: (len(x), x))

    for i in s:
        if not answer: answer.append(i[0])
        else:
            for j in answer:
                i.remove(j) 
            answer.append(i[0])
    return answer