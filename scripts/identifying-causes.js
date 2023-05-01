let labels3 = [
    'Yes', 
    'No'
];

let itemData3 = [
    39.27, 
    60.73
];

let barColors3 = [
    'rgb(82, 98, 104)',
    'rgb(18, 176, 218)'
];

const data3 = {
    labels: labels3,
    datasets: [{
        data: itemData3,
        backgroundColor: barColors3
    }]
};

const config3 = {
    type: 'pie',
    data: data3,
    options: {
        plugins: {
            title: {
                display: true,
                text: "I have trouble identifying what I care about and deciding what to donate to"
            }
        }
    }
};

const chart3 = new Chart(
    document.getElementById('personalized1'),
    config3
);