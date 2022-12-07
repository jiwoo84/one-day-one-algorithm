LIMIT_NUMBER = 1000000007


def getPower(m, n):

    if n == 0:
        return 1
    elif n % 2 == 0:
        temp = getPower(m, n // 2)
        return (temp * temp) % LIMIT_NUMBER
    else:
        temp = getPower(m, (n-1) // 2)
        return (temp * temp * m) % LIMIT_NUMBER


print(getPower(3, 4))
