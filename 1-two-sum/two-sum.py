class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        prefix_sum={}
        for i in range(len(nums)):
            required=target-nums[i]
            if required in prefix_sum:
                return [prefix_sum[required],i]
            prefix_sum[nums[i]]=i