def solution(brown, yellow):
    total = brown + yellow 
    for w in range(1,total+1):
        h = int(total/w)
        if total % w == 0 and w >= h and (w-2)*(h-2) == yellow:
            return [w,h]