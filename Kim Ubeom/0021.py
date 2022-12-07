import math


def getDist(points):
    minValue = math.inf

    for i in range(len(points)):
        for j in range(i + 1, len(points)):
            dist = pow(points[i][0] - points[j][0], 2) + \
                pow(points[i][1] - points[j][1], 2)
            minValue = min(minValue, abs(dist))

    return minValue


print(getDist([(0, 3), (1, 1), (2, 2), (7, 1)]))
