/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     let arr=new Array(nums.length);
//     for(let i=0;i<nums.length;i++){
//         let sq=nums[i]**2;
//         arr[i]=sq;
//     }
    
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// };


var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let ans = [];

    for(let i=nums.length-1;i>=0;i--){
        const leftsquare=nums[left]*nums[left];
        const rightsquare=nums[right]*nums[right];
        if(leftsquare>rightsquare){
            ans[i]=leftsquare;
            left++;
        }
        else{
            ans[i]=rightsquare;
            right--;
        }
    }
    return ans;
};