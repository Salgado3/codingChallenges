// Linked list by https://www.youtube.com/watch?v=ZBdE8DElQQU  10/16

class Node {
constructor(data, next = null) {
    this.data = data,
    this.next = next
}

}


class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;

    }

    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }
    //insert last node
    insertLast(data){
      let node = new Node(data);
      let current;
      
      //if empty, then make it the head
        if(!this.head){
            this.head = node
        }else {
            current = this.head

            while(current.next) {
                current = current.next
            }
            current.next = node

        }
        this.size++

    }
    //insert at index
    insertAt(data, index) {
        //If index is out of range
        if(index > 0 && index > this.size){
            return;
        }
            // If first index
        if (index === 0) {
            this.insertFirst(data);
            return;
          }

          const node = new Node(data)
          let current, previous;

          //set current to first
          current =this.head
          let count  = 0;
          while(count < index){
            previous = current;
            count++;
            current = current.next

          }
          node.next = current;
          previous.next = node

          this.size++
    }
    //Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
    
        while (current) {
          if (count == index) {
            console.log(current.data);
          }
          count++;
          current = current.next;
        }
    
        return null;
      }
    //Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
          return;
        }
    
        let current = this.head;
        let previous;
        let count = 0;
    
        // Remove first
        if (index === 0) {
          this.head = current.next;
        } else {
          while (count < index) {
            count++;
            previous = current;
            current = current.next;
          }
    
          previous.next = current.next;
        }
    
        this.size--;
      }
    //Clear list
    clearList() {
        this.head = null;
        this.size = 0;
      }
    //Print list data
printListData() {
    let current = this.head
    while(current) {
console.log(current.data)
current = current.next

    }
}

}

const ll = new Linkedlist();
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500,0)
 ll.removeAt(2)


ll.clearList()

ll.printListData()

//10/18 Stack from  https://codepen.io/beaucarnes/pen/yMBGbR?editors=0012
/* Stacks! */

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "freeCodeCamp"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop(); 
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}



// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
  
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = function() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);

myStack.push("freeCodeCamp");
 console.log(Object.entries(myStack.storage))
