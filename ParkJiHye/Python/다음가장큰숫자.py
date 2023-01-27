def solution(n):
  num = bin(n)[2:].count("1")
  p = n

  while True: 
    p += 1
    if  num == bin(p)[2:].count("1"):
      return p