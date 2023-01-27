def solution(s):
  open = []
  answer = True
  
  for i in s:
    if i=="(":
      open.append(i)
    else:
      if len(open)==0:
        answer = False
        break
      else : 
        open.pop();

  if len(open)!=0:
    answer = False;

  return answer