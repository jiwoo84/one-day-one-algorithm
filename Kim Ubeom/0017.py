def gcdFunc(x, y):
    print(x, y)
    if x % y == 0:
        return y

    return gcdFunc(y, x % y)


def howManyTree(n, myInput):
    answer = 0
    gaps = []

    for i in range(1, len(myInput)):
        gaps.append(myInput[i] - myInput[i-1])

    gcd = gaps[0]
    for i in range(1, len(gaps)):
        gcd = gcdFunc(gcd, gaps[i])

    for i in gaps:
        answer = answer + i // gcd - 1

    return answer


print(howManyTree(4, [1, 3, 7, 13]))
