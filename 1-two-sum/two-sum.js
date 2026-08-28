/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]===target){
    //             return [i,j];
    //         }
    //     }
    // }

    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let required=target-nums[i];
        if(required in map){
            return [i,map[required]];
        }
        map[nums[i]]=i;
    }
};