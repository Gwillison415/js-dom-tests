// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  return document.createElement('div');
}



// Define a function named createDivWithClass that takes one argument.
//   className (string)
//
// Return a <div> element with the given className.
function createDivWithClass(string) {
    var newRow = document.createElement("div");
    newRow.setAttribute("class", string);
    return newRow;
}



// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise

function updateTodoList(todoList) {
    let taskStatus = todoList.children
    for (var i = 0; i < taskStatus.length; i++) {
            if (todoList.children[i].innerText.startsWith('COMPLETED')) {
              todoList.children[i].remove();
            } else if (todoList.children[i].innerText.startsWith("URGENT")) {
              todoList.children[i].className += ' important';
            }
      }
    }



// Define a function named createList that takes one argument.
//   createList (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>

function createList(object) {
    let returnedUl = document.createElement("ul");
    for (let key in object) {
      let liElem = document.createElement('li');
      let aTags= document.createElement('a');
      // if (key.hasChildNodes("a")) {
      //     console.log(returnedUl.createElement('li'));
      // }
      aTags.text = key;
      aTags.href = object[key];
      liElem.text = aTags;
      liElem.appendChild(aTags);
      returnedUl.appendChild(liElem);
    }
    return returnedUl;
}


// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.

function extractQuote(article) {

    let nestedElement = article.querySelectorAll('p');

    // console.log(nestedElement);
    // console.log(nestedElement[0].innerText);
    if (nestedElement[0].innerText.includes('"')) {
      let quotedText = nestedElement[0].innerText.slice(nestedElement[0].innerText.indexOf('"'), nestedElement[0].innerText.lastIndexOf('"') + 1);
      let blockQuote = document.createElement('BLOCKQUOTE');

      blockQuote.innerText = quotedText;
      nestedElement[0].remove('p'); //createTable is not defined
      article.append(blockQuote);


      //return quotedText;
    }


 }

// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.
// non working copy
function createTable(data) {
   var tableData = data.slice();
    var headData = tableData.shift();
    var footerData = tableData.pop();

    var table = document.createElement('table');
    //Table Head
    var thead = document.createElement('thead');
    table.append(thead);
    var tr = document.createElement('tr');
    thead.append(tr);
    //console.log(data[0],'data length', data.length);

    //handle table heads
    for (let i = 0; i < headData.length; i++) {
      var th = document.createElement('th');
      tr.append(th);
      //console.log(headData[i]);
      th.innerText = headData[i];
    }

    var tbody = document.createElement('tbody');




    //handle table data minues tr's and tfoot
    table.append(tbody);
    for (let i = 0; i < tableData.length; i++) {
      let tr = document.createElement('tr');
      tbody.append(tr);
      for (let ii = 0; ii < tableData[i].length; ii++) {
        let tdata = document.createElement('td');
        //tbody.append(tr);   ----was different, doesn't seem to have effect on layout
        tr.append(tdata);
        //console.log(tableData[i][ii]);
        tdata.innerText = tableData[i][ii]; // each inner loop
      }
    }
    //foot of the table

  var tfooter = document.createElement('tfoot');
  table.append(tfooter);
  var tr = document.createElement('tr');
  tfooter.append(tr);
  //console.log(footerData);
  for (let column = 0; column < footerData.length; column++) {
    var td = document.createElement('td');
    tr.append(td);
    td.innerText = footerData[column];
  }
  console.log(table);
    return table;

}








//working copy
// function createTable(data) {
//   var bodyData = data.slice();      // array of arrays
//   var headData = bodyData.shift();  // one array
//   var footData = bodyData.pop();    // one array
//
//   var table = document.createElement('table');
//
//   // Table head
//   var thead = document.createElement('thead');
//   table.append(thead);
//   var tr = document.createElement('tr');
//   thead.append(tr);
//   for (let col = 0; col < headData.length; col++) {
//     var th = document.createElement('th');
//     tr.append(th);
//     th.innerText = headData[col];
//   }
//
//   // Table body
//   var tbody = document.createElement('tbody');
//   table.append(tbody);
//   for (let row = 0; row < bodyData.length; row++) {
//     let tr = document.createElement('tr');
//     tbody.append(tr);
//     for (let col = 0; col < bodyData[row].length; col++) {
//       let td = document.createElement('td');
//       tr.append(td);
//       td.innerText = bodyData[row][col];
//     }
//   }
//
//   // Table foot
//   var tfoot = document.createElement('tfoot');
//   table.append(tfoot);
//   var tr = document.createElement('tr');
//   tfoot.append(tr);
//   for (let col = 0; col < footData.length; col++) {
//     var td = document.createElement('td');
//     tr.append(td);
//     td.innerText = footData[col];
//   }
//   return table;
// }
