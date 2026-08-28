/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let count=0;
        if(nums[i] in map){
            count++;
        }
        else{
            map[nums[i]]=i;
        }
        if(count>=1){
            return true;
        }
    }
    return false;
};