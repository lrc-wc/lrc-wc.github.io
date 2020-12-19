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
  autosize: true,
  width: 1600,
  height: 500,
  margin: {
    l: 110,
    r: 50,
    b: 30,
    t: 25,
    pad: 4},
  title: 'Lake Winnebago Water Levels',
    xaxis: {
    linecolor: 'darkgray',
    linewidth: 2,
    mirror: true, 
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    tickformat: '0.1f',
    linecolor: 'darkgray',
    linewidth: 2,
    mirror: true,
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

var config = {responsive: true};

Plotly.newPlot('lakeplot', data, layout, config);
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
  line: {color: 'darkblue'}
}

var data = [trace7];
  
var layout = {
  autosize: true,
  width: 1600,
  height: 500,
  margin: {
    l: 100,
    r: 50,
    b: 30,
    t: 25,
    pad: 4},
  title: 'Fox River at Oshkosh',
  showlegend: true,
    xaxis: {
      linecolor: 'darkgray',
      linewidth: 2,
      mirror: true,
      autotick: false,
      ticks: 'outside',
      tick0: 0.0,
      dtick: 12.0,
      ticklen: 6,
      tickwidth: 2
    },
    yaxis: {
      tickformat: ',',
      linecolor: 'darkgray',
      linewidth: 2,
      mirror: true,
      autotick: false,
      ticks: 'outside',
      dtick: 500,
      ticklen: 6,
      tickwidth: 2,
      title: 'flow (cfs)'
    }
};

var config = {responsive: true}

Plotly.newPlot('oshkoshplot', data, layout, config);
})
