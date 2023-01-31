class Solution(object):
    def findNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        even=0
        for x in nums:
            dStr=len(str(x))
            if(dStr%2)==0:
                even+=1
        return even   