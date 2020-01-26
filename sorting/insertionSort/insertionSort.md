# Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted

## Pseudocode
1. start by picking the second element in the array
2. Now compare the second element with the one before it and swap if necessary
3. Continue to the next element and if it is in the correct order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
4. Repeat until the array is sorted

## Big O
1. Worst & Average case : O(n ^ 2)
2. Nearly sorted data, best case: O(n)