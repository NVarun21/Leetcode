class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n  
        # Normalize k to handle cases where k > n
        # Helper function to reverse a subarray in-place
        def reverse(start, end):
            while start < end:
                nums[start], nums[end] = nums[end], nums[start]
                start += 1
                end -= 1
        # Step 1: Reverse the last k elements
        reverse(n - k, n - 1)
        # Step 2: Reverse the first n-k elements
        reverse(0, n - k - 1)
        # Step 3: Reverse the whole array
        reverse(0, n - 1)