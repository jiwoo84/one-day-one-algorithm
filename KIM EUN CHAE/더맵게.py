# 정답 
# while문 돌기전에 heapify 처리하고 시작 

from heapq import *

def solution(scoville, K):
    answer = 0
    heapify(scoville)
    
    while scoville[0] < K and len(scoville) > 1  : 
        answer += 1 
        heappush(scoville, heappop(scoville) + (heappop(scoville) * 2))
            
    return answer if scoville[0] >= K else -1 
# --------------------------------

# 제출 오답 1 
# 테스트 케이스 절반만 정답 & 효율성 테스트 시간초과 
# while문 조건이 틀림 

from heapq import heappush, heappop, heapify

def solution(scoville, K):
    answer = 0
    heap = []
    for i in scoville : 
        heappush(heap,i)
    
    while heap : 
        heapify(heap)
        if heap[0] >= K : 
            return answer
        else : 
            answer += 1 
            new = heap[0] + (heap[1]*2) 
            heappop(heap)
            heappop(heap)
            heappush(heap,new)
            
    return answer

# --------------------------------

# 제출 오답 2 
# 테스트케이스 모두 정답 & 효율성 테스트 시간초과 
# 반복문 돌때마다 heapify 실행으로 인한 시간초과 예상 

from heapq import *

def solution(scoville, K):
    answer = 0
    heap = []
    for i in scoville : 
        heappush(heap,i)
    
    while heap[0] < K and len(heap) > 1  : 
        heapify(heap)
        answer += 1 
        # new = heap[0] + (heap[1]*2) 
        # heappop(heap)
        # heappop(heap)
        # heappush(heap,new)
        heappush(heap, heappop(heap) + (heappop(heap) * 2))
            
    return answer if heap[0] >= K else -1 

# --------------------------------

