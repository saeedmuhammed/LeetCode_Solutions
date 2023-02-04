class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
       
        """
        stack=[]
        for char in s:
            if(char == "(" or char == "{" or char == "["):
                stack.append(char)
            else:
                s1=""
                pracket=""
                if stack:
                    pracket = stack.pop()
                if(char == ")"):
                    s1 = "("
                elif(char== "}"):
                    s1="{"
                elif(char == "]"):
                    s1 = "["
                if(s1 != pracket):
                    return False
        if not stack:
            return True
        else:
            return False
        