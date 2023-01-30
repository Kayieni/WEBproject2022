//  to make sure that the DOM is fully loaded before executing the AJAX request
$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/userslead',
        // Data: I will have all the users ordered by total score
        
        //to start the loading animation until process is finished 
        beforeSend: function() {
            $("#loading-container").show();
        },
        success: function (data) {

            $('.leaderboard').empty();

            console.log(data);
            if (data.length>0) {
               for (let i = 0; i < data.length; i++) {
                    $('.leaderboard').append(
                        `
                        <tr>
                            {{!-- ranking --}}
                            <td class="align-middle text-center text-sm">
                                <span class="badge badge-sm bg-primary">#${i+1}</span>
                            </td>
                            {{!-- score --}}
                            <td class="align-middle text-center text-sm">
                                <span class="badge badge-sm bg-info">${data[i].total_score}</span>
                            </td>                                            
                            {{!-- user --}}
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <!-- <div>
                                        <img src="images/team-2.jpg"
                                            class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                                    </div> -->
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">${data[i].username}</h6>
                                        <p class="text-xs text-secondary mb-0">
                                        <a href="mailto: ${data[i].email}">${data[i].email}</a>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            {{!-- tokens --}}
                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold mb-0">${data[i].month_tokens}</span>
                            </td>
                            {{!-- total tokens --}}
                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">${data[i].total_tokens}</span>
                            </td>
                        </tr>
                        `
                    )
                
                } 
            }else {
                $('.leaderboard').append(
                    `<tr><td colspan="5"><h4 class=" text-center alert alert-danger mt-4">No Score Yet.</h4></td></tr>`
                )
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