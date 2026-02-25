class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxPro = 0
        minPrice =prices[0]
        for i in range(len(prices)):
            minPrice = min(minPrice, prices[i])
            profit=prices[i] - minPrice
            maxPro = max(maxPro,profit)
        return maxPro     