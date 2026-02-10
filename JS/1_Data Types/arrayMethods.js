// ! Good Practice -
// - Declare arrays as const

const months = ["January", "February", "March", "April"];
// 1. length
console.log(months.length);

// 2. push() - add elements to the last index of array
months.push("May");
console.log(months);

// 3. pop() - remove element from the last index of original array and returns the element
let m = months.pop();
console.log(m);
console.log(months);

// 4. shift() - removes the first element and returns the element
months.shift();
console.log(months);

// 5. unshift() - adds element to the first index
months.unshift("January");
console.log(months);

// 6. concat() - merge two or more array and return a new array
const months2 = ["May", "June"];
const newArr = months.concat(months2);
console.log(newArr);

// 7. join() - join all element with a seperator (default is ,) returns a string
const monthString = months.join("-");
console.log(monthString);

// 8. isArray - returns boolean value checks is array or not
const res = Array.isArray(months);
console.log(res);

// 9. forEach() - no change in original array
console.log("---For Each---");
months.forEach((ele, index, array) => {
  console.log(`${index} - ${ele}`);
});
console.log("-------");

// 10. map() - returns a new array
const days = [10, 20, 30, 40, 50];
const days_res = days.map((ele) => {
  return ele / 10;
});

console.log("Divide by 10: ", days_res);

// 11. sort() - sorts the original array
let nums = [9, 4, 1, 5, 200, 6];
nums.sort((a, b) => {
  return a - b;
});
console.log("Sorted Nums array: ", nums);

// 12. reverse()
nums.reverse();
console.log(nums);

// 13. toSorted() - returns a new sorted Array

// 14. toReverse() - retuns a new reversed array

// 15. slice() - returns a piece of array (start to end(not included))
const slicedArr = months.slice(2, 4);
console.log(slicedArr);

// 16. splice() - changes in the original array

// 17. toSpliced() - same as splice but does not change original array returns a new array

// 18. indexOf() - returns the index of the element else -1
const fruits = ["apple", "banana", "mango", "pineapple", "grapes", "mango"];
const i = fruits.indexOf("mango");
console.log(i);

// 19. lastIndexOf()
const i_2 = fruits.lastIndexOf("mango");
console.log(i_2);

// 20. keys()
const fruitsKeys = fruits.keys();
for (let x of fruitsKeys) {
  console.log(x);
}

// 21. values()
const fruitsValues = fruits.values();
for (let x of fruitsValues) {
  console.log(x);
}

// 22. entries() - creates a new array of each key and value
const fruitsEntries = fruits.entries();
for (let [x, y] of fruitsEntries) {
  console.log(x, y);
}

// 23. every() - If all elements pass condition then true else false
const numbers = [25, 17, 35, 81, , 16, 150];
const check = numbers.every((val) => {
  return val > 0;
});
console.log(check);

// 24. some() - same as every but if any single element pass condition then true else false

// 25. filter() - returns a new array will elements that pass the condtion
const resArr = numbers.filter((ele) => ele > 30);
console.log(resArr);

// 26. find() - finds for the first element satisfying the condition
const foundInd = numbers.find((ele) => ele === 35);
console.log(foundInd);

// 27. findIndex()

// 28. findLast()

// 29. findLastIndex()

// 30. includes() - checks for the value and returns boolean value

// 31. toString() - converts the array to string and returns the string

// 32. from() - converts the string to array
const text = "Hello";
const arr = Array.from(text);
console.log(arr);

// 33. copyWithin()

// 34. valueOf()

// 35. prototype() - can create own method
const vegetables = ["Potato", "Pumpkin", "Okra", "Beans", "Cabbage"];
Array.prototype.removeAll = function () {
  while (this.length != 0) {
    this.pop();
  }
};

vegetables.removeAll();

console.log(vegetables);

// 36. reduce()
const numPool = [15, 10, 20, 25, 35];
const total = numPool.reduce((total, value) => {
  return total + value;
}, 10);

console.log(total);

// 37. reduceRight()

// 38. fill()

// 39. flat()

// 40. flatMap()

// 41. at()

// 42. of
