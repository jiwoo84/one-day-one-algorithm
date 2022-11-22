def solution(citations):

    citations.sort()
    print(citations)
    for i in range(len(citations)) : 
        if citations[i] >= len(citations)-i : 
            # 문제의 '논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면' 풀어쓴것
            return len(citations)-i # 오름차순이기 떄문에 어차피 i 번째가 가장 큰 값 
    return 0
