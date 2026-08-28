/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(nums[i] in map){
            return true;
        }
        map[nums[i]]=i;
    }
    return false;
};