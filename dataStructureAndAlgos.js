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
    }
    //Get at index

    //Remove at index

    //Clear list

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

ll.printListData()