class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxPro = 0
        minPrice =prices[0]
        for i in range(len(prices)):
            minPrice = min(minPrice, prices[i])
            maxPro = max(maxPro, prices[i] - minPrice)
        return maxPro


         