def solution(arrA,arrB):
  arrA.sort()
  arrB.sort(reverse=True)

  answer = 0
  for i in range(len(arrA)):
    answer += arrA[i]*arrB[i]

  return answer