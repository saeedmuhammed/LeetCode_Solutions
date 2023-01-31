class Solution(object):
    def findNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        even=0
        for x in nums:
            c=0
            while (x != 0):
                x=x/10
                c+=1
            if(c%2==0):
                even+=1
        return even