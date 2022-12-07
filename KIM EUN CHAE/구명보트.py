def solution(people, limit):
    answer = 0
    people_sorted = sorted(people)
    lowest = 0
    highest = len(people)-1
    
    while lowest <= highest :
        if people_sorted[lowest] + people_sorted[highest] > limit : 
            highest -= 1
            answer += 1 
        else : 
            lowest += 1 
            highest -= 1 
            answer += 1 
    return answer

# 투포인터 알고리즘 이용 
# 참고링크 : https://dev-note-97.tistory.com/88      