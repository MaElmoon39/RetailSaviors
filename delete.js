//Cargar archivo .csv externo
/* document.querySelector('.upload-section__file').addEventListener('change', handleFileUpload);
document.querySelector('.upload-section__btn').addEventListener('click', loadData);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = JSON.parse(e.target.result);
            renderChart(data);
        };
        reader.readAsText(file);
    }
} */

    document.querySelector('#loadDataButton').addEventListener('click', loadData);

    /* function loadData() {
        fetch('data/dataTest.json')
            .then(response => response.json())
            .then(data => renderChart(data))
            .catch(error => console.error('Error al cargar los datos:', error));
    } */

    function loadData() {
      fetch('json/rfm_df.json')
          .then(response => response.json())
          .then(data => renderChart(data))
          .catch(error => console.error('Error al cargar los datos:', error));
    }

    function renderChart(rfmData) {
        const ctx = document.querySelector('canvas').getContext('2d');
        const labels = rfmData.map(customer => `Cliente ${customer.customerID}`);
        const recencyData = rfmData.map(customer => customer.recency);
        const frequencyData = rfmData.map(customer => customer.frequency);
        const monetaryData = rfmData.map(customer => customer.monetary);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Recency',
                        data: recencyData,
                        backgroundColor: 'rgba(0, 51, 0, 1)',
                        borderColor: 'rgba(0, 51, 0, 0.4)',
                        borderWidth: 1
                    },
                    {
                        label: 'Frequency',
                        data: frequencyData,
                        backgroundColor: 'rgba(54, 162, 235, 0.7)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Monetary',
                        data: monetaryData,
                        backgroundColor: 'rgba(255, 128, 76, 1)',
                        borderColor: 'rgba(255, 128, 76, .4)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

/*intento fallido*/
export default function updatedCharts() {
  //df_clean json file
  async function fetchDfData(){
    const url = 'json/df_clean.json';
    const response = await fetch(url);
    const dfData = await response.json();
    return dfData;
  };

  fetchDfData().then(dfData => {
    const continentData = dfData.map(continent => continent.continent);
    const quantityData = dfData.map(quantity => quantity.quantity);

    ctxGraphRightPlot.data.labels = continent;
    ctxGraphRightPlot.data.dataset.data = quantity;
    ctxGraphRightPlot.update();
  });

  //rfm_table json file
  async function fetchRfmData(){
    const url = 'json/rfm_table.json';
    const response = await fetch(url);
    const rfmData = await response.json();
    return rfmData;
  };

  fetchRfmData().then(rfmData => {
    const continent = rfmData.map(function (index) {
      return index.continent;
    });
  });

  //segmentation_df json file
  async function fetchSegmentData(){
    const url = 'json/segmentation_df.json';
    const response = await fetch(url);
    const segmentData = await response.json();
    return segmentData;
  };

  let clusterTagName = fetchSegmentData().then(segmentData => {
    const clusterTag = segmentData.map(function (index) {
      return index.cluster_meaning;
    });
  });

}

//*******************INTENTO FALLIDO 2 */
/*import { doughnutConfig, barConfig, scatterConfig, polarAreaConfig, radarConfig } from "../js/configsPlots.js";

 //rfm_table json file
fetch('json/rfm_table.json')
.then(function(response){
  if(response.ok == true){
    return response.json();
  }
})
.then(function(data) {
  updatedCharts(ctxMidgraphLeft, data, barConfig);
});

//segmentation_df json file
fetch('json/segmentation_df.json')
.then(function(response){
  if(response.ok == true){
    return response.json();
  }
})
.then(function(data) {
  updatedCharts(ctxMidgraphCenter, data, radarConfig);
}); */

//Mapamundi
/* fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
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
}); */

document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);

const ctxGraphCenter = document.querySelector("#canvas__graph-center");
const ctxGraphRight = document.querySelector("#canvas__graph-right");
const ctxMidgraphLeft = document.querySelector("#canvas__midgraph-left");
const ctxMidgraphCenter = document.querySelector("#canvas__midgraph-center");
const ctxBottmLeft = document.querySelector("#canvas__bottm-left");
const ctxBottmCenter = document.querySelector("#canvas__bottm-center");

//df_clean json file
function loadDataDf() {
  fetch('json/df_clean.json')
  .then(function(response){
    if(response.ok == true){
      return response.json();
    }
  })
  .then(data => viewChart(data))
  .catch((error) => console.error("Error al cargar datos:", error));
}

//rfm_table json file
function loadDataRFM() {
  fetch('json/rfm_table.json')
  .then(function(response){
    if(response.ok == true){
      return response.json();
    }
  })
  .then(data => viewChart(data))
  .catch((error) => console.error("Error al cargar datos:", error));
}

//Gráfico 1 Promedio de ventas
const ctxGraphCenterPlot = new Chart(ctxGraphCenter, doughnutConfig);

function loadDataDf() {
  fetch('json/df_clean.json')
  .then(function(response){
    if(response.ok == true){
      return response.json();
    }
  })
  .then((dataInfo) => {
    const continentInfo = Object.keys(dataInfo.continent);
    const totalInfo = dataInfo.map(row => row.total);
    const doughnutConfig = {
      type: 'doughnut',
      data: {
        labels: continentInfo,
        datasets: [{
          label: 'Continente',
          data: totalInfo,
          backgroundColor: [
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

      ],
      borderColor: [
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
      ],
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
    };

    const promVentas = new Chart(ctxGraphCenter, doughnutConfig);
    return promVentas;
  }
)
  .catch((error) => console.error("Error al cargar datos:", error));
}

//Gráfico 2 Gasto total anual (USD)

function viewChart(dataJson) {
  new Chart(ctxGraphRight, {
    type: 'bar',
    data: {
      labels: dataJson.map(row => row.continent),
      datasets: [{
        label: 'Continente',
        data: dataJson.map(row => row.total),
        backgroundColor: [
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

    ],
    borderColor: [
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
    ],
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
const ctxMidgraphLeftPlot = new Chart(ctxMidgraphLeft, scatterConfig);

//Gráfico 4 Segmentos por región
const ctxMidgraphCenterPlot = new Chart(ctxMidgraphCenter, polarAreaConfig);

//Gráfico 5 Ventas por continente (USD)*** cambiar a choroplet
const ctxBottmLeftPlot = new Chart(ctxBottmLeft, radarConfig);

//Gráfico 6 Segmentos por continente
const ctxBottmCenterPlot = new Chart(ctxBottmCenter, polarAreaConfig);
