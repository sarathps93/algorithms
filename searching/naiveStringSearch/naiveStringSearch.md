# Naive String search
A naive solution for looping through a big string to find the match for a small substring

## Pseudocode
1. Loop over the longer string
2. Loop over the shorter string
3. If the characters don't match, break out of the inner loop
4. If the characters do match, keep going
5. If you complete the inner loop and it matches, increment the count
6. Return the count

## Time complexity
The worst case time complexity is O(mn)