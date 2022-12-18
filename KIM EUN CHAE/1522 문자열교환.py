# 브루트포스 
s = input()
answer = len(s)
k = s.count('a')
for i in range(len(s)):
    cnt = 0
    for j in range(k):
        if s[(i+j)%len(s)] == 'b':
            cnt+=1
    if cnt < answer:
        answer = cnt
print(answer)

# 투포인터 또는 슬라이딩 윈도우
from collections import deque

str = list(map(str,input()))
a_num = str.count('a')
min_ = 999999999999
for i in range(len(str)) :
    start, end = i, i+a_num
    temp_str = []
    if i+a_num >= len(str) :
        temp_str += str[i:]
        temp_str += str[:(i+a_num)-len(str)]
        min_ = min(min_,temp_str.count('b'))
    else :
        temp_str = str[i:i+a_num]
        min_ = min(min_,temp_str.count('b'))

print(min_)

#다른 방법 
import sys
from collections import deque

input_string = sys.stdin.readline().rstrip()
size = input_string.count('b')
input_string += input_string
answer = size
queue = deque()

for i in range(len(input_string)):
    if queue and i - queue[0] >= size:
        queue.popleft()
    if input_string[i] == 'b':
        queue.append(i)
    answer = min(answer, size - len(queue))

print(answer)