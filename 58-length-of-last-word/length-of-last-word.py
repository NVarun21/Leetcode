class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s=s.strip()
        n=len(s)
        l=0
        for i in range(n-1,-1,-1):
            if s[i]!=" ":
                l+=1
            else:
                break
        return l