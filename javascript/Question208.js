/**
 * Initialize your data structure here.
 */
var Trie = function(){
    this.root = new TriNode();
 }
 var TriNode = function(){
    this.next = new Array(26);
    this.word = null;
 }
 /**
  * Inserts a word into the trie. 
  * @param {string} word
  * @return {void}
  */
 Trie.prototype.insert = function(word) {
   let p = this.root;
   for(let char of word){
       let idx = char.charCodeAt(0) - 97;
       if(p.next[idx] == undefined) p.next[idx] = new TriNode();
       p = p.next[idx];
   }
    p.word = word;
 }
 
 /**
  * Returns if the word is in the trie. 
  * @param {string} word
  * @return {boolean}
  */
 Trie.prototype.search = function(word) {
     let p = this.root;
     for(let char of word){
         let idx = char.charCodeAt(0) - 97;
         if(p.next[idx] == undefined) return false;
         p = p.next[idx];
     }
     return p.word === word?true:false;
 };
 
 /**
  * Returns if there is any word in the trie that starts with the given prefix. 
  * @param {string} prefix
  * @return {boolean}
  */
 Trie.prototype.startsWith = function(prefix) {
    let p = this.root;
    for(let char of prefix){
        let idx = char.charCodeAt(0) - 97;
        if(p.next[idx] == undefined) return false;
        p = p.next[idx];
    }
    return true;
 };
 
 /** 
  * Your Trie object will be instantiated and called as such:
  * var obj = Object.create(Trie).createNew()
  * obj.insert(word)
  * var param_2 = obj.search(word)
  * var param_3 = obj.startsWith(prefix)
  */