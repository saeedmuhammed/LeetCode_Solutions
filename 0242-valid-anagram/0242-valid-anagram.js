/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let myMap = new Map();
    for(let i =0 ; i< s.length ; i++){
        if(myMap.has(s[i])){
            myMap.set(s[i],myMap.get(s[i])+1);
        }
        else{
            myMap.set(s[i],1);
        }
}
    
    for(let i =0 ; i< t.length ; i++){
        if(myMap.has(t[i])){
            myMap.set(t[i],myMap.get(t[i])-1);
        }
        else{
            
            myMap.set(t[i],1);
        }
    }
    
     for (const [ char, count ] of myMap) {
            if(count !== 0) return false;
     }
    return true;
    
};