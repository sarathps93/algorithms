# Quick Sort
Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value. After that, recursively perform the same operation on the items before and after the pivot. 

## How it works
1. First select an element which is to be called as pivot element
2. Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right
3. Finally, perform the same operations on left and right side elements to the pivot element

## Pivot Helper function
1. It will help to accept three arguments: an array, a start index and an end index (these can be defaulted to 0 and array length - 1 respectively)
2. Grab the pivot from the start of the array
3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
4. Loop through the array from start until the end
    1. If the pivot is greater than the current element, increment the pivot index variable and swap the current element with the element at the pivot index
5. Swap the starting element (i.e the pivot) with the pivot index
6. Return the pivot index

## QuickSort pseudocode
1. Call the pivot helper on the array
2. When the helper returns you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index
3. Your base case occurs when you consider a subarray with less than 2 elements

## Performance
Best and Average - O(n log n)
Worst case - O(n^2)

Space complexity - O(log n)