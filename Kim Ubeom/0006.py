def solution():
    answer = [0, 0, 0]
    order = int(input())
    peanut = 10
    chickenBreast = 40
    protein = 250

    if order >= protein:
        answer[0] = answer[0] + (order // protein)
        order = order % protein
    if order >= chickenBreast:
        answer[1] = answer[1] + (order // chickenBreast)
        order = order % chickenBreast
    if order >= peanut:
        answer[2] = answer[2] + (order // peanut)
        order = order % peanut

    if order != 0:
        return -1

    return f'{answer[2]} {answer[1]} {answer[0]}'


print(solution())
