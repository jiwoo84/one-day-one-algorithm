import math


def maxSlope(points):
    maxValue = -math.inf

    for i in range(len(points)):
        for j in range(i + 1, len(points)):
            slope = (points[j][1] - points[i][1]) / \
                (points[j][0] - points[i][0])

            maxValue = max(maxValue, abs(slope))

    return maxValue


print(maxSlope([(0, 3), (1, 1), (2, 2), (4, 1)]))
