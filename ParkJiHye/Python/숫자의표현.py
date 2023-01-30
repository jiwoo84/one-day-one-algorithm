# 나의 풀이 (효율성 0점) 
def solution(n):
    half = n//2  if n%2 == 0 else n//2 +1
    count = 0
    for i in range(1,half):
        sum = 0
        for j in range(i,half+1):
            sum +=1
            if sum ==n: 
                count+=1
                break 
            elif sum > n:
              break
    return count+1 


# 다른 풀이
```
def solution(n):
    return len([i  for i in range(1,n+1,2) if n % i is 0])

수학 공식을 구현한 코드이다.
n 이하인 숫자 a부터 k개의 연속된 숫자의 합이 n이라고 가정한다면

a + (a+1) + (a+2) + ... + (a+k-1) = k(2a+k-1)/2 = n
a <= n
k < n
a,k : 자연수

위의 식을 정리하면 a = n/k + (1-k)/2가 된다.
a가 자연수라는 조건이 성립하기 위해서는

n/k 가 자연수이려면 : k는 n의 약수여야 한다.
(1-k)/2 가 정수가 되려면 : 1-k 가 짝수여야 하므로 k는 홀수여야 한다.
k < n
위 조건을 만족해야 한다.

따라서 위의 조건을 만족하는 k의 개수만큼 연속된 자연수의 합이 n이 될 수 있기 때문에, n의 약수이면서 홀수인 k를 찾으면 된다.
https://velog.io/@younge/Python-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%AB%EC%9E%90%EC%9D%98-%ED%91%9C%ED%98%84-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9CLevel-2
```
