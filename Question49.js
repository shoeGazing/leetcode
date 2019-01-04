/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let str of strs){
        let sortStr = str.split('').sort().join('');
        if(map[sortStr] == null) map[sortStr] = [];
        map[sortStr].push(str);
    }
    return Object.values(map);
};