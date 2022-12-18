def toggle(idx):
  if sList[idx] == 0 : 
    sList[idx] = 1 
  else : 
    sList[idx] = 0 

sNum = int(input()) #스위치 개수 
sList = list(map(int,input().split())) #스위치 상태 
stNum = int(input()) #학생수 

for st in range(stNum) : 
  sex,num = map(int,input().split())
  if sex == 1:
    for i in range(1,sNum+1):
      if i % num == 0 :
        toggle(i-1)
  else : 
    idx = num - 1 # 스위치 인덱스(0~)는 스위치 번호(1~) 보다 1 작다 
    toggle(idx)
    i = 1 
    while num - i >= 1 and num + i <= sNum : 
      if sList[idx+i] == sList[idx - i] :
        toggle(idx + i)
        toggle(idx - i)
      else : 
        break
      i += 1   

# 한 줄에 20개씩 출력 
for i in range(sNum) : 
  print(sList[i],end='')
  if(i+1) % 20 == 0 : # '20','40'번째 원소는 '19','39'번째 원소이기 때문에 인덱스값에 1을 더해야 
    print()
  else : print(' ', end='')  
  