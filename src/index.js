module.exports = function solveSudoku(matrix) {
    return sudoku(matrix);
      
};

const sudoku = (table) => {
    const arr = [[],[],[],[],[],[],[],[],[]];
    
    for (i=0;i<9;i++) { 
        for(z=0;z< 9;z++) {
            table[i][z] === 0? arr[i].push(Math.floor(Math.random() * (9 - 1 + 1)) + 1): arr[i].push(table[i][z]);
        }
    
    }
    const ckeker =  chec(arr);
    if(ckeker == true) {
        console.log(true);
        return arr;
       
    } else {
    
        return sudoku(table);
        //console.log(arr);
    }
    
    
    
    }
    var chec = function() {
        for (var g = [], b = [], c = [], d = [], e = [], h = [], f = [], a = 0; 81 > a; a++) {
          a % 9 || (b = [], h.push(b)), b.push(a), 9 > a ? f.push([a]) : f[a % 9].push(a), a % 3 || a % 27 || (c = [], d = [], e = [], g.push(c, d, e)), [c, d, e][a % 9 / 3 | 0].push(a);
        }
        var k = [].concat(g, h, f);
        return function(a) {
          a = [].concat.apply([], a);
        //console.log(a);
          return k.every(function(b) {
            var c = {};
            return b.every(function(b) {
              b = a[b];
              c[b] = (c[b] || 0) + 1;
              return 2 > c[b];
            });
          });
        };
      }();
/*
const table =  [
    [5, 3, 4, 6, 7, 8, 9, 0, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];

*/




