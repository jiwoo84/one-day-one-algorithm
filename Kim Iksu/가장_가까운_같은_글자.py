def solution(s):
    dict_s = {}
    answer = []
    for alpha in s:
        if alpha not in dict_s.keys():
            answer.append(-1)
            dict_s[alpha] = 1
        else:
            answer.append(dict_s[alpha] - 1)
            dict_s[alpha] = 1

        for i in dict_s:
            dict_s[i] += 1
    return answer
