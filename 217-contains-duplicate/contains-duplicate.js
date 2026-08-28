/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let map=new Map();
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] in map){
//             return true;
//         }
//         map[nums[i]]=i;
//     }
//     return false;
// };
var containsDuplicate = function(nums) {

    // Merge Sort
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        let mid = Math.floor(arr.length / 2);

        let left = [];
        let right = [];

        for (let i = 0; i < mid; i++) {
            left.push(arr[i]);
        }

        for (let i = mid; i < arr.length; i++) {
            right.push(arr[i]);
        }

        left = mergeSort(left);
        right = mergeSort(right);

        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {

            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            result.push(left[i]);
            i++;
        }

        while (j < right.length) {
            result.push(right[j]);
            j++;
        }

        return result;
    }

    nums = mergeSort(nums);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return true;
        }
    }

    return false;
};