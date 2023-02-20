// Old name: delete 
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/discounts',
        //to start the loading animation until process is finished 
        beforeSend: function() {
            $("#loading-container").show();
        },

        success: function (data) {
            // var role = data[1];
            // clear the data container
            var interacted = data[3];
            $('#discounts-list').empty();
            // console.log(data[2].store.storeID);
            // filter the data and take only the ones with discounts in the store
            // const filteredDiscs = data[0].filter(item => item.storeID === data[2].store.storeID && item.original_price !== item.disc_price);
            const filteredDiscs = data[0];
            console.log(filteredDiscs);
            var { stock , restock , txtstyle , likebtn , dislikebtn } = ""
            // Display data on website
            if(filteredDiscs.length>0) {
                let timestamp = Date.parse(filteredDiscs[0].entry_date);
                let date = new Date(timestamp);
                let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                let dateString = date.toLocaleDateString('en-US', options);

                $('.last-date').append(`<b>${dateString}</b>`);
                $('.show-discounts-btn').append(`${filteredDiscs.length} Active Discounts`);
                // $('.show-discounts-btn').click(function() {
                    for (let i = 0; i < filteredDiscs.length; i++) {
                        //control in/out of stock variables
                        if (filteredDiscs[i].stock == 0) {
                            stock = 'Out of Stock'
                            restock = 'Back in stock'
                            txtstyle = 'danger' 
                            likebtn = 'outine-dark disabled'
                            dislikebtn = 'outine-dark disabled'
                        } else {
                            stock = 'In Stock'
                            restock = 'Run out of stock'
                            txtstyle = 'success'
                            likebtn = 'success'
                            dislikebtn = 'danger'
                        }

                        if(interacted==filteredDiscs[i].counter) {                         
                            likebtn = 'outine-dark disabled'
                            dislikebtn = 'outine-dark disabled'
                        }

                        let timestamp = Date.parse(filteredDiscs[i].entry_date);
                        let date = new Date(timestamp);
                        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                        let dateString = date.toLocaleDateString('en-US', options);
                        

                        $('#discounts-list').append(
                        `   <!-- discount number ${i+1}-->
                            <div class="row p-2 bg-white border rounded mt-2">
                                <div class="col-md-3 mt-1">
                                    <img class="img-fluid img-responsive rounded w-40"
                                        src="${filteredDiscs[i].image_link}">
                                </div>
                                <div class="col-md-6 mt-1">
                                    <h5>${filteredDiscs[i].product_name}</h5>
                                    <span><em>product ID: ${filteredDiscs[i].prodID}</em></span>
                                    <div class="d-flex flex-row">
                                        <hr class="hr horizontal dark">
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="text-success mr-2"><i class="large p-2 material-icons opacity-10">thumb_up</i><span id="NumOfLikes">0</span></div>
                                        <div class="text-danger mr-2"><i class="large p-2 material-icons opacity-10">thumb_down</i><span>310</span></div>
                                    </div>
                                    <div class="mt-1 mb-1 figure-caption">
                                        <span class="dot"></span>
                                        <span>Date:</span>
                                        <span>${dateString}<br></span>
                                    </div>
                                    
                                    <div class="mt-1 mb-1 figure-caption">
                                        <span class="dot"></span>
                                        <span>User:</span>
                                        <span>${filteredDiscs[i].username}<br></span> <!--εδω πρεπει να μπει το username και οχι το id του user-->
                                    </div>
                                    <div class="mt-1 mb-1 figure-caption">
                                        <span class="dot"></span>
                                        <span>Total Points:</span>
                                        <span>${filteredDiscs[i].total_score}<br></span> <!-- εδω πρεπει να μπουν οι πόντοι του χρήστη -->
                                    </div>
                                </div>
                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div class="d-flex flex-row align-items-center">
                                        <h4 class="mr-1">${filteredDiscs[i].disc_price}€</h4><span class="text-decoration-line-through text-danger">${filteredDiscs[i].original_price}€</span>
                                    </div>
                                    <h6 class="text-${txtstyle}">${stock}</h6>
                                    <div class="d-flex flex-column mt-4">
                                                                     
                                        <form action="/auth/delete_discount" method="POST">
                                            <input type="hidden" name="id_disc" value="${filteredDiscs[i].id_disc}">  
                                             
                                            <button class="btn btn-danger btn-sm"
                                                type="submit">
                                                Delete Discount
                                            </button>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        `
                        );
                    
                    }
                    //new
                    // let count = 0;
                    // document.querySelector('.likebtn').addEventListener('click', function() {
                    //     count++;
                    //     console.log('Number of likes = ',count);
                    //     document.getElementById('NumOfLikes').innerHTML = count;
                    // });

                // });
                        // var count = 0;
                        // var btnlike = document.getElementById("btnlike");
                        // var displikes = document.getElementById("NumOfLikes"); 
                        // btnlike.onclick = function () {
                        // count++;
                        // displikes.innerHTML = count;
                        // }


            } else {
                
                $('.last-date').append(`<b>No Discounts Yet.</b>`);
                $('.show-discounts-btn').append(`${filteredDiscs.length} Active Discounts`);
                $('#discounts-list').append(
                    `<h4 class="alert alert-danger mt-4">No Discounts yet in this store. Try later.</h4>`
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

});