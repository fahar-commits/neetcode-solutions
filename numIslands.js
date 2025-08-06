function maxAreaOfIsland(grid) {
    let  noOfIsland = 0
    let resultArray =[]
    function dfs(i,j) {
        let count =0
        if (i<0 || j<0 || i>grid.length || j>grid[0].length) {
            return
        }
        if (grid[i][j]==='0') {
            return
        }
        grid[i][j]='0'
        count += 1
        resultArray.push(count)

        dfs(i,j+1)
        dfs(i,j-1)
        dfs(i+1,j)
        dfs(i-1,j)
        
        return

    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]=='1') {
                dfs(i,j)
                noOfIsland += 1
            }            
            
        }
        
    }
    return count
}