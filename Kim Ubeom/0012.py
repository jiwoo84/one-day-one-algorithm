def checkParen(p):
    if len(p) == 0:
        return "YES"
    elif len(p) == 1:
        return "NO"

    for i in range(len(p) - 1):
        if p[i] == '(' and p[i+1] == ')':
            q = p[:i] + p[i+2:]
            return checkParen(q)

    return "NO"


print(checkParen("(())()"))
