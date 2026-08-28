/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman_map={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    let result=0;
    for(let i=0;i<s.length;i++){
        if(i+1<s.length && roman_map[s[i]]<roman_map[s[i+1]]){
            result-=roman_map[s[i]];
        }
        else{
            result+=roman_map[s[i]];
        }
    }
    return result;
};