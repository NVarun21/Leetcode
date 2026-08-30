/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let freq={};
    for(let i=0;i<magazine.length;i++){
        if(freq[magazine[i]]===undefined){
            freq[magazine[i]]=1;
        }
        else{
            freq[magazine[i]]++;
        }
    }

    for(let i=0;i<ransomNote.length;i++){
        if(freq[ransomNote[i]]===0 || freq[ransomNote[i]]===undefined){
            return false;
        }
        freq[ransomNote[i]]--;
    }
    return true;
};