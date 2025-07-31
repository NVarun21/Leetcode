class Solution:
    def frequencySort(self, nums):
        freq = {}
        for num in nums:
            if num in freq:
                freq[num] += 1
            else:
                freq[num] = 1

        def sort_key(x):
            return (freq[x], -x)  

        nums.sort(key=sort_key)
        return nums
