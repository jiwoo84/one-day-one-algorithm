# https://school.programmers.co.kr/learn/courses/30/lessons/12945


def solution(n):
    memo = [0, 1, 1]
    for i in range(3, n + 1):
        memo.append((memo[i - 2] + memo[i - 1]) % 1234567)

    return memo[-1]
