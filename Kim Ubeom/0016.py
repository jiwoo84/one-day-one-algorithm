def getPermutation(n, r):
    if r == 0:
        return [[]]

    result = []

    for i in range(len(n)):
        elem = n[i]
        for j in getPermutation(n[:i] + n[i+1:], r-1):
            result.append([elem] + j)

    return result


print(getPermutation(['a', 'b', 'c', 'd'], 2))
