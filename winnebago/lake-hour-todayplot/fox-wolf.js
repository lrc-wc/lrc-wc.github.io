// ref:  https://plotly.com/javascript/table/

Plotly.d3.csv('lake_hour_prev3day.csv', function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var w = 800;
var h = 400;
var padding = 20;
var border=1;
var bordercolor='black';  
    
var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'OSHKOSH',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'OSHKOSH'),
  line: {color: 'red'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'STOCKBRIDGE',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'STOCKBRIDGE'),
  line: {color: 'orange'}
}

var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'FOND DU LAC',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'FOND DU LAC'),
  line: {color: 'blue'}
}

var trace4 = {
  type: "scatter",
  mode: "lines",
  name: 'MENASHA',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'MENASHA'),
  line: {color: 'green'}
}

var trace5 = {
  type: "scatter",
  mode: "lines",
  name: 'Average',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Average'),
  line: {color: 'cyan'}
}

var trace6 = {
  type: "scatter",
  mode: "lines",
  name: 'Poygan*',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Poygan*'),
  line: {color: 'purple'}
}

var data = [trace1,trace2,trace3,trace4,trace5,trace6];

var layout = {
  title: 'Water Levels on Lake Winnebago',
};

Plotly.newPlot('lakeplot', data, layout);
})
