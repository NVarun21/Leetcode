/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count=0;
    s=s.trim();
    for(let i=s.length-1;i>=0;i--){
        if(s[i]==" "){
            break;
        }
        count+=1;
    }
    return count;
};