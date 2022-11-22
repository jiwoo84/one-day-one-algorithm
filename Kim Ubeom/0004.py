def solution():
    answer = 0
    sum = 0
    [N, T] = list(map(int, input().split()))
    orderTimes = list(map(int, input().split()))

    for i in orderTimes:
        if i + sum > T:
            break

        sum = sum + i
        answer = answer + 1

    return answer


print(solution())
