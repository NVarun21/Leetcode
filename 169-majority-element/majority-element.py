class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n=len(nums)
        majority=nums[0]
        freq={}
        for num in nums:
            if num in freq:
                freq[num]+=1
                if freq[num]>n//2:
                    majority=num
            else:
                freq[num]=1
        return majority