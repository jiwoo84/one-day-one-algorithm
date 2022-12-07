def solution(n, lost, reserve):
    # 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있기때문에 set 집합으로 중복 제거 
    set_lost = set(lost) - set(reserve) 
    set_reserve = set(reserve) - set(lost) 
    
    for i in set_reserve : 
        if i-1 in set_lost :  # 왼쪽부터 탐색 
            set_lost.remove(i-1)
        elif i+1 in set_lost : 
            set_lost.remove(i+1)
    return n - len(set_lost)