def solution():
    blue = sum(list(map(int, input().split())))
    white = sum(list(map(int, input().split())))

    if blue > white:
        print(blue)
        return

    print(white)


solution()
