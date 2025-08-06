function mmaxAreaOfIsland(grid) {
    let  noOfIsland = 0
    
    let maxArea = 0
    
    function dfs(i,j) {
        let count =0
        
        if (i<0 || j<0 || i>=grid.length || j>=grid[0].length) {
            return 0
        }
        if (grid[i][j]==='0') {
            return 0
        }
        grid[i][j]='0'
        count += 1
        

        count +=dfs(i,j+1)
        count +=dfs(i,j-1)
        count +=dfs(i+1,j)
        count +=dfs(i-1,j)
        
        
        return count

    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]=='1') {
                let area = dfs(i,j)
                maxArea = Math.max(maxArea,area)
            }            
            
        }
        
    }
    return maxArea
}