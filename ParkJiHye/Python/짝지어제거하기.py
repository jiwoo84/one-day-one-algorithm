def solution(s):
    nonSequence = []
    for i in s:
        if i not in nonSequence or nonSequence[-1]!=i:
            nonSequence.append(i)
        else:
            nonSequence.pop()

    return int(not nonSequence)