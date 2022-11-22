def GCD(x, y):
    if x % y == 0:
        return y

    return GCD(y, x % y)


print(GCD(6, 4))
