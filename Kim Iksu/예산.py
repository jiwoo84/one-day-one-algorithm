# https://school.programmers.co.kr/learn/courses/30/lessons/12982


def solution(d, budget):
    answer = 0
    for i in sorted(d):
        budget -= i
        if budget < 0:
            break
        answer += 1

    return answer
