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

function createTable(data) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');
    let tdata = document.createElement('td');
    table.append(thead);
    thead.append(tableRow);
    for (var i = 0; i < data[0].length; i++) {
      var row = document.createElement('th');
      tableRow.append(row);
      row.innerText = data[0][i];
    };
    //handle table data minues tr's and tfoot
    for (var i = 1; i < data.length - 1; i++1 {
      for (var ii = 0; ii < data[i].length; ii++) {
        data[i][ii]
      }
    }


}
