// Old name: Admin page - Statistics Charts 
// const { startOfDay, startOfWeek, endOfWeek } = require("date-fns");

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
                // to do it for the default value of month when loading the page
                const defaultValue = document.getElementById("month");
                console.log(defaultValue);
                console.log(defaultValue.value);
                filterData1(defaultValue);
            };
            
            // to check the results on console
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

// to filter the data based on month and year selection for chart 1
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

// random values for testing purposes
var weeklydata = [2,12,0,62,5.5,5,12];

// setup data of chart 2
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

// configuration of chart 2
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

// render init block
const myChart2 = new Chart(
    document.getElementById('myChart-2'),
    config2
);

// create function that is called after changing the value of categoties/subcategories
function filterbyCategory() {
    // grab the values of the selected category and subcategory
    var selected_cat = document.getElementById("categories").value;
    var selected_subcat = document.getElementById("subcategories").value;

    // call the discount function with the values selected
    averageDiscount(selected_cat,selected_subcat);
}

// let weekData = null;
let now;
let startOfWeek;
let endOfWeek;

// to navigate between weeks
function selectedWeek() {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    const current = event.currentTarget;
    current.classList.add('selected');
    console.log(current.id);

    var clickedButton = current.id;
    console.log("The " + clickedButton + " button was clicked.");
    // var clickedButton = document.getElementById(clickedButtonID);
    
    if (clickedButton == 'previous') {
        // Get the start and end dates for the current week (Monday to Sunday)
        now = new Date();
        const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        const daysSinceMonday = oneWeekAgo.getDay() - 1;
        startOfWeek = new Date(oneWeekAgo.getFullYear(), oneWeekAgo.getMonth(), oneWeekAgo.getDate() - daysSinceMonday);
        endOfWeek = new Date(oneWeekAgo.getFullYear(), oneWeekAgo.getMonth(), startOfWeek.getDate() + 6);

        console.log("now:",now);
        console.log("startOfWeek:", startOfWeek);
        console.log("endOfWeek:",endOfWeek);

    }else if(clickedButton == 'next'){
        // Get the start and end dates for the current week (Monday to Sunday)
        now = new Date();
        const oneWeekAfter = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
        const daysSinceMonday = oneWeekAfter.getDay() - 1;
        startOfWeek = new Date(oneWeekAfter.getFullYear(), oneWeekAfter.getMonth(), oneWeekAfter.getDate() - daysSinceMonday);
        endOfWeek = new Date(oneWeekAfter.getFullYear(), oneWeekAfter.getMonth(), startOfWeek.getDate() + 6);

        console.log("now:",now);
        console.log("startOfWeek:", startOfWeek);
        console.log("endOfWeek:",endOfWeek);

    }else if(clickedButton == 'today') {
        // Get the start and end dates for the current week (Monday to Sunday)
        now = new Date();
        // const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        const daysSinceMonday = now.getDay() - 1;
        startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysSinceMonday);
        endOfWeek = new Date(now.getFullYear(), now.getMonth(), startOfWeek.getDate() + 6);

        console.log("now:",now);
        console.log("startOfWeek:", startOfWeek);
        console.log("endOfWeek:",endOfWeek);
    } 

    // return [now, startOfWeek, endOfWeek];
}

// function to calculate the average discount
function averageDiscount(cat,subcat) {
    // the selected values passed from the function above
    console.log("Selected category: ", cat);
    console.log("Selected subcategory: ", subcat);


    // fetch data from get request
    var fetched = getData();
    var discs = fetched.discs;
    console.log("fetched2 : ",fetched); // has cat, subcat, discs 
    console.log("discs2 : ",discs); // all the discs submitted


    // Get the start and end dates for the current week (Monday to Sunday)
    const now = new Date();
    const daysSinceMonday = now.getDay() - 1;
    const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysSinceMonday);
    const endOfWeek = new Date(now.getFullYear(), now.getMonth(), startOfWeek.getDate() + 6);

    // const [now, startOfWeek, endOfWeek] = selectedWeek();

    console.log("now:",now);
    console.log("startOfWeek:", startOfWeek);
    console.log("endOfWeek:",endOfWeek);

    // identify category of product
    function catofProduct(product) {
        console.log("--- product: ", product);
        console.log("--- product subid: ", product.subID);
        console.log("--- fetched sub: ", fetched.subcats);
        for (let i = 0; i < fetched.subcats.length; i++) {
            if (product.subID == fetched.subcats[i].subID) {
                console.log("cat of product: ",fetched.subcats[i].catID);
                return fetched.subcats[i].catID;
            }
        }
    }

    let selectedProducts = 0;

    if(!subcat) {
    // if subcategory is not selected
    // to calculate all the products of the category
        selectedProducts = discs.filter(product => catofProduct(product) === cat);
        console.log("--productsByCat", selectedProducts); // selectedProducts of category
    }else {
        // filter all the products of the selected subcategory
        selectedProducts = discs.filter(product => product.subID === subcat);
        // const selectedProducts = discs.filter(product => product.subID === subcat || catofProduct(product) === cat);
        console.log("--productsBySubCat", selectedProducts); // selectedProducts of subcategory
    }


    // select only products of the current week
    const filteredProducts = selectedProducts.filter(discount => {
        console.log(discount);
        console.log(discount.entry_date);
        const entryDate = new Date(discount.entry_date);
        // entryDate.setDate(entryDate.getDate() - 1);
        console.log(entryDate);
        console.log(startOfWeek);
        console.log(entryDate<startOfWeek);
        return entryDate >= startOfWeek && entryDate <= endOfWeek;
    });

    console.log("filteredProducts:  ",filteredProducts);

    // first group the selected products by entry date using the reduce method 
    //to create an object where each key represents an entry date, 
    //and each value is an array of products that were entered on that day
    const groupedByEntryDate = filteredProducts.reduce((result,product)=> {
        // extract the date from the entryDate property by splitting the string at the 'T' character and taking the first part
        const entryDate = product.entry_date.split('T')[0];
        if(!result[entryDate]){
            result[entryDate] = [];
        }
        result[entryDate].push(product);
        console.log("-------------- wtf: ",result)
        return result;
    }, {});

    // calculate the average price for each entry date by iterating over the grouped products and summing up the prices for each date, and dividing by the number of products for that date
    const averagePricesByEntryDate = {};
    for (const entryDate in groupedByEntryDate) {
        averagePricesByEntryDate[entryDate] = groupedByEntryDate[entryDate].reduce((total,product) => total + product.original_price, 0) / groupedByEntryDate[entryDate].length;    
    }

    // calculate the average discount for each entry date by iterating over the grouped products, calculating the discount for each product, and then finding the average discount for all the products for that date
    const averageDiscountByEntryDate = {};
    for (const entryDate in groupedByEntryDate) {
        const discounts = groupedByEntryDate[entryDate].map(product => (averagePricesByEntryDate[entryDate] - product.disc_price) / averagePricesByEntryDate[entryDate]);
        averageDiscountByEntryDate[entryDate] = discounts.reduce((total, discount) => total + discount, 0) / discounts.length;
    }

    // filter the data and take only the discounts of this subcategory
    const discsofSubcat = discs.filter(item =>item.subID === subcat);
    console.log("=====by sub : ",discsofSubcat); 

    // labels contains the entry dates 
    // dataValues contains the average discount values for each date
    const labels = Object.keys(averageDiscountByEntryDate);
    // const labels = [];
    const dataValues = labels.map(entryDate => averageDiscountByEntryDate[entryDate].toFixed(5)*100 || 0);
    
    myChart2.config.data.labels = labels;
    
    myChart2.config.data.datasets[0].data = dataValues;

    // load the updates to the canva of the chart
    myChart2.update();
}