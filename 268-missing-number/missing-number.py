class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n=len(nums)
        Sum=sum(nums)
        nsum=n*(n+1)//2
        return nsum-Sum

        