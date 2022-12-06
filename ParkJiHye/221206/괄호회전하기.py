from collections import deque

def solution(s):
    answer = 0
    orign = deque(s)

    for i in range(len(s)): 
        orign.rotate(1) 
        popList =[]
        start, end = orign[0], orign[-1]
        if start == "]" or start == ")" or start == "}":
            continue
        elif end == "[" or end == "(" or end == "{":
            continue
        else:
            popList.append(start)

            for j in list(orign)[1:]:
                if j == "[" or j == "(" or j == "{":
                    popList.append(j)
                else : 
                  try:
                    p = popList[-1]

                    if p == "{"  and j == "}"  or (p == "("  and j == ")") or (p == "["  and j == "]"):  
                          popList.pop()
                          continue
                    else:
                        popList.append('null')
                        break
                  except IndexError:
                        popList.append('null')
                        break
            if not popList:
                answer +=1        



    return answer  