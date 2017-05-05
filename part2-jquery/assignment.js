// Define a function named hasClass that takes in two arguments.
//   element   (Any DOM element)
//   className (String)
//
// The function will return true if the element has the specified className CSS
// class applied.
function hasClass(element, className) {
  return $(element).hasClass(className);
}


// Define a function named toggleVisible that takes in one argument.
//   div (<div> DOM element)
//
// The function will add the 'visible' class to the div if it does not currently
// have it. It removes the class if it already exists.

function toggleVisible(div) {
    return $(div).toggleClass("visible");

}

// .toggle( display )
// display
// Type: Boolean
// Use true to show the element or false to hide it.
// Define a function named hideConfidentialText that takes in one argument.
//   article (<article> DOM element)
// Assume the article contains at least one paragraph.
//
// The function will hide any child paragraphs of article if anywhere the text contains
// "CONFIDENTIAL"
function hideConfidentialText(article) {
  $(article).children("p:contains('CONFIDENTIAL')").hide();
}

//$( "div:contains('John')" ).css( "text-decoration", "underline" );

// Define a function named checkAll that takes in one argument
//   checkbox (<input type="checkbox"> DOM element).
//
// The function will mark all sibling checkboxes, of the input checkbox, as "checked" if the input checkbox
// is marked as "checked".

function checkAll(checkbox) {
  if ($(checkbox).is(":checked")) {
   return $(checkbox).siblings().prop('checked', true);
  }
}

// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise.

function updateTodoList(todoList) {
  $(todoList).children("li:contains('COMPLETED')").remove();
  $(todoList).children("li:contains('URGENT')").addClass(  'important');

  // attr('style', function(i,s) { return s + '!important;' });
}


// Define a function named createList that takes one argument.
//   sites (object)
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
// var object = ({
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//    });
function createList(sites) {
  let returnedUl = $("<ul>");

  if (sites.length !==0) {
    for (let site in sites) {
      //TEST TO SEE IF ALSO WORKS
      // var a = $('<a>').attr('href', sites[site]).attr('text', site);
      // let li = $('<li>').attr('text', a);
      var a = $('<a>').attr('href', sites[site]).text(site);
      let li = $("<li>");

      a.appendTo(li);


      //alt implementation -DOES NOT WORK
      //$('<a>').attr('href', sites[site]).text(site).appendTo(li);


      // let li = $('<li>').attr('html', $('<a>')).attr('href', sites[site]).attr('innerText', site);
      li.appendTo(returnedUl);
    }
  }
    //console.log('a', a, 'ul list', returnedUl);
return returnedUl[0];
}


// clipboard
// $("#header ul").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');


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

function extractQuote(articleTag) {
  let blockQ = $('<blockquote>');
  if ($(articleTag).children("p:contains(\")").text()) {
    var text = $(articleTag).children("p:contains(\")").text();
    // console.log(text, 'text.text', text.text);
    let quotedText = text.slice(text.indexOf('"'), text.lastIndexOf('"') + 1);

    $(articleTag).children('p:contains(\")').remove();
    blockQ.text(quotedText);
    blockQ.appendTo(articleTag);
    //console.log(articleTag);
  }

  return articleTag;
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
   let tableData = data.slice();
   let header = tableData.shift();
   let footer = tableData.pop();

   var table = $('<table>');
   var thead = $('<thead>');
   $(table).append(thead);


   //$(thead).append(tr);


  
   let trHead = $('<tr>')

  //  console.log(header, tableData, footer);
  //  thead.append(tr);

   trHead.appendTo($(thead));
   //set up table head

   for (var i = 0; i < header.length; i++) {
     var tr = $('<tr>');
    //  $(trHead).append($(th));
    //  th.text(header[i]);
    //  $(tr).appendTo(th);

     let th = $('<th>')
     th.appendTo(trHead);
     th.text(header[i]);
   }
   let tbody = $('<tbody>');
   $(table).append(tbody);
   //set up table body
   for (var i = 0; i < tableData.length; i++) {
     let tr = $('<tr>');

     $(tbody).append($(tr));

     console.log(tableData[i]);
     for (var j = 0; j < tableData[i].length; j++) {
       var td = $('<td>');
       td.text(tableData[i][j]);
       $(td).appendTo(tr);
       //console.log(tableData[i][ii], "happens");

     }
   }

  //  $.each(tableData, (idx, elem) => {
  //     tr.append(td);
  //     td.text(elem);
  //  })

   //set up footer
   let tfoot = $('<tfoot>')
   table.append(tfoot);
   let trFoot = $('<tr>')
   trFoot.appendTo($(tfoot));
   console.log('footer', footer);
   for (var i = 0; i < footer.length; i++) {
     let td = $('<td>')
     td.appendTo(trFoot);
     td.text(footer[i]);

   }


   console.log(table[0]);
   return table[0];
}

// function createTable(data) {
//    let tableData = data.slice();
//    let header = tableData.shift();
//    let footer = tableData.pop();
//
//    var table = $('<table>');
//    var thead = $('<thead>');
//    $(table).append(thead);
//
//
//    $(thead).append(tr);
//
//
//    let th = $('<th>');
//
//
//   //  console.log(header, tableData, footer);
//   //  thead.append(tr);
//
//   th.appendTo($(thead));
//    //set up table head
//    for (var i = 0; i < header.length; i++) {
//      var tr = $('<tr>');
//
//      tr.text(header[i]);
//      $(tr).appendTo(th);
//
//    }
//
//
//    let tbody = $('<tbody>');
//    $(table).append(tbody);
//
//    //set up table body
//    for (var i = 0; i < tableData.length; i++) {
//      var tr = $('<tr>');
//
//      $(tbody).append($(tr));
//
//      console.log(tableData[i]);
//      for (var j = 0; j < tableData[i].length; j++) {
//        var td = $('<td>');
//        td.text(tableData[i][j]);
//        $(td).appendTo(tr);
//        //console.log(tableData[i][ii], "happens");
//      }
//    }
//    tr.appendTo($(tbody));
//   //  $.each(tableData, (idx, elem) => {
//   //     tr.append(td);
//   //     td.text(elem);
//   //  })
//
//    //set up footer
//    let tfoot = $('<tfoot>')
//    table.append(tfoot);
//    let trfoot = $('<tr>')
//    tr.appendTo($(tfoot));
//    console.log('footer', footer);
//    for (var i = 0; i < footer.length; i++) {
//      let td = $('<td>')
//      td.appendTo(trfoot);
//      td.text(footer[i]);
//
//    }
//
//
//    console.log(table[0]);
//    return table[0];
// }
