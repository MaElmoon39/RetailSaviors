const ctxGraphCenter = document.querySelector("#canvas__graph-center");
const ctxGraphRight = document.querySelector("#canvas__graph-right");
const ctxMidgraphLeft = document.querySelector("#canvas__midgraph-left");
const ctxMidgraphCenter = document.querySelector("#canvas__midgraph-center");
const ctxBottmLeft = document.querySelector("#canvas__bottm-left");
const ctxBottmCenter = document.querySelector("#canvas__bottm-center");

//Gráfico 1 Promedio de ventas
new Chart(ctxGraphCenter, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//Gráfico 2 Gasto total anual (USD)
new Chart(ctxGraphRight, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//Gráfico 3 Cantidad total de usuarios
new Chart(ctxMidgraphLeft, {
  type: 'scatter',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: ''
      }
    }
  }
});

//Gráfico 4 Segmentos por región
new Chart(ctxMidgraphCenter, {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//Gráfico 5 Ventas por continente (USD)
new Chart(ctxBottmLeft, {
  type: 'radar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//Mapamundi
fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
  const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

const chart = new Chart(ctxBottmLeft.getContext("2d"), {
type: 'choropleth',
data: {
  labels: countries.map((d) => d.properties.name),
  datasets: [{
    label: 'Countries',
    data: countries.map((d) => ({feature: d, value: Math.random()})),
  }]
},
options: {
  showOutline: true,
  showGraticule: true,
  plugins: {
    legend: {
      display: false
    },
  },
  scales: {
    projection: {
      axis: 'x',
      projection: 'equalEarth'
    }
  }
}
});
});

//Gráfico 6 Segmentos por continente
new Chart(ctxBottmCenter, {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});