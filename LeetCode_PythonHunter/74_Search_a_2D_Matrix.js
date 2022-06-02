// https://pythontutor.com/render.html#code=var%20searchMatrix%20%3D%20function%28matrix,%20target%29%20%7B%0A%20%20%20%20let%20start%20%3D%200%0A%20%20%20%20let%20end%20%3D%20%28matrix.length%20*%20%20matrix%5B0%5D.length%29%20-1%0A%20%20%20%20%0A%20%20%20%20while%28start%20%3C%3D%20end%29%7B%0A%20%20%20%20%20%20%20%20let%20mid%20%3D%20Math.floor%28%28start%20%2B%20end%29/2%29%0A%20%20%20%20%20%20%20%20let%20midVal%20%3D%20matrix%5BMath.floor%28mid/matrix%5B0%5D.length%29%5D%5BMath.floor%28mid%25matrix%5B0%5D.length%29%5D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20if%28midVal%20%3D%3D%3D%20target%29%20return%20true%0A%20%20%20%20%20%20%20%20if%28midVal%20%3E%20target%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20end%20%3D%20mid%20-1%0A%20%20%20%20%20%20%20%20%7Delse%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20start%20%3D%20mid%2B1%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20return%20false%0A%7D%3B%0AsearchMatrix%28%5B%5B1,3,5,7%5D,%5B10,11,16,20%5D,%5B23,30,34,60%5D%5D,3%29&cumulative=false&curInstr=5&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// https://leetcode.com/problems/search-a-2d-matrix/
var searchMatrix = function (matrix, target) {
  let start = 0;
  let end = matrix.length * matrix[0].length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midVal =
      matrix[Math.floor(mid / matrix[0].length)][
        Math.floor(mid % matrix[0].length)
      ];

    if (midVal === target) return true;
    if (midVal > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};
