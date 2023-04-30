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
        backgroundColor: 'rgba(239, 90, 152, 0.2)',
        borderColor: 'rgb(239, 90, 152)',
        pointBackgroundColor: 'rgb(239, 90, 152)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(239, 90, 152)'
    }, {
        label: 'Social Medeia Presence',
        data: [3, 4, 5, 3, 7, 12, 6, 10, 2],
        fill: true,
        backgroundColor: 'rgba(246, 133, 17, 0.2)',
        borderColor: 'rgb(246, 133, 17)',
        pointBackgroundColor: 'rgb(246, 133, 17)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(246, 133, 17)'
    }, {
        label: 'Amount of Money Already Raised',
        data: [12, 6, 4, 2, 3, 7, 10, 5, 3],
        fill: true,
        backgroundColor: 'rgba(248, 217, 4, 0.2)',
        borderColor: 'rgb(248, 217, 4)',
        pointBackgroundColor: 'rgb(248, 217, 4',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(248, 217, 4)'
    }, {
        label: 'Offers Free Merchandise',
        data: [2, 0, 1, 5, 15, 17, 7, 2, 3],
        fill: true,
        backgroundColor: 'rgba(188, 233, 42, 0.2)',
        borderColor: 'rgb(188, 233, 42)',
        pointBackgroundColor: 'rgb(188, 233, 42)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(188, 233, 42)'
    }, {
        label: 'Political Stances & Affliliations',
        data: [5, 8, 5, 3, 10, 6, 5, 8, 3],
        fill: true,
        backgroundColor: 'rgba(39, 187, 54, 0.2)',
        borderColor: 'rgb(39, 187, 54)',
        pointBackgroundColor: 'rgb(39, 187, 54)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(39, 187, 54)'
    }, {
        label: 'Transparency',
        data: [0, 5, 5, 5, 10, 10, 6, 7, 4],
        fill: true,
        backgroundColor: 'rgba(0, 161, 154, 0.2)',
        borderColor: 'rgb(0, 161, 154)',
        pointBackgroundColor: 'rgb(0, 161, 154)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 161, 154)'
    }, {
        label: 'Celebrity Endorsements',
        data: [0, 1, 5, 2, 15, 20, 6, 2, 1],
        fill: true,
        backgroundColor: 'rgba(18, 176, 218, 0.2)',
        borderColor: 'rgb(18, 176, 218)',
        pointBackgroundColor: 'rgb(18, 176, 218)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(18, 176, 218)'
    }, {
        label: 'Personal Area of Interest',
        data: [1, 1, 6, 6, 11, 14, 7, 1, 4],
        fill: true,
        backgroundColor: 'rgba(0, 84, 182, 0.2)',
        borderColor: 'rgb(0, 84, 182)',
        pointBackgroundColor: 'rgb(0, 84, 182)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 84, 182)'
    }, {
        label: 'Share Personal Core Values & Goals',
        data: [0, 0, 0, 2, 23, 16, 6, 5, 0],
        fill: true,
        backgroundColor: 'rgba(137, 61, 231, 0.2)',
        borderColor: 'rgb(137, 61, 231)',
        pointBackgroundColor: 'rgb(137, 61, 231)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(137, 61, 231)'
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
        },
        tension: 0.2
    },
};

const chart1 = new Chart(
    document.getElementById('radarChart'),
    config1
);