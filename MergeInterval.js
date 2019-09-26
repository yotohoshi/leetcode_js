/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals === null || intervals.length <= 1)
        return intervals;
    
    // sort intervals in ascending order of first number of interval
    intervals.sort(function(i1, i2) {
        return i1[0] - i2[0];
    });
    
    var newInterval = intervals[0];
    var result = [];
    result.push(newInterval);
    
    for(interval of intervals) {
        if(interval[0] <= newInterval[1]) {
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        } else {
            newInterval = interval;
            result.push(newInterval);
        }
    }
    
    return result;
};