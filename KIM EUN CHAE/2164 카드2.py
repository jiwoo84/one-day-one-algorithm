from collections import deque 

N = int(input())
cardArr = [i+1 for i in range(N)]
queue = deque(cardArr)
# print(queue)

while len(queue) > 1 : 
      queue.popleft() 
      popCard = queue.popleft() 
      queue.append(popCard) 
print(queue.popleft()) 