class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):  # Start from last digit
            if int(num[i]) % 2 != 0:           # Odd digit found
                return num[:i+1]               # Return substring up to here
        return ""                              # No odd digit found
