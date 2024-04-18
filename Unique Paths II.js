var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    if(obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1){
        return 0;
    }

    const dp = Array(m).fill().map(() => Array(n).fill(0));

    dp[0][0] = 1;

    for(let row = 0; row < m; row++){
        for(let col = 0; col < n; col++){
            if(obstacleGrid[row][col] === 1){
                dp[row][col] = 0;
                continue;
            }

            if(row > 0 && obstacleGrid[row - 1][col] === 0){
                dp[row][col] += dp[row - 1][col];
            }
            if(col > 0 && obstacleGrid[row][col - 1] === 0){
                dp[row][col] += dp[row][col - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

//Example usage:
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0][0,0,0]]));
console.log(uniquePathsWithObstacles([[0,1],[0,0]]));