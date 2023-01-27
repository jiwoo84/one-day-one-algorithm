def getNearest(data, m):
    if len(data) == 1:
        return data[0]
    elif len(data) == 2:
        first = abs(m - data[0])
        second = abs(m - data[1])

        if first <= second:
            return data[0]
        else:
            return data[1]

    middle = len(data) // 2

    if data[middle] == m:
        return data[middle]

    if data[middle] > m:
        return getNearest(data[:middle + 1], m)
    else:
        return getNearest(data[middle:], m)


print(getNearest([1, 4, 6, 7, 10, 14, 16], 12))
