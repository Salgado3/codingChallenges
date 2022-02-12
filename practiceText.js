

function partsSums(arr,i = 0) {
     
     if(arr[i] === arr[arr.length-1]) return[arr[i]]
     if(arr.length === 0) return [0]
     if(arr.length=== 1) return [ls]
    
    return arr[i] + partsSums(arr[i+1])
  }





console.log(partsSums([1, 2, 3, 4, 5, 6]))

// [21, 20, 18, 15, 11, 6, 0]