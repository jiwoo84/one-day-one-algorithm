import math


def solution(a, b, n):
    큐 = 0  # 나머지
    w = 0  # 반납하고 받은병
    e = n  # 지금갖고있는애
    t = 0  # 지금까지 반납한 병의 수 리턴할것

    while True:
        if e / a < 1:
            break
        t += math.floor(e/a) * b  # t는 반납하고 받은병을 계속 쌓음
        w = (math.floor(e/a))*b  # 10
        큐 = e % a  # 나머지 를 큐
        e = 큐+w
    return t


print(solution(2, 1, 20))
