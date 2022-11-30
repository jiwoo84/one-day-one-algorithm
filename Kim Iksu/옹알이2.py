# https://school.programmers.co.kr/learn/courses/30/lessons/133499


def solution(babbling):
    able_words = ["aya", "ye", "woo", "ma"]
    answer = 0
    for word in babbling:
        for able in able_words:
            if able * 2 not in word:
                word = word.replace(able, " ")
        if word.strip() == "":
            answer += 1
    return answer
