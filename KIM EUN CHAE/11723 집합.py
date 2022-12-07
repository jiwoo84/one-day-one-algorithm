import sys 

N = int(input())
S = set()

for i in range(N):
    temp = sys.stdin.readline().strip().split()
    if len(temp) == 1 : 
      cal = temp[0]
      if cal == 'all' : 
        S = set([i for i in range(1, 21)])
      elif cal == 'empty' : 
        S = set()  
    else : 
      cal = temp[0]
      num = int(temp[1])               
      if cal == 'add' : 
        S.add(num)
      elif cal == 'remove' : 
        S.discard(num)
      elif cal == 'check' :
        if num in S :
          print(1)
        else : print(0)
      elif cal =='toggle' : 
        if num in S : 
          S.discard(num)
        else : S.add(num)