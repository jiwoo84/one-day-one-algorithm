# 처음 푼 답 
# 순열을 사용해 모든 경우의 수 찾은뒤 max값을 문자형으로 바꾸어 출력 
# 예시는 통과했지만 시간초과로 실패  

from itertools import permutations

def solution(numbers):
    per = []
    tempArr = []
    
    for i in permutations(numbers,len(numbers)) : 
        per.append(i)
    
    for i in range(len(per)) : 
         tempStr = "".join(map(str,list(per[i])))
         tempArr.append(tempStr)
       
    return str(max(tempArr))

# 정답
# 식은 짧지만, 아이디어 도출이 어려움
# 하나의 숫자당 최소 3이상의 길이를 갖도록 동일하게 늘려준다 ( ex. 3 = 333 )

def solution(numbers):
  numbers = list(map(str, numbers))
  numbers.sort(key=lambda x : x*3 ,reverse=True) # 모든 원소들의 길이를 3 곱하여 내림차순 정렬 
  answer = ''.join(numbers)
  return str(int(answer)) # '0000' -> 0 같은 경우를 위하여 int로 한번 바꿔주고 다시 str으로!