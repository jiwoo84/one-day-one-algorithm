n,k = list(map(int,input().split()))
S = list(input())
cnt = 0 

# 처음 작성 코드 
# 작은 쪽, 큰 쪽 따로 비교해줬는데 그러다 보니 코드가 더 복잡해지고 헷갈려짐 
# i-k가 0보다 작아지는 경우도 따로 조건을 줘야했음 

for i in range(n) : 
  if S[i] == 'P': 
    for j in range(i-k,k+1) : 
      if (S[j] == 'H') : 
        cnt += 1
        break
      else : 
        for m in range(i+1,i+k+1):
          if (S[m] == 'H') :
            cnt += 1
            break

print(cnt)

# 수정 코드 

for i in range(n):
  if S[i] == "P" : 
    for j in range(i-k,i+k+1) : 
      if 0<=j<n and S[j] == "H":
        cnt += 1
        S[j] = 0 
        break
print(cnt)

# 다른 정답 코드 
# max와 min을 사용한 것은 생각지도 못함 

for i in range(n) : 
  if S[i] == 'P': 
    for j in range(max(i-k,0),min(i+k+1,n)) : 
      if S[j] == 'H': 
        S[j] = 0 
        cnt += 1
        break
print(cnt)