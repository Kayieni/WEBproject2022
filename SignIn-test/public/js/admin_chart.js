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
            setData(results);

            window.onload = function() {
                // LOAD CHART 1
                // to do it for the default vaule of month when loading the page
                const defaultValue = document.getElementById("month");
                console.log(defaultValue);
                console.log(defaultValue.value);
                filterData1(defaultValue);
                filterbyCategory();

                                
                // fix week navigation
                // var datePicker = document.getElementById("datePicker");

                // datePicker.addEventListener("change", function() {
                //     var selectedDate = new Date(this.value);

                //     // Go to the start of the week (Sunday)
                //     var startOfWeek = new Date(selectedDate);
                //     startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

                //     // Go to the end of the week (Saturday)
                //     var endOfWeek = new Date(startOfWeek);
                //     endOfWeek.setDate(startOfWeek.getDate() + 6);

                //     // Log the start of the week
                //     console.log("Start of week:", startOfWeek.toDateString());
                //     var startWeek = startOfWeek.toDateString();
                //     document.getElementById("startWeek").value = startWeek;
                    
                //     // Log the end of the week
                //     console.log("End of week:", endOfWeek.toDateString());
                //     var endWeek = endOfWeek.toDateString();
                //     document.getElementById("startWeek").value = endWeek;
                // });

                // selectedWeek();

            };
            
            var categories = results.cats; // contains: catID, category_name
            var subcategories = results.subcats; // contains: catID, subID, subcategory_name 
            var discounts = results.discs; // contains: catID, subID, subcategory_name 
            
            console.log("categories",categories);
            console.log("subcategories",subcategories);
            console.log("dsicounts",discounts);
            
            // append the categories in the dropdown
            categories.forEach(function (category) {
                $('#categories').append(
                    `<option value="${category.catID}"> ${category.category_name} </option>`
                );
                // console.log(category.catID);
                // console.log(`<option value="${category.catID}"> ${category.category_name} </option>`);
            });
            
            // function to add event listeners to dropdowns of 2nd chart
            function init() {
                console.log("----------------");
                // Add an event listener to the first drop-down menu
                var selectcat = document.getElementById("categories");
                console.log("selectcat",selectcat); //this logs the whole html select element
                selectcat.addEventListener("change", function () {
                    // Get the selected option value
                    var selected_catID = this.value;
                    var subcategory_select = document.getElementById("subcategories");
                    // var productsList = document.getElementById("products_list");
                    // var messageContainer = document.getElementById("message_container");
                    if (selected_catID) {
                        // filter the subcategories and display only the ones that belong to the selected category
                        subcategory_select.innerHTML = "";
                        subcategory_select.innerHTML += "<option value='' selected>Select</option>";
                        filteredSubcategories = subcategories.filter(function (subcategory) {
                            if (subcategory.catID == selected_catID) {
                                subcategory_select.innerHTML += "<option value='" + subcategory.subID + "'>" + subcategory.subcategory_name + "</option>";
                                return true;
                            }
                            return false;
                        });
                        subcategory_select.disabled = false;
                        // productsList.innerHTML = "";
                        // filteredProducts = [];
                        // productsList.style.display = "none";
                        // messageContainer.innerHTML = "";
                        
                    } else {
                        subcategory_select.innerHTML = "";
                        subcategory_select.disabled = true;
                        // productsList.innerHTML = "";
                        // filteredProducts = [];
                        // productsList.style.display = "none";
                        // messageContainer.innerHTML = "";
                    }
                });
                
                // // Add event listener to the second drop-down menu
                // document.getElementById("subcategory_select").addEventListener("change", function () {
                    // // $("#subcategory_select").addEventListener("change", function () {
                        //     // Get the selected option value
                        //     console.log("----------------");
                        //     var selected_subID = this.value;
                        //     var search_input = document.getElementById("search_input").value;
                        //     var productsList = document.getElementById("products_list");
                        //     var messageContainer = document.getElementById("message_container");
                        //     productsList.innerHTML = "";
                        //     // filter the products and display only the ones that match the selected subcategory and the search input
                //     filteredProducts = products.filter(function (product) {
                //         if (product.subID == selected_subID && product.product_name.toLowerCase().includes(search_input.toLowerCase())) {
                //             return true;
                //         }
                //         return false;
                //     });
                //     if (filteredProducts.length > 0) {
                //         productsList.style.display = "block";
                //         messageContainer.innerHTML = "";
                //         displayProducts();
                //     } else {
                //         productsList.style.display = "none";
                //         messageContainer.innerHTML = "No products found";
                //     }
                // });




            }

            // call the function of dropdowns initiation
            init();
    
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

// ================================================================
// ================================================================
// create chart 1

// length of each month in days
var monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// initiate the first 28 days bc its standard for each month
const days = [];
for(let i=0; i<28; i++) {
    days.push(i+1);
};
console.log(days);

// initiate set of the final results for chart 1
const datapoints = [];

// setup data of chart 1
const data = {
    labels: days,
    datasets: [{
        label: 'Amount of Daily Discounts',
        data: datapoints,
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

// configuration of chart 1
const config = {
    type: 'bar',
    data: data,
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

// render init block for chart 1
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// to filter the data based on month and year selection
function filterData1(monthinput) {
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
    var discs = fetched.discs;
    console.log("fetched : ",fetched);
    console.log("discs : ",discs);

    var year;
    var month;
    var date;

    // store the fetched data in local storage history
    for (let i = 0; i < discs.length; i++) {
        const entry_date = discs[i].entry_date;
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

// end chart 1
// =============================================================
// =============================================================


// =============================================================
// =============================================================
// start chart 2

// initiate the labels and the data for chart 2
var weekdays = ["M", "T", "W", "T", "F", "S", "S"];
var weeklydata = [2,12,0,62,5.5,5,12];







// var ctx = document.getElementById("myChart-2").getContext("2d");




// if selected category and NO subcategory, display average discount of all discounts in selected category

// if selected category and subcategory, display average discount of all discounts in selection

// first view = current week
// navigate between weeks

// calculate average discount 

const data2 = {
    labels: weekdays,
    datasets: [{
        label: 'Amount of Daily Discounts',
        data: weeklydata,
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

// config chart 2
const config2 = {
    type: 'bar',
    data: data2,
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
// console.log(config2);

// render init block
const myChart2 = new Chart(
    document.getElementById('myChart-2'),
    config2
);

// create function that is called after changing the value of categoties/subcategories
function filterbyCategory() {
    var selected_cat = document.getElementById("categories").value;
    var selected_subcat = document.getElementById("subcategories").value;

    // call the discount
    averageDiscount(selected_cat,selected_subcat);
}
  

function averageDiscount(cat,subcat) {
    console.log("Selected category: ", cat);
    console.log("Selected subcategory: ", subcat);
    
    // add data from get request
    var fetched = getData();
    var discs = fetched.discs;
    console.log("fetched2 : ",fetched);
    console.log("discs2 : ",discs);

    // filter the data and take only the discounts of this subcategory
    const discsofSubcat = discs.filter(item =>item.subID === subcat);
    console.log("=====by sub : ",discsofSubcat); 

    // ypologismos diaforwn 
    var difference = [];
    // estw mesi timi proigoumenis vdomasas == original price
    for (let i = 0; i < discsofSubcat.length; i++) {
        difference[i] = discsofSubcat[i].original_price - discsofSubcat[i].disc_price;        
    }

    //ypologismos mesis timis
    var sum=0;
    for (let i = 0; i < difference.length; i++) {
        sum += difference[i];
    }
    var mesi_timi = Math.round((sum/difference.length)*100);

    var mesi_ekptosi = [];
    for (let i = 0; i < 7; i++) {
        mesi_ekptosi[i] = mesi_timi;
    }

    //replace the data in the chart
    myChart2.config.data.datasets[0].data = mesi_ekptosi;
    myChart2.config.data.labels = weekdays;
    // load the updates to the canva of the chart
    myChart2.update();
}



// function selectedWeek() {
//     const weekdays2 = [...weekdays];
//     const startweek = document.getElementById('startWeek');
//     console.log(startweek.value);
//     const date = new Date(startweek.value);
//     console.log(date);

//     // const endweek = document.getElementById('endWeek');
//     var filterWeek = [];
//     for (let i = 0; i < 7; i++) {
//         // const element = array[i];
//         // filterWeek.push(startweek + i);
//         let nextDay = new Date(date);
//         nextDay.setDate(nextDay.getDate() + i);
//         filterWeek.push(nextDay.toDateString().slice(0, 10));
//     }
//     console.log("im inside select week");
//     console.log("filterweek", filterWeek);
//     myChart2.config2.data.labels = filterWeek;
//     myChart2.update();

    
// }













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