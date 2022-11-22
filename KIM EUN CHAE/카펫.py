def solution(brown, yellow):
    #  yellow 부분 세로의 길이 = 약수 집합들 각 요소들 
    #  yellow 부분 가로의 길이 = yellow 개수 // 세로의 길이 
    #  brown = (yellow 가로 *2) + (yellow 세로 * 2) + 4
    #  answer = [( yellow 가로길이 + 2 )  , ( yellow 세로길이 + 2)] 

    heightTemp = [] # yellow 약수 집합 (세로 길이 집합)
    widthTemp = []  # yellow 가로 길이 집합
    answer = []

    for i in range(yellow) : 
        if( yellow % (i+1) == 0) : 
            heightTemp.append(i+1) 

    for i in range(len(heightTemp)) : 
        widthTemp.append( yellow // heightTemp[i] )
        if ( widthTemp[i] >= heightTemp[i]) and (((widthTemp[i]*2)+(heightTemp[i]*2) + 4) == brown): 
            answer.append(widthTemp[i]+2)
            answer.append(heightTemp[i]+2)

    return answer