def convertBinary(n):
    if n == 0 or n == 1:
        return str(n)

    return convertBinary(n // 2) + str(n % 2)


print(convertBinary(19))
