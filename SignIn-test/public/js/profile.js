// Old name: user_history
//  to make sure that the DOM is fully loaded before executing the AJAX request
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/user_history',
        // Data: I will have all the interactions and submitted discounts of the user logged in, for the products with counter same as the ones in the interaction table

        //to start the loading animation until process is finished 
        beforeSend: function () {
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

            // // for history of actions
            // console.log('data' , data);
            // if(data.length>0) {
            //     for (let i = 0; i < data.length; i++) {

            //         let icon;
            //         let icolor;
            //         if (data[i].interaction === 0) {
            //             icon="thumb_down"
            //             icolor = "danger"
            //         }else if(data[i].interaction === 1) {
            //             icon="thumb_up"
            //             icolor = "success"
            //         }

            //         let timestamp = Date.parse(data[i].timestamp);
            //         let date = new Date(timestamp);
            //         let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            //         let dateString = date.toLocaleDateString('en-US', options);
            //         $('#action_history').append(
            //             ` 
            //             <li class="bg-light list-group-item border rounded d-flex align-items-center px-0 py-2 mb-2 pt-0">
            //                 <div class="rounded avatar shadow bg-white mx-sm-3">
            //                     <img src="${data[i].image_link}" alt="kal"
            //                         class="p-sm-1">
            //                 </div>
            //                 <div class="d-flex align-items-start flex-column justify-content-center">
            //                     <h6 class="mb-0 text-sm">${data[i].price}€<span class="text-decoration-line-through text-danger text-xs">${data[i].original_price}€</span></h6>
            //                     <p class="mb-0 text-xs font-weight-bold">${data[i].product_name}</p>
            //                     <p class="mb-0 text-xxs">Product ID: ${data[i].prodID}</p>
            //                     <p class="mb-0 text-xs text-info"> on: ${dateString}</p>
            //                 </div> 
            //                 <div class="text-${icolor} pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto">
            //                 <i class="large p-2 material-icons opacity-10">${icon}</i>
            //                 </div>
            //             </li>
            //             `
            //         );
            //     }

            // } else {
            //     $('#no_action').append(
            //         `<h4 class="alert alert-danger mt-4">No Actions Yet.</h4>`
            //     );
            // }

            // Set number of items per page
            const ITEMS_PER_PAGE = 4;
            let currentPage = 1;
            let totalItems = data.length;

            function displayActionHistory(page) {
                $('#action_history').empty();
                let startIndex = (page - 1) * ITEMS_PER_PAGE;
                let endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

                for (let i = startIndex; i < endIndex; i++) {
                    let icon;
                    let icolor;
                    if (data[i].interaction === 0) {
                        icon = "thumb_down"
                        icolor = "danger"
                    } else if (data[i].interaction === 1) {
                        icon = "thumb_up"
                        icolor = "success"
                    }

                    let timestamp = Date.parse(data[i].timestamp);
                    let date = new Date(timestamp);
                    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                    let dateString = date.toLocaleDateString('en-US', options);

                    $('#action_history').append(
                        ` 
                        <li class="bg-light list-group-item border rounded d-flex align-items-center px-0 py-2 mb-2 pt-0">
                            <div class="rounded avatar shadow bg-white mx-sm-3">
                                <img src="${data[i].image_link}" alt="kal"
                                    class="p-sm-1">
                            </div>
                            <div class="d-flex align-items-start flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">${data[i].price}€<span class="text-decoration-line-through text-danger text-xs">${data[i].original_price}€</span></h6>
                                <p class="mb-0 text-xs font-weight-bold">${data[i].product_name}</p>
                                <p class="mb-0 text-xxs">Product ID: ${data[i].prodID}</p>
                                <p class="mb-0 text-xs text-info"> on: ${dateString}</p>
                            </div> 
                            <div class="text-${icolor} pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto">
                            <i class="large p-2 material-icons opacity-10">${icon}</i>
                            </div>
                        </li>
                        `
                    );
                }

                if (totalItems == 0) {
                    $('#no_action').append(
                        `<h4 class="alert alert-danger mt-4">No Actions Yet.</h4>`
                    );
                }
            }

            function displayPagination() {
                $('#pagination2').empty();
                let totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

                if (totalPages > 1) {
                    $('#pagination2').append(`
                      <div class="page-item ${1 === currentPage ? 'disabled' : ''}">
                        <a class="page-link" href="#" data-page="${currentPage - 1}" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span class="sr-only">Previous</span>
                        </a>
                      </div>
                    `);
                  
                    for (let i = 1; i <= totalPages; i++) {
                      $('#pagination2').append(`
                        <div class="page-item ${i === currentPage ? 'active' : ''}">
                          <a class="page-link" href="#" data-page="${i}">${i}</a>
                        </div>
                      `);
                    }
                  
                    $('#pagination2').append(`
                      <div class="page-item ${totalPages === currentPage ? 'disabled' : ''}">
                        <a class="page-link" href="#" data-page="${currentPage + 1}" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    `);

                    $('#pagination2').addClass('d-flex justify-content-center');
                  }
              
                $('#pagination2 div').on('click', function (e) {
                    e.preventDefault();
                    currentPage = parseInt($(this).find('a').attr('data-page'));
                    displayActionHistory(currentPage);
                    displayPagination();
                });

            }

            displayActionHistory(currentPage);
            displayPagination();





            // // for submitted discounts
            // console.log("discs",discs);
            // if(discs.length>0){
            //     for (let i = 0; i < discs.length; i++) {                  
            //         let timestamp = Date.parse(discs[i].entry_date);
            //         let date = new Date(timestamp);
            //         let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            //         let dateString = date.toLocaleDateString('en-US', options);
                    
            //         $('#submit_history').append(
            //             ` 
            //             <li class="bg-light list-group-item border rounded d-flex align-items-center px-0 py-2 mb-2 pt-0">
            //                 <div class="rounded avatar shadow bg-white mx-sm-3">
            //                     <img src="${discs[i].image_link}" alt="kal"
            //                         class="p-sm-2">
            //                 </div>
            //                 <div class="d-flex align-items-start flex-column justify-content-center">
            //                     <h6 class="mb-0 prod-price text-sm">${discs[i].disc_price}€ <span class="text-decoration-line-through text-danger text-xs">${discs[i].original_price}€</span></h6>
            //                     <p class="mb-0 text-xs font-weight-bold">${discs[i].product_name}</p>
            //                     <p class="mb-0 text-xxs">Product ID: ${discs[i].prodID}</p>
            //                     <p class="mb-0 text-xxs">Store: ${discs[i].store_name}</p>
            //                     <p class="mb-0 text-xs text-info"> on: ${dateString}</p>
            //                 </div>
            //             </li>    
            //             `
            //         );
            //     }
            // }else {
            //     $('#no_disc').append(
            //         `<h4 class="alert alert-danger mt-4">No Discounts Submitted Yet.</h4>`
            //     );
            // }

            // for submitted discounts
            console.log("discs", discs);

            //const ITEMS_PER_PAGE = 2;
            const pageCount = Math.ceil(discs.length / ITEMS_PER_PAGE);

            

            function renderPage(pageNum) {
                $('#submit_history').empty();

                const startIndex = (pageNum - 1) * ITEMS_PER_PAGE;
                const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, discs.length);

                for (let i = startIndex; i < endIndex; i++) {
                    let timestamp = Date.parse(discs[i].entry_date);
                    let date = new Date(timestamp);
                    let options = {  year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                    let dateString = date.toLocaleDateString('en-US', options);

                    $('#submit_history').append(
                        `
                            <li class="bg-light list-group-item border rounded d-flex align-items-center px-0 py-2 mb-2 pt-0">
                                <div class="rounded avatar shadow bg-white mx-sm-3">
                                    <img src="${discs[i].image_link}" alt="kal"
                                        class="p-sm-2">
                                </div>
                                <div class="d-flex align-items-start flex-column justify-content-center">
                                    <h6 class="mb-0 prod-price text-sm">${discs[i].disc_price}€ <span class="text-decoration-line-through text-danger text-xs">${discs[i].original_price}€</span></h6>
                                    <p class="mb-0 text-xs font-weight-bold">${discs[i].product_name}</p>
                                    <p class="mb-0 text-xxs">Product ID: ${discs[i].prodID}</p>
                                    <p class="mb-0 text-xxs">Store: ${discs[i].store_name}</p>
                                    <p class="mb-0 text-xs text-info"> on: ${dateString}</p>
                                </div>
                            </li>    
                        `
                    );
                }

                $('#pagination').empty();

                if (pageCount > 1) {
                    $('#pagination').append(`
                      <div class="page-item ${1 === pageNum ? 'disabled' : ''}">
                        <a class="page-link" href="#" data-page="${pageNum - 1}" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span class="sr-only">Previous</span>
                        </a>
                      </div>
                    `);
                  
                    for (let i = 1; i <= pageCount; i++) {
                      $('#pagination').append(`
                        <div class="page-item ${i === pageNum ? 'active' : ''}">
                          <a class="page-link" href="#" data-page="${i}">${i}</a>
                        </div>
                      `);
                    }
                  
                    $('#pagination').append(`
                      <div class="page-item ${pageCount === pageNum ? 'disabled' : ''}">
                        <a class="page-link" href="#" data-page="${pageNum + 1}" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    `);

                    $('#pagination').addClass('d-flex justify-content-center');
                  }
                  
                  $('#pagination a').on('click', function (e) {
                    e.preventDefault();
                    renderPage($(this).data('page'));
                  });
                  
            }

            if (discs.length > 0) {
                renderPage(1);
            } else {
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