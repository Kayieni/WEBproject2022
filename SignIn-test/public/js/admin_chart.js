let dataa;

function getData() {
    return dataa;
}
  
function setData(newData) {
    dataa = newData;
}

//  to make sure that the DOM is fully loaded before executing the AJAX request
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/charts',

        //to start the loading animation until process is finished 
        beforeSend: function() {
            $("#loading-container").show();
        },

        success: function (results) {

            console.log(results);

            window.onload = function() {
                const defaultValue = document.getElementById("month");
                console.log(defaultValue);
                console.log(defaultValue.value);
                filterData(defaultValue);
            };

            setData(results);
            
        
        },

        // to stop the animation of loading
        complete: function(){
            $("#loading-container").hide();
        },

        error: function (error) {
            console.log(error);
        }

    });

})



var monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const days = [];
for(let i=0; i<28; i++) {
    days.push(i+1);
};

console.log(days);

// set the final results
const datapoints = [];

// setup
const data = {
    labels: days,
    datasets: [{
        label: 'Amount of Daily Discounts',
        data: datapoints,
        //data: [18, 12, 6, 9, 12, 3, 9],
        // backgroundColor: [
        //     'rgba(255,26,104,0.2)',
        //     'rgba(54,162,235,0.2)',
        //     'rgba(255,206,86,0.2)',
        //     'rgba(75,192,192,0.2)',
        //     'rgba(153,105,255,0.2)',
        //     'rgba(255,159,64,0.2)',
        //     'rgba(0,0,0,0.2)'
        // ],
        // borderColor: [
        //     'rgba(255,26,104,1)',
        //     'rgba(54,162,235,1)',
        //     'rgba(255,206,86,1)',
        //     'rgba(75,192,192,1)',
        //     'rgba(153,105,255,1)',
        //     'rgba(255,159,64,1)',
        //     'rgba(0,0,0,1)'
        // ],
        borderWidth: 1,
        datalabels: {
            color: 'white',
            anchor: 'end',
            align: 'top'
        },
        maxBarThickness: 10,
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 4,
        borderSkipped: false,
        backgroundColor: "rgba(255, 255, 255, .8)"

    }]
};

// config 
const config = {
    type: 'bar',
    data,
    plugins: [ChartDataLabels],
     
    options: {
        scales: {
            y: {
                grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5],
                    color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 500,
                    beginAtZero: true,
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 300,
                        family: "Roboto",
                        style: 'normal',
                        lineHeight: 2
                    },
                    color: "#fff"
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5],
                    color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                    display: true,
                    color: '#f8f9fa',
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 300,
                        family: "Roboto",
                        style: 'normal',
                        lineHeight: 2
                    },
                }
            },
        }
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// to filter the data based on month and year selection
function filterData(monthinput) {
    // manage the labels based on month
    var days2 = [...days];
    var monthdays = [];

    console.log(monthinput.value);

    // split in year and month
    const split_input = monthinput.value.split('-');
    const in_month = parseInt(split_input[1]);
    const in_year = parseInt(split_input[0]);
    console.log(in_month,in_year);

    // get the number of days in the month selected
    monthdays = monthLengths[in_month-1];
    if(in_month==2 && isLeapYear(in_year)){
        monthdays+=1;
    }
    console.log(monthdays);

    //add more days that 28 if its needed based on month length
    for(i=days2.length; i<monthdays; i++) {
        days2.push(i+1);
    }

    // replace the labels in the chart
    myChart.config.data.labels = days2;

    //add ass many rows in tha table as the days of the month
    var datapoints2 = [...datapoints];
    for(let i=0; i < days2.length; i++) {
        datapoints2[i] = 0;
    }
    console.log("datapoints2", datapoints2);

    // add data from get request
    var fetched = getData();
    console.log("fetched : ",fetched);

    var year;
    var month;
    var date;

    // store the fetched data in local storage history
    for (let i = 0; i < fetched.length; i++) {
        const entry_date = fetched[i].entry_date;
        const entryDate = new Date(entry_date);
        year=entryDate.getFullYear();
        month=entryDate.getMonth()+1;
        date = entryDate.getDate();
        console.log("date == ", year, month, date);

        if (year === in_year && month === in_month) {
            datapoints2[date-1]++;
        }
    }

    console.log(datapoints2);

    //replace the data in the chart
    myChart.config.data.datasets[0].data = datapoints2;

    // load the updates to the canva of the chart
    myChart.update();
}

// to check if a year is leap with the common rule
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}


var ctx = document.getElementById("chart-bars").getContext("2d");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
            label: "Sales",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "rgba(255, 255, 255, .8)", 
            data: [50, 20, 10, 22, 50, 10, 40], // the values of the graph
            maxBarThickness: 6
        },],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
                grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5],
                    color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 500,
                    beginAtZero: true,
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 300,
                        family: "Roboto",
                        style: 'normal',
                        lineHeight: 2
                    },
                    color: "#fff"
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [5, 5],
                    color: 'rgba(255, 255, 255, .2)'
                },
                ticks: {
                    display: true,
                    color: '#f8f9fa',
                    padding: 10,
                    font: {
                        size: 14,
                        weight: 300,
                        family: "Roboto",
                        style: 'normal',
                        lineHeight: 2
                    },
                }
            },
        },
    },
});

// var ctx2 = document.getElementById("chart-line").getContext("2d");

// new Chart(ctx2, {
//     type: "line",
//     data: {
//         labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [{
//             label: "Mobile apps",
//             tension: 0,
//             borderWidth: 0,
//             pointRadius: 5,
//             pointBackgroundColor: "rgba(255, 255, 255, .8)",
//             pointBorderColor: "transparent",
//             borderColor: "rgba(255, 255, 255, .8)",
//             borderColor: "rgba(255, 255, 255, .8)",
//             borderWidth: 4,
//             backgroundColor: "transparent",
//             fill: true,
//             data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//             maxBarThickness: 6

//         }],
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 display: false,
//             }
//         },
//         interaction: {
//             intersect: false,
//             mode: 'index',
//         },
//         scales: {
//             y: {
//                 grid: {
//                     drawBorder: false,
//                     display: true,
//                     drawOnChartArea: true,
//                     drawTicks: false,
//                     borderDash: [5, 5],
//                     color: 'rgba(255, 255, 255, .2)'
//                 },
//                 ticks: {
//                     display: true,
//                     color: '#f8f9fa',
//                     padding: 10,
//                     font: {
//                         size: 14,
//                         weight: 300,
//                         family: "Roboto",
//                         style: 'normal',
//                         lineHeight: 2
//                     },
//                 }
//             },
//             x: {
//                 grid: {
//                     drawBorder: false,
//                     display: false,
//                     drawOnChartArea: false,
//                     drawTicks: false,
//                     borderDash: [5, 5]
//                 },
//                 ticks: {
//                     display: true,
//                     color: '#f8f9fa',
//                     padding: 10,
//                     font: {
//                         size: 14,
//                         weight: 300,
//                         family: "Roboto",
//                         style: 'normal',
//                         lineHeight: 2
//                     },
//                 }
//             },
//         },
//     },
// });

// var ctx3 = document.getElementById("chart-line-tasks").getContext("2d");

// new Chart(ctx3, {
//     type: "line",
//     data: {
//         labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [{
//             label: "Mobile apps",
//             tension: 0,
//             borderWidth: 0,
//             pointRadius: 5,
//             pointBackgroundColor: "rgba(255, 255, 255, .8)",
//             pointBorderColor: "transparent",
//             borderColor: "rgba(255, 255, 255, .8)",
//             borderWidth: 4,
//             backgroundColor: "transparent",
//             fill: true,
//             data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
//             maxBarThickness: 6

//         }],
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 display: false,
//             }
//         },
//         interaction: {
//             intersect: false,
//             mode: 'index',
//         },
//         scales: {
//             y: {
//                 grid: {
//                     drawBorder: false,
//                     display: true,
//                     drawOnChartArea: true,
//                     drawTicks: false,
//                     borderDash: [5, 5],
//                     color: 'rgba(255, 255, 255, .2)'
//                 },
//                 ticks: {
//                     display: true,
//                     padding: 10,
//                     color: '#f8f9fa',
//                     font: {
//                         size: 14,
//                         weight: 300,
//                         family: "Roboto",
//                         style: 'normal',
//                         lineHeight: 2
//                     },
//                 }
//             },
//             x: {
//                 grid: {
//                     drawBorder: false,
//                     display: false,
//                     drawOnChartArea: false,
//                     drawTicks: false,
//                     borderDash: [5, 5]
//                 },
//                 ticks: {
//                     display: true,
//                     color: '#f8f9fa',
//                     padding: 10,
//                     font: {
//                         size: 14,
//                         weight: 300,
//                         family: "Roboto",
//                         style: 'normal',
//                         lineHeight: 2
//                     },
//                 }
//             },
//         },
//     },
// });