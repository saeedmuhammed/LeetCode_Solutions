class Solution(object):
    def sortedSquares(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        squares = [x*x for x in nums]
        squares.sort()
        return squares
        