let labels = [
    '1', 
    '2', 
    '3', 
    '4',
    '5',
    '6',
    '7',
    '8',
    '10',
    '11',
    '12',
    '18',
    '20',
    '30+'
];

let itemData = [
    13, 
    6, 
    7, 
    4,
    1,
    5,
    1,
    3,
    2,
    1,
    2,
    1,
    1,
    5
];

let barColors = [
    'rgb(18, 176, 218)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)'
]

const data = {
    labels: labels,
    datasets: [{
        data: itemData,
        backgroundColor: barColors
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Number of Times People Have Donated in the Last Six Months'
            }
        }
    }
};

const chart = new Chart(
    document.getElementById('vertBarChart'),
    config
);