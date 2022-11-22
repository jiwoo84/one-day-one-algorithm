def solution(n, k):
    answer = []
    count = 0
    sequence = [i + 1 for i in range(n)]

    while len(sequence):
        count = count + 1
        num = sequence.pop(0)

        if count % k == 0:
            answer.append(num)
        else:
            sequence.append(num)

    return answer
