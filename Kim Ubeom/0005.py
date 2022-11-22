def solution():
    bottle = [int(input()), int(input()), int(input())]
    lid = [int(input()), int(input())]

    return min(bottle) + min(lid) + 10


print(solution())
