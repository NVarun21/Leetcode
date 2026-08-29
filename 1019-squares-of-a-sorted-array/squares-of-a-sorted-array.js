/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr=new Array(nums.length);
    for(let i=0;i<nums.length;i++){
        let sq=nums[i]**2;
        arr[i]=sq;
    }
    return arr.sort((s,b)=>s-b);
};