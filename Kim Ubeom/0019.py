def diffDigit(a, b):
    a = str(a)
    b = str(b)
    answer = 0
    aLen = len(a)
    bLen = len(b)

    if aLen == bLen:
        for i in range(aLen):
            if a[i] != b[i]:
                answer = answer + 1
        return answer
    else:
        maxNum = max(aLen, bLen)

        if aLen == maxNum:
            gap = aLen - bLen

            for i in range(gap):
                b = '*' + b
        else:
            gap = bLen - aLen

            for i in range(gap):
                a = '*' + a

    for i in range(len(a)):
        if a[i] != b[i]:
            answer = answer + 1

    return answer


print(diffDigit(123, 123456))
