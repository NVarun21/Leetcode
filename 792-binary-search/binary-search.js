/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n=nums.length;
    let l=0;
    let r=n-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(nums[mid]===target){
            return mid;
        }
        else if(target>nums[mid]){
            l=mid+1;
        }
        else{
            r=mid-1;
        }
    }
    return -1;
};