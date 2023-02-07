class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        arr=[]
        for i in range(numRows):
            col = []
            for j in range(i+1):
                if (j==0 or j==i):
                    col.append(1)    
                else:
                    col.append(arr[i-1][j-1]+arr[i-1][j])
            arr.append(col)        
        return arr
        """
        for i in range (numRows):
            for j in range (i) :
                if(j==0 or j==1):
                    arr[i][j]=1
                else:
                    arr[i][j]=arr[i-1][j-1]+arr[i-1][j]
        return arr
        """