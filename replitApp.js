// For this challenge, you're going to write the OT validation function. The function will take in a string for the stale file contents, a string containing the latest file contents, and a JSON string containing the operations.
// Gotchas:

//     You can't skip past the end of a string
//     You can't delete past the end of a string
//     Delete operations are applied forward while keeping the cursor in place



function isValid(stale, latest, otjson) {
  let jsonObj = JSON.parse(otjson)

  if(!jsonObj.length) return true
  let staleLength = stale.length
  let cursor = 0
  let newStale = stale;

for(let ele of jsonObj) {

if(ele["op"] === "skip") {
    if(cursor + ele["count"]>newStale.length) return false
    else{
        cursor+= ele["count"]
    }
    
 }

 if(ele["op"] === "delete") {
     if(cursor + ele["count"] > staleLength) return false
     else{
        
    newStale =newStale.substring(0, cursor) + newStale.substring(cursor+ ele["count"], staleLength)
     }
 }
 if(ele["op"] === "insert") {
    let char = ele["chars"]
  
   
      newStale = newStale.substring(0,cursor) + char + newStale
      cursor+=char.length  
      
}


}
 return newStale === latest ? true: false
  }
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
  )); // true
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
  )); // false, delete past end
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
  )); // false, skip past end
  
console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  )); // true
  
  console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
  )); // true