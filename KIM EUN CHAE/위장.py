# 방법 1
def solution(clothes):
    closet = {}
    result = 1
    temp = []
    for element in clothes:
        key = element[1]
        value = element[0]
        # print('key :',key) 
        # print('value :', value) 

        if key in closet:
            closet[key].append(value)
            # print('closet:' ,closet)
        else:
            closet[key] = [value]
            # print('closet:' ,closet)

     # ex) output: {'headgear': ['yellow_hat', 'green_turban'], 'eyewear': ['blue_sunglasses']}

    for key in closet.keys():
        # print(key)
        result = result * (len(closet[key]) + 1)
    return result - 1
#각 경우를 다 곱해주면 되는데 부위별로 있는 옷의 갯수에서 아무것도 안입는 경우가 있을 수 있으니 +1을 해준다. 
# 또 모두 안입는 경우는 없다고 했으니 최종 곱한 값에서 -1을 해준다.
# ex) (모자 갯수 + 1) (안경 갯수 + 1) (신발 갯수 + 1) - 1 


# 방법 2
from collections import defaultdict

def solution(clothes):
    answer = 1

    clothes_dict = defaultdict(list)
    for sample, category in clothes:
        clothes_dict[category].append(sample)

    for i in clothes_dict.keys():
        answer *= len(clothes_dict[i]) + 1

    # Remove the case of All None elements
    answer -= 1
    return answer
