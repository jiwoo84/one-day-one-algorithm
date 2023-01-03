# https://school.programmers.co.kr/learn/courses/30/lessons/147355
def solution(t, p):
    int_p = int(p)
    len_p = len(p)
    len_t = len(t)
    answer = 0
    for i in range(len_t - len_p + 1):
        int_t = int(t[i : i + len_p])
        if int_p >= int_t:
            answer += 1
    return answer
