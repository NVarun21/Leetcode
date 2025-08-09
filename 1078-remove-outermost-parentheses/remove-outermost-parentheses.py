class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        count = 0
        ans = ""
        for ch in s:
            if ch == "(":
                if count > 0:  # Only add if it's NOT the first '('
                    ans += ch
                count += 1
            else:  # ch == ")"
                count -= 1
                if count > 0:  # Only add if it's NOT the last ')'
                    ans += ch
        return ans
