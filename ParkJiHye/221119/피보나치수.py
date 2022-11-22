def solution(n):
    answer = []

    for i in range(0,n+1):
        if i == 0:
            answer.append(0)
        elif i==1 or i==2:
            answer.append(1)
        else:
            answer.append(answer[i-1]+answer[i-2])

    return answer[-1]%1234567