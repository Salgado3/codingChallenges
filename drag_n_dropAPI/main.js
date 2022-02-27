
/* events fired on the draggable target */
let count = 0
//continues to fire as item is being dragged. e.target is the dragged item
document.addEventListener("drag", (e)=> {

    e.target.style.background = "red" //item that stays in og place
})

//fires once, when the dragging begins
document.addEventListener("dragstart", (e)=> {
    console.log("drag has started")
    dragged = e.target;
    e.target.style.opacity = .75;
    e.target.style.background = "purple" //item that is being dragged with mouse
    e.target.style.border = "4px solid red"
})

//fires once the dragging ends
document.addEventListener("dragend", (e)=> {
    // reset the transparency
    e.target.style.opacity = "";
    e.target.style.background = "yellow"
    e.target.style.border = "1px solid red"
  })


  /* events fired on the drop targets */
  document.addEventListener("dragover", (e)=> {
    // prevent default to allow drop
    e.preventDefault();
    
  }, false);


  document.addEventListener("dragenter", (e)=> {
    if(e.target.classList.contains("container")) {
        e.target.style.border = "2px dotted red"
        e.target.classList.add("container_shadow") 
     
    }
  })

  document.addEventListener("dragleave", (e)=> {
    if(e.target.classList.contains("container")) {
        e.target.style.border = "2px solid red"
        e.target.classList.remove("container_shadow") 
    }
  })

  document.addEventListener("drop", (e)=> {
    e.preventDefault();
    if(e.target.classList.contains("container")) {
        dragged.parentNode.removeChild( dragged );
        e.target.appendChild( dragged );
        e.target.style.border = "2px solid red"
    }
  })