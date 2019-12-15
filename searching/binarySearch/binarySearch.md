# Binary Search
Binary search is a comparitively faster method to search in an array. It works only in sorted arrays. 

## How it works
It is based on divide and conquer approach. It works by randomly choosing a middle point of a sorted array and checking if the given value to search is greater than or lesser than the given value. In this way at any point of time we can completely exclude half of the array items

## Pseudocode
1. Create a function which accepts a sorted array and a value to search
2. Create a left pointer at the start of an array and right pointer at the end of an array
3. While left pointer comes before the right pointer
    1. Create a pointer in the middle
    2. If value is found, return the index
    3. If the value is too small, move the left pointer up
    4. If the value is too large, move the right pointer down
4. If you never find the value, return -1

## Time complexity
Worst and Average case: O(log n)
Best case: O(1)