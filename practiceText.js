function textEditor(queries) {
    const result = [], select = []
    let str = "", cursor = 0, clipboard = ""
  
    for (let query of queries) {
      query.length === 3 ? [command, start, finish] = query : [command, action] = query
  
      if (command === "APPEND") {
        //add this if once select is reached
        if (select.length) {
          [left, right] = select.pop()
          let firstHalf = str.substring(0, left) + action
          result.push(firstHalf + " " + str.substring(right).replace(/\s{2,}/g, ' ').trim())
          str = firstHalf + " " + str.substring(right).trim()
        } else if (cursor < str.length) {
          //at first, this elif is an if
          let firstHalf = str.substring(0, cursor) + action
          cursor = firstHalf.length
          result.push(firstHalf + " " + str.substring(cursor).replace(/\s{2,}/g, ' ').trim())
        } else {
          cursor += action.length
          str += action
          result.push(str)
        }
      }
      // MOVE <position> should move the cursor to the specified position. The cursor should be positioned between document characters, and are enumerated sequentially starting from 0. If the specified position is out of bounds, then move the cursor to the nearest available position.
      if (command === "MOVE") {
        if (action > cursor) {
          cursor = str.length
        } else {
          cursor = action
        }
        result.push(str)
      }
      if (command === "DELETE") {
        if (select.length) {
          //add this if after select
          [left, right] = select.pop()
          if (right > str.length) {
            result.push(str.substring(0, left) + str.substring(left, str.length))
            str = str.substring(0, left) + str.substring(left, str.length)
          } else {
            result.push(str.substring(0, left) + str.substring(right))
            str = str.substring(0, left) + str.substring(right)
          }
        } else if (cursor === str.length) {
          //add this after select
          result.push(str)
        } else {
          result.push(str.replace(str.substring(Number(cursor), Number(cursor) + 1), ""))
          console.log(str.replace(str.substring(Number(cursor), Number(cursor) + 1), ""))
        }
      }
      // SELECT <left> <right> should select the text between the left and right cursor positions. Selection borders should be returned to the bounds of the document. If the selection is empty, it becomes a cursor position. Any modification operation replace the selected text and places the cursor at the end of the modified segment.
      if (command === "SELECT") {
        select.push([start, finish])
        result.push(str)
      }
      /* 5. CUT should remove the selected text and save it to the clipboard, if there is an active non-empty selection.
      6. PASTE should append the text from the clipboard. The current selected text (if any) remains selected after the operation. */
      if (command === 'CUT') {
        if (select.length) {
          [left, right] = select.pop()
          clipboard += str.substring(left, right)
          str = str.substring(0, left) + str.substring(right)
          result.push(str)
        }
      }
      if (command === 'PASTE') {
        if (cursor !== str.length) {
          let pasting = str.substring(0, cursor) + clipboard + str.substring(cursor)
          str = pasting
          result.push(str)
        }
      }
      //7. UNDO should restore the document to the state before the previous modification or REDO operation. The selection and cursor position should be also restored.
      if (command === 'UNDO') { }
      //8. REDO can only be performed if the document has not been modified since the last UNDO operation. REDO should restore the state before the previous UNDO operation, including the selection and cursor position. Multiple UNDO and REDO operations can be performed in a row.
      if (command === 'REDO') { }
    }
    return result
  }
  