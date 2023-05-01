let labels4 = [
    'Yes', 
    'No'
];

let itemData4 = [
    21.5, 
    79.5
];

let barColors4 = [
    'rgb(82, 98, 104)',
    'rgb(18, 176, 218)'
];

const data4 = {
    labels: labels4,
    datasets: [{
        data: itemData4,
        backgroundColor: barColors4
    }]
};

const config4 = {
    type: 'pie',
    data: data4,
    options: {
        plugins: {
            title: {
                display: true,
                text: "I want to know more about finding the right volunteer opportunities for me"
            }
        }
    }
};

const chart4 = new Chart(
    document.getElementById('personalized2'),
    config4
);