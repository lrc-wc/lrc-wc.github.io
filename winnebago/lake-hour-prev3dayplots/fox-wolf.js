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
  xaxis: {
    'x1',
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    'y1',
    autotick: false,
    range: [1.5, 4],
    ticks: 'outside',
    tick0: 1.5,
    dtick: 0.5,
    ticklen: 6,
    tickwidth: 2,
    title: 'Oshkosh Datum (ft)'
    }
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'STOCKBRIDGE',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'STOCKBRIDGE'),
  line: {color: 'orange'}
  xaxis: {
    'x1',
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    'y1',
    autotick: false,
    range: [1.5, 4],
    ticks: 'outside',
    tick0: 1.5,
    dtick: 0.5,
    ticklen: 6,
    tickwidth: 2,
    title: 'Oshkosh Datum (ft)'
    }
}

var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'FOND DU LAC',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'FOND DU LAC'),
  line: {color: 'blue'}
  xaxis: {
    'x1',
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    'y1',
    autotick: false,
    range: [1.5, 4],
    ticks: 'outside',
    tick0: 1.5,
    dtick: 0.5,
    ticklen: 6,
    tickwidth: 2,
    title: 'Oshkosh Datum (ft)'
    }
}

var trace4 = {
  type: "scatter",
  mode: "lines",
  name: 'MENASHA',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'MENASHA'),
  line: {color: 'green'}
  xaxis: {
    'x1',
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    'y1',
    autotick: false,
    range: [1.5, 4],
    ticks: 'outside',
    tick0: 1.5,
    dtick: 0.5,
    ticklen: 6,
    tickwidth: 2,
    title: 'Oshkosh Datum (ft)'
    }
}

var trace5 = {
  type: "scatter",
  mode: "lines",
  name: 'Average',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Average'),
  line: {color: 'black'}
  xaxis: {
    'x1',
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    'y1',
    autotick: false,
    range: [1.5, 4],
    ticks: 'outside',
    tick0: 1.5,
    dtick: 0.5,
    ticklen: 6,
    tickwidth: 2,
    title: 'Oshkosh Datum (ft)'
    }
}

var trace6 = {
  type: "scatter",
  mode: "lines",
  name: 'POYGAN*',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'POYGAN*'),
  line: {color: 'purple'}
  xaxis: {
    'x1',
    autotick: false,
    ticks: 'outside',
    tick0: 0.0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    'y1',
    autotick: false,
    range: [1.5, 4],
    ticks: 'outside',
    tick0: 1.5,
    dtick: 0.5,
    ticklen: 6,
    tickwidth: 2,
    title: 'Oshkosh Datum (ft)'
    }
}

var trace7 = {
  'x2',
  type: "scatter",
  mode: "lines",
  name: 'OSHKOSH',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'OSHKOSH'),
  line: {color: 'darkblue'}
  xaxis: {
    autotick: false,
    ticks: 'outside',
    tick0: 0,
    dtick: 12.0,
    ticklen: 6,
    tickwidth: 2
    },
    yaxis: {
    'y2',
    autotick: false,
    ticks: 'outside',
    dtick: 500,
    ticklen: 6,
    tickwidth: 2,
    title: 'flow (cfs)'
    }
}

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

var layout = {
  title: 'Fox River at Oshkosh',
  grid: {
      rows: 2,
      columns: 1,
      pattern: 'indpendent'
      roworder: 'top to bottom'
  }

    };
var config = {responsive: true};

Plotly.newPlot('oshkoshplot', data, layout, config);
