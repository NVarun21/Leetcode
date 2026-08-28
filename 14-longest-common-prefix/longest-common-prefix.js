/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let s=strs.sort();
    let s1=s[0];
    let s2=s[s.length-1];
    let index=0;
    while(index<s1.length){
        if(s1[index]==s2[index]){
            index++;
        }
        else{
            break;
        }
    }
    if(index==0){
        return "";
    }
    return s1.slice(0,index);
};