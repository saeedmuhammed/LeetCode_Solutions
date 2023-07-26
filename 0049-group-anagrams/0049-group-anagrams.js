/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let myMap = new Map();
    let finalResult=[];
    
    for(let i = 0 ; i < strs.length ; i++){
        let sortedString = strs[i].split("").sort().join("");
        if(myMap.has(sortedString)){
            let indexes = myMap.get(sortedString);
            indexes.push(i);
            myMap.set(sortedString,indexes);
            }
        else {
            myMap.set(sortedString,[i]);
        }
    }
    
    for (const [key , value] of myMap){
       let words = value.map((index)=>{
            return strs[index];
        });
        finalResult.push(words);
    }
    
    return finalResult;
};