def solution(s):
    answer = list(map(lambda x: int(x), s.split(" ")))
    answer.sort()
    return f'{answer[0]} {answer[-1]}'