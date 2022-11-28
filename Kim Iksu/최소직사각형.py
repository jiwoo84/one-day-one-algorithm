# https://school.programmers.co.kr/learn/courses/30/lessons/86491


def solution(sizes):
    size_x = []
    size_y = []
    for x, y in sizes:
        if x < y:
            y, x = x, y
            size_x.append(x)
            size_y.append(y)
        else:
            size_x.append(x)
            size_y.append(y)

    return max(size_x) * max(size_y)
