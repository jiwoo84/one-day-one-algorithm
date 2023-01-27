def solution():
    totalSec = sum([int(input()), int(input()), int(input()), int(input())])
    minute = totalSec // 60
    sec = totalSec % 60

    print(minute)
    print(sec)


solution()
