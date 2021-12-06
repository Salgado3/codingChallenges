// BFS on Binary tree

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
       }
    }
    
    
    const a = new Node("a")
    const b = new Node("b")
    const c = new Node("c")
    const d = new Node("d")
    const e = new Node("e")
    const f = new Node("f")
    
    //     a
    //    /  \
    //   /    \
    //  b      c
    // / \      \
    // d  e      f
    
    a.left = b;
    a.right =c;
    b.left = d;
    b.right = e;
    c.right = f;
    
    // BFS
    
    const breadthFirstPring = (root) => {
    const queue = [ root ];
    
    while(queue.length >0) {
      const curr = queue.shift();
          console.log(curr.val)
    
          if(curr.left !== null){
            queue.push(curr.left)
          }
    
          if(curr.right !== null){
            queue.push(curr.right)
          }
    
    }
    
    }
    
    breadthFirstPring(a)

    //Singly Linked List

    function reverseLinkedList(head) {
            let prev = null

            while(head!==null) {
                let next = head.next //temp holder for next value in original list
                head.next = prev  //flipping pointer to prev (makes our header node become the footer by flipping pointer to null)
                prev = head //setting up var prev as head node in order for the following node in the list to point to the former head node
                head = next //using out temp next holder to reassign head to original head.next so that our while loop continues

            }

return prev //returning prev since prev is the header for the linked list after reversing

    }//To reverse a linked list with O(n) time and O(1) space, we could traversal the whole linked list and relink the next pointer to the prev node. The only thing we need to do is using a variable to keep the prev node. - poppinlp on LC https://leetcode.com/problems/reverse-linked-list/discuss/1451236/JavaScript-Easy-to-understand-loop-and-recursion