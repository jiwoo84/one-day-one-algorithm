def solution(numbers, target):
    answer = 0  #타겟 넘버를 만드는 방법의 수
    res = [0]  #타겟과 비교할 수를 넣을 배열 -> 처음 계산을 해야하니 초기값 필요
    
    for i in numbers:
        tmp = []  #한 사이클 결과값 임시 저장 배열
        for j in res:
            tmp.append(j + i)
            tmp.append(j - i)
        res = tmp  #임시 저장 배열 res에 넣어주기
        print(res)
    
    for i in res:
        if i == target:  #타겟과 res[i]값 비교
            answer += 1
    
    return answer