from collections import deque

def solution(n, computers):
    answer = 0
    visited = [False * n for _ in range(n)]
    
    def bfs(computers,start,visited) : 
        queue = deque()
        queue.append(start)
        visited[start] = True 

        while queue : 
            now = queue.popleft()
            for i in range(n) : 
                if (i != start ) and (visited[i] != 1) and (computers[now][i] == 1): 
                    queue.append(i)
                    visited[i] = True 

     
    for i in range(n) :
        if visited[i] == False  :
            bfs(computers,i,visited)
            answer += 1 
    return answer      

