/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let freq={};
    let res=[];
    for(let i=0;i<nums1.length;i++){
        if(freq[nums1[i]]==undefined){
            freq[nums1[i]]=1
        }
        else{
            freq[nums1[i]]++;
        }
    }

    for(let i=0;i<nums2.length;i++){
        if(freq[nums2[i]]>0){
            res[res.length]=nums2[i];
            freq[nums2[i]]--;
        }
    }
    return res;
};