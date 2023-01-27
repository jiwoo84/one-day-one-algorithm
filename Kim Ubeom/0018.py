import math


def getSubsum(data):
    result = -math.inf
    temp = 0

    for start in range(len(data)):
        for end in range(start, len(data)):
            temp = 0

            for i in range(start, end):
                temp = temp + data[i]

            result = max(result, temp)

    return result


print(getSubsum([1, 2, -4, 5, 3, -2, 9, -10]))
