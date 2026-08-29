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
    
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
};