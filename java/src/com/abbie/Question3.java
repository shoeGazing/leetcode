package com.abbie;

import java.util.HashSet;
import java.util.Set;

public class Question3 {
    public int lengthOfLongestSubstring(String s) {
           int ans = 0;
           Set<Character> set = new HashSet<>();
           int i = 0;
           int j = 0;
           int n = s.length();
           while(i < n  && j < n){
               if(!set.contains(s.charAt(j))){
                   set.add(s.charAt(j++));
                   ans = Math.max(ans, j-i);
               }else{
                   set.remove(s.charAt(i++));
               }
           }
           return ans;
    }
}
