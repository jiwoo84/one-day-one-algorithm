def solution(n,a,b):
    count = 0

    # a는 b보다 작다 (뒤의 반복문에서 사용하기위해 정렬)
    if a > b:
        a, b = b, a
	
    # 최대 대진횟수
    p  = n
    while p != 1:
        p = p //2
        count += 1

    # 계속 반으로 나누었을때 
    # 같은 방향에 존재하는 경우 -1
    # 다른 방향에 존재하는 경우 리턴
    while n >= 1:
        n = n // 2
        if a > n and b > n:
            count -= 1
            # n이 n/2이 되었으므로 a,b는 항상 n보다 커지므로
            # a,b를 업데이트 반으로 나누었을때의 위치에 맞게 업데이트
            a -= n
            b -= n
        elif a <= n and b<= n:
            count -= 1
        elif b > n and a <= n : 
            return  count 