class Solution(object):
    def sumOfTheDigitsOfHarshadNumber(self, x):
        """
        :type x: int
        :rtype: int
        """
        original=x
        Sum=0
        while x!=0:
            rem=x%10
            Sum+=rem
            x=x//10
        if original%Sum==0:
            return Sum
        return -1