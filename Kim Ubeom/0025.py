import re


def solution():
    answer = []
    [elice, chaser] = input().split()

    eliceList = list(map(int, re.findall(r'\d', elice)))
    chaserList = list(map(int, re.findall(r'\d', chaser)))

    for i in range(len(eliceList) - 1, -1, -1):
        answer.append(str(eliceList[i] + chaserList[i]))

    return int(''.join(answer))


print(solution())
