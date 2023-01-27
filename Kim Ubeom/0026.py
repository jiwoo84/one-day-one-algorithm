import re


def solution():
    inputList = re.findall(r'\d', input())
    inputListLength = len(inputList)

    if inputListLength == 2:
        return int(inputList[0]) + int(inputList[1])
    elif inputListLength == 3:
        if inputList[2] == '0':
            return int(inputList[0]) + int(inputList[1] + inputList[2])

        return int(inputList[0] + inputList[1]) + int(inputList[2])

    return int(inputList[0] + inputList[1]) + int(inputList[2] + inputList[3])


print(solution())
