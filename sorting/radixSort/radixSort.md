# Radix Sort
Radix sort is an integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same significant position and value (place value).

## Pseudo code
1. Find the maximum digit of array of numbers. Create a for loop that runs as many times as the maximum digits
2. Create an array of arrays with a maximum length of 10 for storing numbers from 0 to 9
3. Create another loop that runs as many times as the length of input array
4. Find the digits at every position starting from index 0 and push the value to the relevant position in the array we created
5. Merge all the values in the array of arrays and return after the loop completion

## Space complexity
O(n + k) where k is the number of digits in the number

## Time complexity
For all the cases - O(nk) where k is the number of digits in the number