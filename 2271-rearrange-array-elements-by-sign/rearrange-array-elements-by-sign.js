/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let neg_idx=1;
    let pos_idx=0;
    let res=new Array(nums.length);
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res[pos_idx]=nums[i];
            pos_idx+=2;
        }
        else{
            res[neg_idx]=nums[i];
            neg_idx+=2;
        }
    }
    return res;
};