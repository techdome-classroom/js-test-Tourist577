
function func(grid,m,n){

  if(m>=grid.length || m<0 || n<0 || n>=grid[0].length || grid[m][n]==='W') return ;

  grid[m][n]='W';

  func(grid,m+1,n);
  func(grid,m-1,n);
  func(grid,m,n+1);
  func(grid,m,n-1);
  
}

const getTotalIsles = function (grid) {


  // write your code here
  let ans=0;

  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
      if(grid[i][j]=='L'){
        ans++;
        func(grid,i,j);
      }
    }
  }

};

module.exports = getTotalIsles;