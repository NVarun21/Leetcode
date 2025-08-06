class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def rotation(start,end):
            while start<end:
                nums[start],nums[end]=nums[end],nums[start]
                start+=1
                end-=1
        n=len(nums)
        k=k%n
        rotation(n-k,n-1)
        rotation(0,n-k-1)
        rotation(0,n-1)
        return nums