/*let labels = [
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

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels6 = Utils.months({count: 7});

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

const data6 = {
    labels: labels6,
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Utils.CHART_COLORS.red,
      },
      {
        label: 'Dataset 2',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Utils.CHART_COLORS.blue,
      },
      {
        label: 'Dataset 3',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Utils.CHART_COLORS.green,
      },
    ]
  };

const config6 = {
    type: 'bar',
    data: data6,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Number of Times People Have Donated in the Last Six Months'
            }
        },
        //indexAxis: 'y',
        scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true
            }
        }
    }
};

const chart6 = new Chart(
    document.getElementById('horizStackedBarChart'),
    config6
);*/

var ctx = document.getElementById("horizStackedBarChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
        ["Spend only a reasonable amount of your donation", "on general administrative and fundraising expenses"],
        ["Demonstrate sound business and operational practices", "including full disclosure of financial statements"],
        "Honor your request for how your gift is used",
        ["Communicate the specific impact of your git with detailed", "information about organizational effectiveness", "in meeting objectives"],
        ["Providing ongoing communications", "(newsletters/annual reports)"],
    ],
    datasets: [{
      label: 'Not at all important',
      backgroundColor: 'rgb(255, 187, 99)',
      data: [11, 8.8, 20.9, 33.7, 39.3],
      barPercentage: 0.5
    }, {
      label: 'Somewhat Important',
      backgroundColor: "rgb(246, 133, 17)",
      data: [26.5, 33.1, 35.3, 51.2, 50.5],
      barPercentage: 0.5
    }, {
      label: 'Very Important',
      backgroundColor: /*'rgb(228, 111, 0)'*/"#008d93",
      data: [62.5, 58.1, 43.9, 15, 10.3],
      barPercentage: 0.5
    }]
  },
  options: {
    scales: {
      x: {
        stacked: true,
        type: 'linear',
        beginAtZero: true
      },
      y: {
        stacked: true,
      }
    },
    plugins: {
        tooltip: {
            callbacks: {
                title: (context) => {
                    return context[0].label.replaceAll(',','');
                }
            }
        },
        legend: {
            display: true
        },
        title: {
            display: true,
            text: 'Number of Times People Have Donated in the Last Six Months'
        }
    },
    indexAxis: 'y'
  }
});