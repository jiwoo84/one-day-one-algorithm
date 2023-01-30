from fractions import gcd

def nlcm(num):      
    answer = num[0]
    for n in num:
        answer = n * answer / gcd(n, answer)

    return answer
# gcd() : 두 수의 최대공약수를 구해주는 함수
# 최소공배수(lcm) = (x*y) / gcd(x,y)