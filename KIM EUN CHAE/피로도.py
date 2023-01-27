from itertools import permutations

def solution(k, dungeons):
    dun_num = len(dungeons)
    answer = 0
    
    for permut in permutations(dungeons, dun_num):
        temp_k = k
        count = 0
        for pm in permut:
            if temp_k >= pm[0]:
                temp_k -= pm[1]
                count += 1
        answer = max(answer, count)  # 최대 던전 탐험 수 업데이트 
    return answer