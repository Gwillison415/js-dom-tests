function createTable(data) {
  var bodyData = data.slice();      // array of arrays
  var headData = bodyData.shift();  // one array
  var footData = bodyData.pop();    // one array

  var table = document.createElement('table');

  // Table head
  var thead = document.createElement('thead');
  table.append(thead);
  var tr = document.createElement('tr');
  thead.append(tr);
  for (let col = 0; col < headData.length; col++) {
    var th = document.createElement('th');
    tr.append(th);
    th.innerText = headData[col];
  }

  // Table body
  var tbody = document.createElement('tbody');
  table.append(tbody);
  for (let row = 0; row < bodyData.length; row++) {
    let tr = document.createElement('tr');
    tbody.append(tr);
    for (let col = 0; col < bodyData[row].length; col++) {
      let td = document.createElement('td');
      tr.append(td);
      td.innerText = bodyData[row][col];
    }
  }

  // Table foot
  var tfoot = document.createElement('tfoot');
  table.append(tfoot);
  var tr = document.createElement('tr');
  tfoot.append(tr);
  for (let col = 0; col < footData.length; col++) {
    var td = document.createElement('td');
    tr.append(td);
    td.innerText = footData[col];
  }
  return table;
}
