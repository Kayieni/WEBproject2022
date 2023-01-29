//  to make sure that the DOM is fully loaded before executing the AJAX request
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/user_history',
        // Data: I will have all the interactions and submitted discounts of the user logged in, for the products with counter same as the ones in the interaction table
        
        //to start the loading animation until process is finished 
        beforeSend: function() {
            $("#loading-container").show();
        },
        success: function (results) {
            // clear the data container
            $('#action_history').empty();
            $('#submit_history').empty();
            // filter the data and take only the ones with discounts in the store
            // const filteredDiscs = data[0].filter(item => item.storeID === "node/354449389" && item.original_price !== item.disc_price);
            // console.log(filteredDiscs);
            var data = results[0]; //data == interactions
            var discs = results[1]; // discs == submitted discounts
            var user = results[2]; // user == user data from session
            // Display data on website
            
            let register = Date.parse(user.register_date);
            let regdate = new Date(register);
            let regoptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            let date = regdate.toLocaleDateString('en-US', regoptions);
            $('#register_date').append(`&nbsp; ${date}`);

            console.log('data' , data);
            if(data.length>0) {
                for (let i = 0; i < data.length; i++) {
                    let timestamp = Date.parse(data[i].timestamp);
                    let date = new Date(timestamp);
                    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                    let dateString = date.toLocaleDateString('en-US', options);
                    $('#action_history').append(
                        ` 
                        <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div class="avatar me-3">
                                {{!-- product image --}}
                                <img src="${data[i].image_link}" alt="kal"
                                    class="border-radius-lg shadow">
                            </div>
                            <div class="d-flex align-items-start flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">${data[i].price}€<span class="text-decoration-line-through text-danger text-xs">${data[i].original_price}€</span></h6>
                                <p class="mb-0 text-xs font-weight-bold">${data[i].product_name}</p>
                                <p class="mb-0 text-xxs">Product ID: ${data[i].prodID}</p>
                                <p class="mb-0 text-xs text-info"> on: ${dateString}</p>
                            </div>
                        `
                    );

                    if (data[i].interaction === 0) {
                        $('#action_history').append(
                            `
                                <div class="text-danger pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto">
                                    <i class="large p-2 material-icons opacity-10">thumb_down</i>
                                </div>
                            </li>
                            
                            `
                        );
                    } else if (data[i].interaction === 1) {
                        $('#action_history').append(
                            `
                                <div class="text-success pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto">
                                    <i class="large p-2 material-icons opacity-10">thumb_up</i>
                                </div>
                            </li>
                            
                            `
                        );
                    }
                }
                
            } else {
                $('#no_action').append(
                    `<h4 class="alert alert-danger mt-4">No Actions Yet.</h4>`
                );
            }

            console.log("discs",discs);
            if(discs.length>0){
                for (let i = 0; i < discs.length; i++) {                  
                    let timestamp = Date.parse(discs[i].entry_date);
                    let date = new Date(timestamp);
                    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                    let dateString = date.toLocaleDateString('en-US', options);
                    
                    $('#submit_history').append(
                        ` 
                        <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div class="avatar me-3">
                                {{!-- product image --}}
                                <img src="${discs[i].image_link}" alt="kal"
                                    class="border-radius-lg shadow">
                            </div>
                            <div class="d-flex align-items-start flex-column justify-content-center">
                                <h6 class="mb-0 prod-price text-sm">${discs[i].disc_price}€ <span class="text-decoration-line-through text-danger text-xs">${discs[i].original_price}€</span></h6>
                                <p class="mb-0 text-xs font-weight-bold">${discs[i].product_name}</p>
                                <p class="mb-0 text-xxs">Product ID: ${discs[i].prodID}</p>
                                <p class="mb-0 text-xs text-info"> on: ${dateString}</p>
                            </div>
                        </li>    
                        `
                    );
                }
            }else {
                $('#no_disc').append(
                    `<h4 class="alert alert-danger mt-4">No Discounts Submitted Yet.</h4>`
                );
            }

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