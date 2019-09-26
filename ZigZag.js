/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)
        return s;
    
    var result = ""
    var circle = 2 * numRows - 2;
    for(var i = 0; i < numRows; i++) {
        for(var j = 0; j < s.length; j++) {
            if(j % circle === i || j % circle === circle - i)
                result += s[j];
        }
    }
    
    return result;
};