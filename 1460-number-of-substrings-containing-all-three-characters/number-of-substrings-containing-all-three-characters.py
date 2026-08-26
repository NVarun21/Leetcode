class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        count=0
        n=len(s)
        last={
            'a':-1,
            'b':-1,
            'c':-1
        }
        for i in range(n):
            last[s[i]]=i
            minimum=min(last['a'],last['b'],last['c'])
            if minimum!=-1:
                count+=minimum+1
        return count