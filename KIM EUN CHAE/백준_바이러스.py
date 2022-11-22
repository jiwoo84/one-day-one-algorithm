from collections import deque 

n = int(input()) #totalCom
link = int(input()) 
cnt = 0
visited = [False] * (n+1)
network = [[] for _ in range(n+1)] 

for _ in range(link):
    a,b = map(int,input().split())
    network[a].append(b)
    network[b].append(a)
#print(network)  
#[[], [2, 5], [1, 3, 5], [2], [7], [1, 2, 6], [5], [4]]

def bfs(network,v) : 
  global cnt 
  q = deque([v])

  while q : 
    pop = q.popleft()
    #print('pop',pop)
    visited[pop] = True 

    for i in network[pop] : 
      #print("i",i )
      if visited[i] == False : 
          visited[i] = True
          q.append(i)
          cnt += 1
          #print("cnt" , cnt)
  print(cnt)   

bfs(network,1)

