/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // final result
    var results = [];
    
    // check the validity of array
    if(nums === null || nums.length < 3) {
        return results;
    }
    
    nums.sort(sortNum);
    
    for(var i = 0; i < nums.length - 2; i++) {
        // skip the duplicate numbers
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        var target = -nums[i];
        console.log(target);
        var left = i + 1, right = nums.length - 1;
        twoSum(nums, left, right, target, results);
    }
    return results;
};

function sortNum(a, b) {
    return a - b;
}

function twoSum(nums, left, right, target, results) {
    while(left < right) {
        if(nums[left] + nums[right] === target) {
            var result = [-target, nums[left], nums[right]];
            results.push(result);
                
            left++;
            right--;
                
            // skip duplicate numbers
            while(left < right && nums[left] === nums[left - 1]) {
                left++;
            }
            while(left < right && nums[right] === nums[right + 1]) {
                right--;
            }
        }
        else if(nums[left] + nums[right] < target) {
            left++;
        }
        else {
            right--;
        }
    }
};