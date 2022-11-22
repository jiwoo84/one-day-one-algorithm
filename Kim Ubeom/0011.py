def quickSort(array):
    if len(array) <= 1:
        return array

    left = []
    right = []
    pivot = array[0]
    arr = array[1:]

    for i in arr:
        if i <= pivot:
            left.append(i)
        else:
            right.append(i)

    return quickSort(left) + [pivot] + quickSort(right)


print(quickSort([10, 2, 3, 4, 5, 6, 9, 7, 8, 1]))
