const ctxGraphLeft = document.querySelector("#canvas__graph-left");
const ctxGraphCenter = document.querySelector("#canvas__graph-center");
const ctxGraphRight = document.querySelector("#canvas__graph-right");
const ctxMidgraphLeft = document.querySelector("#canvas__midgraph-left");
const ctxMidgraphCenter = document.querySelector("#canvas__midgraph-center");

const bgColorGraph = [
  '#EF6A32',  '#FFF6E9',  '#36A2EB',  '#017351',  '#FBBF45',  '#B1AFFF',
  '#A12A5E',  '#03C383',  '#26294A',  '#AAD962',  '#FF1A68',  '#01545A',
  '#ED0345',  '#710162',  '#110141'
]
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);

//Gráfico 1 Cantidad total de usuarios
fetch('json/df_clean.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot1(data, 'scatter');
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

  new Chart(ctxGraphLeft, {
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

//Gráfico 2 Promedio de ventas por continente
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
  let quant = 0;
  for(const i of dataJson){
    const entry = transformData.find(item => item.continent == i.continent);
    if(entry){
      entry.total+=i.total
      quant =+i;
    }else{
      transformData.push({total: i.total, continent: i.continent})
    }
    const promSale = transformData / quant;
  }

  new Chart(ctxGraphCenter, {
    type: plotType,
    data: {
      labels: transformData.map(row => row.continent),
      datasets: [{
        label: 'Continente',
        data: transformData.map(row => row.total)
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

//Gráfico 3 Gasto total anual (USD), df_clean json file
fetch('json/df_clean.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot3(data, 'doughnut');
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

//Gráfico 4 Segmentos por nivel de cliente
fetch('json/segmentation_df.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot4(data, 'bar');
})
.catch((error) => console.error("Error al cargar datos:", error));

function loadDataPlot4(dataJson, plotType) {
  const labelsPlot = dataJson.map(customer => `${customer.cluster_meaning}`);
  const recencyData = dataJson.map(customer => customer.recency);
  const frequencyData = dataJson.map(customer => customer.frequency);
  const monetaryData = dataJson.map(customer => customer.monetary);

  new Chart(ctxMidgraphLeft, {
    type: plotType,
    data: {
      labels: labelsPlot,
      datasets: [
        {
          label: 'Recency',
          data: recencyData,
          backgroundColor: 'rgba(238, 78, 78, 0.5)',
          borderColor: 'rgba(238, 78, 78, 1)',
          borderWidth: 1
        },
        {
          label: 'Frequency',
          data: frequencyData,
          backgroundColor: 'rgba(255, 199, 0, 0.5)',
          borderColor: 'rgb(255, 199, 1)',
          borderWidth: 1
        },
        {
          label: 'Monetary',
          data: monetaryData,
          backgroundColor: 'rgb(33, 156, 144, 0.5)',
          borderColor: 'rgb(33, 156, 144, 1)',
          borderWidth: 1
        }
    ]
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

//Gráfico 5 Segmentos por continente
fetch('json/rfm_table.json')
.then(function(response){
  if(response.ok === true){
    return response.json();
  }
})
.then(function(data){
  loadDataPlot5(data, 'bar');
})
.catch((error) => console.error("Error al cargar datos:", error));

function loadDataPlot5(dataJson, plotType) {
  const recencyData = dataJson.map(customer => customer.recency);
  const frequencyData = dataJson.map(customer => customer.frequency);
  const monetaryData = dataJson.map(customer => customer.monetary);

  const transformData = [];
  for(const i of dataJson){
    const entry = transformData.find(item => item.continent == i.continent);
    if(entry){
      entry.cluster+=i.cluster
    }else{
      transformData.push({cluster: i.cluster, continent: i.continent})
    }
  }

  new Chart(ctxMidgraphCenter, {
    type: plotType,
    data: {
      labels: transformData.map(row => row.continent),
      datasets: [
        {
          label: 'Recency',
          data: recencyData,
          backgroundColor: 'rgba(6, 208, 1, 0.3)',
          borderColor: 'rgba(6, 208, 1, 0.7)',
          borderWidth: 1
        },
        {
          label: 'Frequency',
          data: frequencyData,
          backgroundColor: 'rgba(175, 71, 210, 0.3)',
          borderColor: 'rgba(175, 71, 210, 1)',
          borderWidth: 1
        },
        {
          label: 'Monetary',
          data: monetaryData,
          backgroundColor: 'rgba(255, 199, 237, 0.3)',
          borderColor: 'rgba(255, 199, 237, 1)',
          borderWidth: 1
        }
    ]
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
