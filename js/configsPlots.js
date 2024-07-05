const barConfig = {
  type: 'bar',
  data,
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

const scatterConfig = {
  type: 'scatter',
  data,
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
};

const polarAreaConfig = {
  type: 'polarArea',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const radarConfig = {
  type: 'radar',
  data,
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

export {doughnutConfig, barConfig, scatterConfig, polarAreaConfig, radarConfig}