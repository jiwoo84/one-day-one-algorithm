def solution(citations):
    for i in range(len(citations)+1):
        answer = len(list(filter(lambda x: x >= i, citations)))
        if i >= answer:
            return answer