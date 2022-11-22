def solution():
    answer = []
    nums = []
    [n, k] = list(map(int, input().split()))
    inputed = list(map(int, input().split()))

    while len(inputed):
        nums.append(inputed.pop(0))

        if len(nums) < k:
            answer.append(-1)
        else:
            answer.append(sorted(nums)[k-1])

    return answer


print(solution())
