import numpy as np

def solution(arr1, arr2):
    new_arr = np.array(arr1) @  np.array(arr2)
    return new_arr.tolist()

''' 다른풀이
def productMatrix(A, B):
    return [[sum(a*b for a, b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
'''