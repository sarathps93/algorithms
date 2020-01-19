# Quick Sort
Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value. After that, recursively perform the same operation on the items before and after the pivot. 

## How it works
1. First select an element which is to be called as pivot element
2. Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right
3. Finally, perform the same operations on left and right side elements to the pivot element

## Performance
Best and Average - O(n log n)
Worst case - O(n^2)

Space complexity - O(log n)