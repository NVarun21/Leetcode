class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        Sum=0
        maxi=nums[0]
        for num in nums:
            Sum+=num
            if Sum>maxi:
                maxi=Sum
            if Sum<0:
                Sum=0
        return maxi