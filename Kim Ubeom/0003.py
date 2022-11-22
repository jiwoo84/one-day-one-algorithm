def solution():
    answer = ''
    result = []
    length = int(input())
    dailyLog = list(map(int, input().split()))
    count = 1

    for i in dailyLog:
        result.append(i * count)
        count = count + 1

    answer = answer + str(result[0])

    for i in range(length):
        if i == 0:
            continue

        answer = answer + f' {str(result[i] - result[i-1])}'

    return answer


print(solution())
