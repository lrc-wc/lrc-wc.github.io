// ref:  https://plotly.com/javascript/table/

Plotly.d3.csv('lake_hour_prev3day.csv', function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

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
  line: {color: 'black'}
}

var trace6 = {
  type: "scatter",
  mode: "lines",
  name: 'POYGAN*',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'POYGAN*'),
  line: {color: 'purple'}
}

var data = [trace1,trace2,trace3,trace4,trace5,trace6];
  
var layout = {
  title: 'Lake Winnebago Water Levels',
    xaxis: {
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    autotick: false,
    range: [1.5, 4],
    ticks: 'outside',
    tick0: 1.5,
    dtick: 0.5,
    ticklen: 6,
    tickwidth: 2,
    title: 'Oshkosh Datum (ft)'
    }
};
Plotly.newPlot('lakeplot', data, layout);
})

Plotly.d3.csv('flowosh_hour_prev3day.csv', function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace7 = {
  type: "scatter",
  mode: "lines",
  name: 'OSHKOSH',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'OSHKOSH'),
  line: {color: 'magenta'}
}

var data = [trace7];
  
var layout = {
  title: 'Fox River at Oshkosh',
    xaxis: {
    autotick: true,
    },
    yaxis: {
    autotick: true,
    title: 'flow (cfs)'
    }
};
Plotly.newPlot('oshkoshplot', data, layout);
})