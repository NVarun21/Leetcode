/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // let s=strs.sort();
    // let s1=s[0];
    // let s2=s[s.length-1];
    // let index=0;
    // while(index<s1.length){
    //     if(s1[index]==s2[index]){
    //         index++;
    //     }
    //     else{
    //         break;
    //     }
    // }
    // if(index==0){
    //     return "";
    // }
    // return s1.slice(0,index);

    let prefix=strs[0];
    for(let i=1;i<strs.length;i++){
        let j=0;
        while(j<prefix.length && j<strs[i].length && prefix[j]==strs[i][j]){
            j++;
        }
        let temp="";
        for(let k=0;k<j;k++){
            temp+=prefix[k];
        }
        prefix=temp;
    }
    return prefix;
};