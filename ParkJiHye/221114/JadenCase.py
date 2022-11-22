def solution(s):
  arr = []
  for item in s.split(" "):
    item = item.lower().capitalize()
    arr.append(item)
  
  return " ".join(arr)