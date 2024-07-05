const ctxGraphCenter = document.querySelector("#canvas__graph-center");
const ctxGraphRight = document.querySelector("#canvas__graph-right");
const ctxMidgraphLeft = document.querySelector("#canvas__midgraph-left");
const ctxMidgraphCenter = document.querySelector("#canvas__midgraph-center");
const ctxBottmLeft = document.querySelector("#canvas__bottm-left");
const ctxBottmCenter = document.querySelector("#canvas__bottm-center");

document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);
//document.querySelector('#loadDataButton').addEventListener('click', loadDataDf);

//df_clean json file
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

//rfm_table json file
/* function loadDataRFM() {
  fetch('json/rfm_table.json')
  .then(function(response){
    if(response.ok == true){
      return response.json();
    }
  })
  .then(data => viewChart(data))
  .catch((error) => console.error("Error al cargar datos:", error));
} */

//Gráfico 1 Promedio de ventas por continente


//Gráfico 2 Gasto total anual (USD)


//Gráfico 3 Cantidad total de usuarios


//Gráfico 4 Segmentos por región


//Gráfico 5 Ventas por continente (USD)*** cambiar a choroplet


//Gráfico 6 Segmentos por continente
