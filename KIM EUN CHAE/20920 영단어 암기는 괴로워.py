# 시간 초과 
# 로직은 맞는데 입력 방법을 input이 아닌 다른 방법을 써야겠다 
N, M = map(int, input().split())
dic = {}

for i in range(N):
    name = input()
    if len(name) >= M:
        if name in dic:
            dic[name] += 1
        else:
            dic[name] = 1
        # print(dic)  
# 자주 나오는 단어일수록 앞에 배치 - 내림차순
# 길이가 길수록 앞에 배치 - 내림차순
# 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치 - 오름차순
dic = sorted(dic.items(), key=lambda x:(-x[1], -len(x[0]), x[0]))

for i in dic:
    print(i[0])


# 정답 1 
# Counter 함수 사용 & 입력방식 sys.stdin.readline()
import sys
from collections import Counter

def solution() :
    n, m = map(int, sys.stdin.readline().split())
    words = []
    
    for _ in range(n) :
        tmp = sys.stdin.readline().rstrip()
        if len(tmp) >= m :
            words.append(tmp)
    res = Counter(words).most_common()
    res.sort(key = lambda x : (-x[1], -len(x[0]), x[0]))

    for r in res :
        print(r[0])
        
solution()

# 정답 2 
# 제출 오답과 같은 로직 & 입력방식 sys.stdin.readline()
import sys

if __name__=='__main__':
    n,m=map(int,sys.stdin.readline().split())

    dict={}
    for i in range(n):
        x=sys.stdin.readline().strip() # 단어 입력

        if len(x)>=m: # 길이가 m 이상인 단어들만 외움
            if x in dict: # 이미 있으면 value +1
                dict[x]+=1
            else: # 없으면 key,value 추가
                dict[x]=1
        print(dict)
    
    # 정렬 기준) 자주 나오는 단어, 길이 길수록, 알파벳 사전 순
    dict=sorted(dict.items(),key=lambda x:(-x[1],-len(x[0]),x[0]))

    for i in dict: # 출력
        print(i[0])