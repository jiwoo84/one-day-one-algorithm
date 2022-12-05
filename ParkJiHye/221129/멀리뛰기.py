import math

def solution(n):
    answer = 1

    p = 1
    while  n-p >= p:
        answer += math.comb(n-p, p)
        p += 1

    return answer%1234567