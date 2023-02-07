class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        dict={}
        if(len(s) != len(t) ):
            return False
        else:
            for i in range (len(s)):
                if( s[i] in dict.keys() ):
                    if(dict[s[i]] != t[i]):
                        return False
                elif (t[i] not in dict.values()):
                    dict[s[i]] = t[i]
                else:
                    return False
            return True
        