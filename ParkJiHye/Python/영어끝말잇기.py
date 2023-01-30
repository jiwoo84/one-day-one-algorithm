def solution(n, words):
    head = []
    tail = [] 
    
    for idx, word in enumerate(words):
        if word in words[:idx]: return [idx % n +1, idx // n + 1]
        head.append([idx,word[0]])
        tail.append([idx,word[-1]])

    try:
        for i in range(len(words)):   
            if(head[i+1][1] != tail[i][1] )  :
                return [head[i+1][0]%n + 1,head[i+1][0]//n +1]
    except IndexError:
        return [0,0]