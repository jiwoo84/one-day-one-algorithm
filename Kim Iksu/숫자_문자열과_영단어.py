# https://school.programmers.co.kr/learn/courses/30/lessons/81301


def solution(s):
    number_dict = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
    }
    for word in number_dict.keys():
        s = s.replace(word, number_dict[word])

    return int(s)
