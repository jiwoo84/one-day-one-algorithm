def solution(s):
  cnt = 0
  c =0  # 0의 개수
  while s !="1":
    c += s.count("0")
    s = [ i for i in s if i=="1"]
    s = format(bin(len(s))[2:])
    cnt +=1

  return [cnt,c]