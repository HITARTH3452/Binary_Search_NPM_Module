## README.md
### Binary_Search_Module
This module provides Binary Search functioanlity which takes a array and a element to find the index where the element present in array if element is not present in the array it will return -1

#### Usage:
```javascript
const Binary_search = require('binary_search_npm_package');

const arr = [1, 3, 5, 7, 9];
const elementToFind = 5;

const index = Binary_search(arr, elementToFind);
console.log(index); // Output: 2