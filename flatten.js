var array = [1, 2, [3, 4, [5, 6, 0]], 4, [3, 7], 0];

/* traverse the array with dfs */
function flatten_dfs(arr) {
    var result = [];
    for(item of arr) {
        if(Array.isArray(item)) {
            result = result.concat(flatten_dfs(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

const myArray = flatten_dfs(array);
console.log("DFS: " + myArray);

/* traverse the array with bfs */ 
function flatten_bfs(arr) {
    var result = [];
    for(item of arr) {
        if(Array.isArray(item)) {
            while(item.length !== 0) {
                result.push(item.shift());
            }
        } else {
            result.push(item);
        }
    }
    return result;
}

const myArray2 = flatten_bfs(array);
console.log("BFS: " + myArray2);