def solution(n):
    for i in range(n+1,10000001) : 
        if list(format(n, 'b')).count('1') == list(format(i, 'b')).count('1') :
            return i 
    
