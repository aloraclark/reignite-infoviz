let labels5 = [
    'Yes', 
    'No'
];

let itemData5 = [
    17.5, 
    83.5
];

let barColors5 = [
    'rgb(82, 98, 104)',
    'rgb(18, 176, 218)'
];

const data5 = {
    labels: labels5,
    datasets: [{
        data: itemData5,
        backgroundColor: barColors5
    }]
};

const config5 = {
    type: 'pie',
    data: data5,
    options: {
        plugins: {
            title: {
                display: true,
                text: "I want to know more about how to make donating apart of my yearly budget"
            }
        }
    }
};

const chart5 = new Chart(
    document.getElementById('personalized3'),
    config5
);