//  to make sure that the DOM is fully loaded before executing the AJAX request
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/user_history',
        // Data: I will have all the interactions of the user logged in, for the products with counter same as the ones in the interaction table
        
        //to start the loading animation until process is finished 
        beforeSend: function() {
            $("#loading-container").show();
        },
        success: function (data) {
            // clear the data container
            $('#action_history').empty();
            // filter the data and take only the ones with discounts in the store
            // const filteredDiscs = data[0].filter(item => item.storeID === "node/354449389" && item.original_price !== item.disc_price);
            // console.log(filteredDiscs);
            
            // Display data on website
            console.log('=======' , data.length);
            if(data.length>0) {
                for (let i = 0; i < data.length; i++) {


                    $('#action_history').append(
                        ` 
                        <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                            <div class="avatar me-3">
                                {{!-- product image --}}
                                <img src="${data[i].image_link}" alt="kal"
                                    class="border-radius-lg shadow">
                            </div>
                            <div class="d-flex align-items-start flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">${data[i].price}€<span class="text-decoration-line-through text-danger">${data[i].original_price}€</span></h6>
                                <p class="mb-0 text-xs">${data[i].product_name}</p>
                                <p class="mb-0 text-xxs">Product ID: ${data[i].prodID}</p>
                                <p class="mb-0 text-xs"> on: ${data[i].timestamp}</p>
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