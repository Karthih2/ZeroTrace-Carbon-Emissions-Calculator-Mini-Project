async function fetchData() {
    const response = await fetch('/api/emissions_by_year');
    const data = await response.json();

    const years = data.map(item => item.year);
    const emissions = data.map(item => item.total_emissions);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // You can change this to 'bar', 'pie', etc.
        data: {
            labels: years,
            datasets: [{
                label: 'Total Emissions',
                data: emissions,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

fetchData();
