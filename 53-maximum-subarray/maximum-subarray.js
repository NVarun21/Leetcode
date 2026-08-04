/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxi=-Infinity;
    let s=0;
    for(let num of nums){
        s+=num;
        if(s>maxi){
            maxi=s
        }
        if(s<0){
            s=0;
        }
    }
    return maxi;
};