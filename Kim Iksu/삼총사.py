# https://school.programmers.co.kr/learn/courses/30/lessons/131705
from itertools import combinations


def solution(number):
    answer = 0
    combi = combinations(number, 3)
    for a in combi:
        if sum(a) == 0:
            answer += 1
    return answer
