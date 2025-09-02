class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x<0:
            return False
        original=x
        revnum=0
        while x>0:
            rem=x%10
            revnum=revnum*10+rem
            x=x//10
        return original==revnum