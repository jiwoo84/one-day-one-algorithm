def solution():
    N = int(input())
    codes = [i for _ in range(N) for i in list(map(str, input().split()))]
    sum = 0

    for i in codes:
        code = i.split()
        for j in code:
            sum = sum + int(j)

    return str(sum)[0:10]


print(solution())
