/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let dic = new Set(wordList);
    if(!dic.has(endWord)) return 0;
    let bfs = [beginWord, null];
    let visited = new Set();
    visited.add(beginWord);
    let res = 0;
    let alpha =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
     
     while(bfs.length >0){
         let temp = bfs.shift();
         if(temp == endWord){
             return res+1;
         } 
         if(temp == null){
             if(bfs.length == 0) return 0;
             res++;
             bfs.push(null);
         }else{
             for(let i = 0; i < temp.length; i++){
                 for(let j = 0; j < alpha.length; j++){
                     let str = temp.substring(0,i)+alpha[j]+temp.substring(i+1,temp.length);
                     if(dic.has(str) && !visited.has(str)){
                         visited.add(str);
                         bfs.push(str);
                     }
                 }
             }
         }
     }
 };