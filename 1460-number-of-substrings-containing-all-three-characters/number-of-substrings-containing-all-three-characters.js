/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let last={
        a:-1,
        b:-1,
        c:-1
    };
    let count=0;
    for(let i=0;i<s.length;i++){
        last[s[i]]=i;
        let minimum=Math.min(last.a,last.b,last.c)
        if(minimum!==-1){
            count+=minimum+1;
        }
    }
    return count;
};