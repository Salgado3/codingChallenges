const arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
sorted = sorted.sort((a, b) => a.localeCompare(b));
sorted.push("hello");
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
console.log(sorted == arr);
function copySorted(arr) {
  return arr;
}
