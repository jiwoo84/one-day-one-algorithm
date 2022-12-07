# 1) 해시를 이용한 정석 방법 
def solution(phone_book):
    answer = True
    hash_map = {}
    
    # 등장한 숫자들을 count 딕셔너리로 만듦
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    # 다시 숫자들을 꺼낸뒤
    for phone_number in phone_book:
        temp = ""
        for number in phone_number: #숫자 하나씩 뜯어보기
            temp += number
            
            #딕셔너리 키로 같은게 있지만! 전체 숫자는 다른 경우!
            if temp in hash_map and temp != phone_number:
                return False
                
    return True

# 2) 정렬과 zip, startswith 이용 
def solution(phoneBook):
    phoneBook.sort()
    print(phoneBook)
    for p1, p2 in zip(phoneBook, phoneBook[1:]):
        print('p1:',p1)
        print('p2:',p2)
        
        if p2.startswith(p1):
            return False
    return True    