class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        K=0
        sign=-1 if x<0 else 1
        x=abs(x)
        while x>0:
            digit=x%10
            K=K*10+digit
            x=x//10
        K=K*sign
        if K<-2**31 or K>2**31-1:
            return 0
        return K