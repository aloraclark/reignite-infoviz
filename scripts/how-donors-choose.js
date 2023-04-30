const data1 = {
    //5, 6, 7, 8, 9, 1, 2, 3, 4
    labels: [
        'Neutral',
        'Slightly Important',
        'Moderately Important',
        'Very Important',
        'Extremely Important',
        'Not Important at All',
        'Of Little Importance',
        'Moderately Unimportant',
        'Slightly Unimportant'
    ],
    datasets: [{
        label: 'Age',
        data: [11, 9, 2, 3, 3, 8, 6, 4, 6],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Social Medeia Presence',
        data: [4, 12, 3, 4, 11, 12, 12, 2, 5],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const config1 = {
    type: 'radar',
    data: data1,
    options: {
        elements: {
        line: {
            borderWidth: 3
        }
        }
    },
};

const chart1 = new Chart(
    document.getElementById('radarChart'),
    config1
);