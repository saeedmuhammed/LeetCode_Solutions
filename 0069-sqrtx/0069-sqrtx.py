class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        i use binary search between 1 to n
        """
        start=1.0
        end=float(x)
        mid=(start+end)/2.0
        while(int(mid * mid) != x):
            if(mid * mid > x):
                end=mid
            else:
                start = mid
            mid = (start+end) / 2.0
            
        return int(mid)