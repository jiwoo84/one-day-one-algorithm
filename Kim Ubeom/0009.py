import re


def solution():
    answer = 0
    sum = 1
    N = int(input())

    for i in range(N):
        sum = sum * 2

    for i in list(map(int, re.findall(r'\d', str(sum)))):
        answer = answer + i

    return answer


print(solution())
