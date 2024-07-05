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

const doughnutConfig = {
  type: 'doughnut',
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