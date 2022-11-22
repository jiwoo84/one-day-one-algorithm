def strContain(A, B):
    if len(A) == 0:
        return "Yes"

    char = A[0]
    str = A[1:]

    if char in B:
        return strContain(str, B)

    return "No"


print(strContain("mef", "myself"))
