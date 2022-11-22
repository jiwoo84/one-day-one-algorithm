# 풀이 1 

from itertools import permutations

def solution(numbers):
    answer = []                                   
    nums = [n for n in numbers]                   # numbers를 하나씩 자른 것
    per = []                                      
    for i in range(1, len(numbers)+1):            # numbers의 각 숫자들을 순열로 모든 경우 만들기
        per += list(permutations(nums, i))        # i개씩 순열조합
    new_nums = [int(("").join(p)) for p in per]   # 각 순열조합을 하나의 int형 숫자로 변환
    
    for n in new_nums:                            # 모든 int형 숫자에 대해 소수인지 판별
        if n < 2:                                 # 2보다 작은 1,0의 경우 소수 아님
            continue
        check = True            
        for i in range(2,int(n**0.5) + 1):        # n의 제곱근 보다 작은 숫자까지만 나눗셈
            if n % i == 0:                        # 하나라도 나눠떨어진다면 소수 아님!
                check = False
                break
        if check:
            answer.append(n)                      # 소수일경우 answer 배열에 추가

    return len(set(answer))                       # set을 통해 중복 제거 후 반환



 #풀이 2 
 # from itertools import permutations

#소수 판별 함수
def is_prime_number(x) :
    if x < 2 :
        return False
    
    for i in range(2, x) :
        if x % i == 0 :
            return False
            
    return True


def solution(numbers):
    answer = 0
    
    num = []
    for i in range(1, len(numbers)+1) :
        #순열 모듈 사용해서 나올 수 있는 모든 수 조합
        num.append(list(set(map(''.join, permutations(numbers, i))))) # ex )  [['1', '7'], ['71', '17']] 
    per = list(set(map(int, set(sum(num, []))))) 
    #2중 리스트를 1차원으로 바꾸기 위해 sum을 사용
    # sum(덧셈할 것, 처음에 더할 것) 
    #sum(num, [])는 [] + [1,7] + [71, 17]이 되어서 리스트끼리의 덧셈으로 [1,7, 71, 17]이 된다.
    
    for p in per :
        if is_prime_number(p) == True :
            answer += 1

    return answer