/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let res = [];
     if(intervals.length <=1) return intervals;
    intervals.sort((a,b) => a.start-b.start !== 0?a.start-b.start:a.end-b.end);
    let start = intervals[0].start;
    let end = intervals[0].end;
     for(let interval of intervals){
         if(interval.start <= end){
             end = Math.max(end, interval.end);
         }else{
             res.push(new Interval(start,end));
             start = interval.start;
             end = interval.end;
         }
     }
     res.push(new Interval(start, end));
     return res;
 };