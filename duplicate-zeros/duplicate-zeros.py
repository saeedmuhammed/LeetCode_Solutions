class Solution(object):
    def duplicateZeros(self, arr):
        """
        :type arr: List[int]
        :rtype: None Do not return anything, modify arr in-place instead.
        """
        i = 0
        while ( i < len(arr)-1):    
            if(arr[i] == 0):
                for j in range(len(arr)-1,i,-1):
                    arr[j]=arr[j-1]
                arr[i+1]=0
                i+=1
            i+=1  
                
                
                
        