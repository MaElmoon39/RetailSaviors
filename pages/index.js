import { doughnutConfig, barConfig, scatterConfig, polarAreaConfig, radarConfig } from "../js/configsPlots.js";

function updateCharts() {
  document.querySelector('#loadDataButton').addEventListener('click', fetchDfData);
  document.querySelector('#loadDataButton').addEventListener('click', fetchRfmData);
  document.querySelector('#loadDataButton').addEventListener('click', fetchSegmentData);

  //df_clean json file
  async function fetchDfData(){
    const url = 'json/df_clean.json';
    const response = await fetch(url);
    const dfData = await response.json();
    return dfData;
  };

  fetchDfData().then(dfData => {
    const continent = dfData.map(function (index) {
      return index.continent;
    });
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

  ctxGraphRightPlot.data.labels = continent;
  ctxGraphRightPlot.update();
}

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

const ctxGraphCenter = document.querySelector("#canvas__graph-center");
const ctxGraphRight = document.querySelector("#canvas__graph-right");
const ctxMidgraphLeft = document.querySelector("#canvas__midgraph-left");
const ctxMidgraphCenter = document.querySelector("#canvas__midgraph-center");
const ctxBottmLeft = document.querySelector("#canvas__bottm-left");
const ctxBottmCenter = document.querySelector("#canvas__bottm-center");

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'df_clean data',
    data: [18, 12, 6, 9, 12, 3, 9],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)'
    ],
    borderWidth: 1
  }]
};

//Gráfico 1 Promedio de ventas
const ctxGraphCenterPlot = new Chart(ctxGraphCenter, doughnutConfig);

//Gráfico 2 Gasto total anual (USD)
const ctxGraphRightPlot = new Chart(ctxGraphRight, barConfig);

//Gráfico 3 Cantidad total de usuarios
const ctxMidgraphLeftPlot = new Chart(ctxMidgraphLeft, scatterConfig);

//Gráfico 4 Segmentos por región
const ctxMidgraphCenterPlot = new Chart(ctxMidgraphCenter, polarAreaConfig);

//Gráfico 5 Ventas por continente (USD)*** cambiar a choroplet
const ctxBottmLeftPlot = new Chart(ctxBottmLeft, radarConfig);

//Gráfico 6 Segmentos por continente
const ctxBottmCenterPlot = new Chart(ctxBottmCenter, polarAreaConfig);
