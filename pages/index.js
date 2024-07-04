import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

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

function loadData() {
    fetch('data/dataTest.json')
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