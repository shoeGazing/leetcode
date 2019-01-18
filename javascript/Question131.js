/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    let step = [];
    if(s == null || s.length == 0) return null;
    helper(res,step,s);
    return res;
};

let helper = function(res, step, s){
    if(s == null || s.length == 0){
        res.push(step.slice());
        return;
    }
    
    for(let i = 1; i <= s.length; i++){
        let temp = s.substring(0,i);
        if(!isPalindrome(temp)) continue;
        step.push(temp);
        helper(res, step, s.substring(i,s.length));
        step.pop();
    }
    return;
}

let isPalindrome = function(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
       if(str[left] !== str[right]) return false;
       left++;
       right--; 
    }
       return true;
}