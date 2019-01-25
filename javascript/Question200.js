/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == '1'){
                checkGrid(grid,i,j);
                res++;
            }
        }
    }
    return res;
};

let checkGrid = function(grid, i, j){
    if(i < 0 || i > grid.length-1 || j < 0 || j > grid[0].length -1) return;
    if(grid[i][j] == '1'){
         grid[i][j] = '#';
         checkGrid(grid,i-1,j);
         checkGrid(grid,i+1,j);
         checkGrid(grid,i,j-1);
         checkGrid(grid,i,j+1);
    }
}