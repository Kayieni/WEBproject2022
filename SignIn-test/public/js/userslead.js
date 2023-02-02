let startIndex = 0;
let entriesPerPage = 2;
//let pageSize = 5;

function showPage(data) {
    $('.leaderboard').empty();

    console.log(data);
    if (data.length > 0) {
        let endIndex = startIndex + entriesPerPage;
        let currentData = data.slice(startIndex, endIndex);

        for (let i = 0; i < currentData.length; i++) {
            $('.leaderboard').append(
                `
                <tr>
                    <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm bg-primary">#${startIndex + i + 1}</span>
                    </td>
                    <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm bg-info">${currentData[i].total_score}</span>
                    </td>
                    <td>
                        <div class="d-flex px-2 py-1">
                            <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">${currentData[i].username}</h6>
                                <p class="text-xs text-secondary mb-0">
                                <a href="mailto: ${currentData[i].email}">${currentData[i].email}</a>
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold mb-0">${currentData[i].month_tokens}</span>
                    </td>
                    <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">${currentData[i].total_tokens}</span>
                    </td>
                </tr>
                `
            )
        }

        if (data.length > entriesPerPage) {
            $('.pagination-container').empty();

            if (startIndex > 0) {
                $('.pagination-container').append(
                    `
                    <button class="btn btn-primary btn-sm prev-page">Prev</button>
                    `
                );
            }

            if (endIndex < data.length) {
                $('.pagination-container').append(
                    `
                    <button class="btn btn-primary btn-sm next-page">Next</button>
                    `
                );
            }
        }
    } else {
        $('.leaderboard').append(
            `<tr><td colspan="5"><h4 class="text-center alert alert-danger mt-4">No Score Yet.</h4></td></tr>`
        )
    }
}

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:5000/userslead',
        beforeSend: function () {
            $("#loading-container").show();
        },
        success: function (data) {

            $('.leaderboard').empty();

            console.log(data);
            if (data.length > 0) {
                ///// let entriesPerPage = 10; ///////// when we have enough users in the DB 
                let entriesPerPage = 2;
                let numberOfPages = Math.ceil(data.length / entriesPerPage);
                let currentPage = 1;

                let displayEntries = (page) => {
                    let startIndex = (page - 1) * entriesPerPage;
                    let endIndex = startIndex + entriesPerPage;

                    for (let i = startIndex; i < endIndex; i++) {
                        if (i >= data.length) {
                            break;
                        }
                        $('.leaderboard').append(
                                `<tr>
                                <td class="align-middle text-center text-sm">
                                    <span class="badge badge-sm bg-primary">#${i + 1}</span>
                                </td>
                                <td class="align-middle text-center text-sm">
                                    <span class="badge badge-sm bg-info">${data[i].total_score}</span>
                                </td>
                                <td>
                                    <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">${data[i].username}</h6>
                                        <p class="text-xs text-secondary mb-0">
                                        <a href="mailto:${data[i].email}">${data[i].email}</a>
                                        </p>
                                    </div>
                                    </div>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-xs font-weight-bold mb-0">${data[i].month_tokens}</span>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-xs font-weight-bold">${data[i].total_tokens}</span>
                                </td>
                                </tr>`
                    
                        );
                    }
                };

                displayEntries(currentPage);

                if (numberOfPages > 1) {
                    let pagination = $("<div class='pagination'></div>");
                    pagination.append("<button class='btn btn-sm btn-primary previous'>Previous</button>");
                    pagination.append("<button class='btn btn-sm btn-primary next'>Next</button>");

                    $('.leaderboard').after(pagination);

                    $('.previous').prop("disabled", true);
                    $('.previous').click(() => {
                        currentPage--;
                        $('.leaderboard').empty();
                        displayEntries(currentPage);

                        if (currentPage === 1) {
                            $('.previous').prop("disabled", true);
                        }
                        $('.next').prop("disabled", false);
                    });

                    $('.next').click(() => {
                        currentPage++;
                        $('.leaderboard').empty();
                        displayEntries(currentPage);

                        if (currentPage === numberOfPages) {
                            $('.next').prop("disabled", true);
                        }
                        $('.previous').prop("disabled", false);
                    });

                              
                }
            }
        },
        // to stop the animation of loading
        complete: function () {
            $("#loading-container").hide();
        },
        error: function (error) {
            console.log(error);
        }
    })
})
             