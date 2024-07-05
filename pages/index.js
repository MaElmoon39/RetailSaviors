const ctxGraphCenter = document.querySelector("#canvas__graph-center");
const ctxGraphRight = document.querySelector("#canvas__graph-right");
const ctxMidgraphLeft = document.querySelector("#canvas__midgraph-left");
const ctxMidgraphCenter = document.querySelector("#canvas__midgraph-center");
const ctxBottmLeft = document.querySelector("#canvas__bottm-left");
const ctxBottmCenter = document.querySelector("#canvas__bottm-center");

const bgColorGraph = [
  '#EF6A32',
  '#FFF6E9',
  '#36A2EB',
  '#017351',
  '#FBBF45',
  '#B1AFFF',
  '#A12A5E',
  '#03C383',
  '#26294A',
  '#AAD962',
  '#FF1A68',
  '#01545A',
  '#ED0345',
  '#710162',
  '#110141'
]
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);

//Gráfico 1 Promedio de ventas por continente
fetch('json/df_clean.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot1(data, 'doughnut');
})
.catch((error) => console.error("Error al cargar datos:", error));

function loadDataPlot1(dataJson, plotType) {

  const transformData = [];
  for(const i of dataJson){
    const entry = transformData.find(item => item.continent == i.continent);
    if(entry){
      entry.total+=i.total
    }else{
      transformData.push({total: i.total, continent: i.continent})
    }
  }

  new Chart(ctxGraphCenter, {
    type: plotType,
    data: {
      labels: transformData.map(row => row.continent),
      datasets: [{
        label: 'Continente',
        data: transformData.map(row => row.total),
        backgroundColor: bgColorGraph,
        borderColor: bgColorGraph,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }},
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//Gráfico 2 Gasto total anual (USD), df_clean json file
fetch('json/df_clean.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot2(data, 'doughnut');
})
.catch((error) => console.error("Error al cargar datos:", error));

function loadDataPlot2(dataJson, plotType) {

  const transformData = [];
  for(const i of dataJson){
    const entry = transformData.find(item => item.continent == i.continent);
    if(entry){
      entry.total+=i.total
    }else{
      transformData.push({total: i.total, continent: i.continent})
    }
  }

  new Chart(ctxGraphRight, {
    type: plotType,
    data: {
      labels: transformData.map(row => row.continent),
      datasets: [{
        label: 'Continente',
        data: transformData.map(row => row.total),
        backgroundColor: bgColorGraph,
        borderColor: bgColorGraph,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }},
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//Gráfico 3 Cantidad total de usuarios
fetch('json/df_clean.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot3(data, 'scatter');
})
.catch((error) => console.error("Error al cargar datos:", error));

function loadDataPlot3(dataJson, plotType) {

  const transformData = [];
  for(const i of dataJson){
    const entry = transformData.find(item => item.continent == i.continent);
    if(entry){
      entry.total+=i.total
    }else{
      transformData.push({total: i.total, continent: i.continent})
    }
  }

  new Chart(ctxMidgraphLeft, {
    type: plotType,
    data: {
      labels: transformData.map(row => row.continent),
      datasets: [{
        label: 'Continente',
        data: transformData.map(row => row.total),
        backgroundColor: bgColorGraph,
        borderColor: bgColorGraph,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }},
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//Gráfico 4 Segmentos por región
fetch('json/df_clean.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot4(data, 'polarArea');
})
.catch((error) => console.error("Error al cargar datos:", error));

function loadDataPlot4(dataJson, plotType) {

  const transformData = [];
  for(const i of dataJson){
    const entry = transformData.find(item => item.continent == i.continent);
    if(entry){
      entry.total+=i.total
    }else{
      transformData.push({total: i.total, continent: i.continent})
    }
  }

  new Chart(ctxMidgraphCenter, {
    type: plotType,
    data: {
      labels: transformData.map(row => row.continent),
      datasets: [{
        label: 'Continente',
        data: transformData.map(row => row.total),
        backgroundColor: bgColorGraph,
        borderColor: bgColorGraph,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }},
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

//Gráfico 5 Ventas por continente (USD)*** cambiar a choroplet


//Gráfico 6 Segmentos por continente
fetch('json/df_clean.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot6(data, 'polarArea');
})
.catch((error) => console.error("Error al cargar datos:", error));

function loadDataPlot6(dataJson, plotType) {

  const transformData = [];
  for(const i of dataJson){
    const entry = transformData.find(item => item.continent == i.continent);
    if(entry){
      entry.total+=i.total
    }else{
      transformData.push({total: i.total, continent: i.continent})
    }
  }

  new Chart(ctxBottmCenter, {
    type: plotType,
    data: {
      labels: transformData.map(row => row.continent),
      datasets: [{
        label: 'Continente',
        data: transformData.map(row => row.total),
        backgroundColor: bgColorGraph,
        borderColor: bgColorGraph,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }},
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}