class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()
        str1=strs[0]
        str2=strs[-1]
        index=0
        while index<len(str1):
            if str1[index]==str2[index]:
                index+=1
            else:
                break
        return "" if index==0 else str1[:index]
            
