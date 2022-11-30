# https://school.programmers.co.kr/learn/courses/30/lessons/68644

from itertools import combinations


def solution(numbers):
    a = list(combinations(numbers, 2))
    answer = set()
    for n1, n2 in a:
        answer.add(n1 + n2)
    return sorted(list(answer))
