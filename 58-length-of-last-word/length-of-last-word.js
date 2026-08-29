/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let count=0;
    // s=s.trim();
    // for(let i=s.length-1;i>=0;i--){
    //     if(s[i]==" "){
    //         break;
    //     }
    //     count+=1;
    // }
    // return count;
    let count=0;
    let i=s.length-1;
    while(i>=0 && s[i]==" "){
        i--;
    }
    while(i>=0 && s[i]!==" "){
        count++;
        i--;
    }
    return count;
};