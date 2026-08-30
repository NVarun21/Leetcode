/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n>0 && (n&n-1)===0;
    // if(n<=0){
    //     return false;
    // }
    // while(n%2===0){
    //     n=n/2;
    // }
    // return n===1;
};