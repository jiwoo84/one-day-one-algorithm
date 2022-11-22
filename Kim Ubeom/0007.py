def solution():
    answer = []
    N = int(input())

    for i in range(N):
        if i % 3 == 0 or i % 5 == 0:
            answer.append(i)

    return sum(answer)


print(solution())
