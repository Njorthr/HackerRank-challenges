/**
*   Return the second largest number in the array.
*   param {Number[]} nums - An array of numbers.
*   return {Number} The second largest number in the array.
**/
let firstLargestNumber, secondLargestNumber, index
function getSecondLargest(nums) {
    firstLargestNumber = Math.max(...nums)
    index = nums.indexOf(firstLargestNumber)
    nums.splice(index, 1)
    secondLargestNumber = Math.max(...nums)
    index = nums.indexOf(secondLargestNumber)    
    while(firstLargestNumber == secondLargestNumber) {
        nums.splice(index, 1)
        secondLargestNumber = Math.max(...nums)        
    }
    return secondLargestNumber;
}
