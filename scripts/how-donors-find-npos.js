let labels2 = [
    'Social Media', 
    'Family or Friends', 
    'Personal or Professional Affiliation', 
    'Online Research',
    'Other'
];

let itemData2 = [
    11, 
    21, 
    35, 
    15,
    11,
];

let barColors2 = [
    'rgb(82, 98, 104)',
    'rgb(18, 176, 218)',
    'rgb(18, 176, 218)',
    'rgb(82, 98, 104)',
    'rgb(82, 98, 104)',
]

const data2 = {
    labels: labels2,
    datasets: [{
        data: itemData2,
        backgroundColor: barColors2
    }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Means Through Which People Find NPOs'
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                title: {
                  display: true,
                  text: '# of People'
                }
            }
        }
    }
};

const chart2 = new Chart(
    document.getElementById('horizBarChart'),
    config2
);