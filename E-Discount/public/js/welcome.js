$(document).ready(function () {

    $.ajax({
        url: "http://localhost:5000/stores",
        dataType: "json",

        beforeSend: function () {
            $("#loading-container").show();
        },

        success: function (results) {
            var data = results[0]; // stores
            //console.log(role);
            let mapinit = false; // to ensure the map is created only once: toggle when created at the end
            if ('geolocation' in navigator) {
                if (!mapinit) {
                    const watchID = navigator.geolocation.watchPosition((position) => {
                        var Icon = L.Icon.extend({
                            options: {
                                iconAnchor: [25, 16]
                            }
                        });

                        var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

                        //38.236023, 21.737156 Patra
                        var map = new L.map('map').addLayer(osm).setView([position.coords.latitude, position.coords.longitude], 15);

                        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                        marker.bindPopup("<b>You are here</b>.").openPopup();
                        L.circle([position.coords.latitude, position.coords.longitude], 100).addTo(map);

                        var icon;
                        var superIcon = new Icon({ iconUrl: 'img/yellowpin.png', iconSize: [40, 62] });
                        var miniIcon = new Icon({ iconUrl: 'img/yellowpin.png', iconSize: [40, 62] });
                        var discIcon = new Icon({ iconUrl: 'img/redpin.png', iconSize: [50, 62] });

                        // Set the radius (in meters)
                        const radius = 3000;

                        var markerClusterGroup = L.markerClusterGroup();
                        var foundClusterGroup = new L.MarkerClusterGroup();
                        var discStoresClusterGroup = new L.MarkerClusterGroup();

                        //console.log(data.length);
                        // Loop through the data.elements array
                        if (data.length > 0) {
                            for (i = 0; i < data.length; i++) {

                                // Create the div element and the marker object
                                var div = document.createElement('div');

                                // Update the content and position of the div element and marker object
                                if (data[i].store_type === 'supermarket') {
                                    icon = superIcon;
                                } else if (data[i].store_type === 'convenience') {
                                    icon = miniIcon;
                                }

                                // Get the marker position
                                const markerPosition = L.latLng(data[i].store_latitude, data[i].store_longtitude);
                                //console.log("markerPosition", markerPosition);

                                // Get the user's position
                                const userPosition = L.latLng(position.coords.latitude, position.coords.longitude);
                                //console.log('user position', userPosition);

                                // Calculate the distance between the user's position and the marker position
                                const distance = userPosition.distanceTo(markerPosition);
                                //console.log("distance", distance);
                                //console.log("radius", radius);

                                // Check if the distance is less than the radius
                                if (distance < radius) {
                                    // The marker is within the radius, so update the content of the div element and add the marker
                                    div.innerHTML = `<b>${data[i].store_type}</b>.` +
                                        `<p>${data[i].store_name}</p>` +
                                        '<button id="buttonSubmit' + i + '">Submit New Discount</button>' +
                                        '<button id="buttonReview' + i + '">Review Discounts</button>';

                                    var marker = L.marker([data[i].store_latitude, data[i].store_longtitude], {
                                        icon: icon,
                                        name: data[i].store_name
                                    });

                                    marker.bindPopup(div);
                                    let buttonSubmit = div.querySelector('#buttonSubmit' + i);
                                    let buttonReview = div.querySelector('#buttonReview' + i);

                                    let storeclicked = data[i];

                                    // submit discount button
                                    buttonSubmit.addEventListener('click', function () {
                                        // alert('Submit Discount!');
                                        //console.log('storeID = ', storeidclicked, "store Name = ", storenameclicked);
                                        $.ajax({
                                            type: 'POST',
                                            url: '/submit_disc',
                                            data: { storeclicked: storeclicked },
                                            success: function (response) {
                                                // alert('Submit Discount!') 
                                                window.location.href = 'http://localhost:5000/submit_disc';
                                            }
                                        })
                                    });

                                    // reviews button
                                    buttonReview.addEventListener('click', function () {
                                        // alert('Submit Discount!');
                                        //console.log('storeID = ', storeidclicked, "store Name = ", storenameclicked);
                                        $.ajax({
                                            type: 'POST',
                                            url: '/submit_disc',
                                            data: { storeclicked: storeclicked },
                                            success: function (response) {
                                                // alert('Review Discount!') 
                                                window.location.href = 'http://localhost:5000/reviews';
                                            }
                                        })
                                    });

                                    markerClusterGroup.addLayer(marker);

                                } else {
                                    // The marker is within the radius, so update the content of the div element and add the marker
                                    div.innerHTML = `<b>${data[i].store_type}</b>.` + `<p>${data[i].store_name}</p>`;

                                    var marker = L.marker([data[i].store_latitude, data[i].store_longtitude], {
                                        icon: icon,
                                        name: data[i].store_name
                                    });

                                    //console.log("marker", marker.getLatLng);
                                    marker.bindPopup(div);
                                    markerClusterGroup.addLayer(marker);

                                }
                                //console.log(markerClusterGroup);
                            }


                            $.ajax({
                                url: "http://localhost:5000/disc_stores",
                                dataType: "json",


                                success: function (results) {
                                    var discStores = results[0]; // stores
                                    console.log(discStores);
                                    var discStoreMarkers = [];
                                    if (discStores.length > 0) {
                                        for (i = 0; i < discStores.length; i++) {
                                            markerClusterGroup.getLayers().forEach(function (marker) {
                                                if (marker._latlng.lat === discStores[i].store_latitude && marker._latlng.lng === discStores[i].store_longtitude) {
                                                    marker.setIcon(discIcon);
                                                    marker.name = discStores[i].store_name;
                                                    discStoreMarkers.push(marker);
                                                }
                                            });
                                        }
                                        markerClusterGroup.addLayers(discStoreMarkers);
                                    }
                                }

                            })

                            map.addLayer(markerClusterGroup);

                        } else {
                            $('#discounts-list').append(
                                `<h4 class="alert alert-danger mt-4">No Discounts yet in this store. Try later.</h4>`
                            );
                        }


                        // Create a custom search control that extends the default L.Control.Search control
                        L.Control.Search = L.Control.extend({
                            onAdd:
                                function (map) {
                                    var searchContainer = L.DomUtil.create('div', 'search-container');
                                    var searchInput = L.DomUtil.create('input', 'search-input', searchContainer);
                                    searchInput.type = 'text';
                                    searchInput.placeholder = 'Search for store';
                                    searchInput.addEventListener('keyup', function (e) {
                                        // Only search when the user presses the enter key
                                        if (e.key === 'Enter') {

                                            var searchValue = searchInput.value;
                                            if (!searchValue) {
                                                markerClusterGroup.getLayers().forEach(function (marker) {
                                                    marker.setOpacity(1);
                                                });
                                                map.addLayer(markerClusterGroup);
                                                return;
                                            }
                                            var foundMarker;

                                            markerClusterGroup.getLayers().forEach(function (marker) {
                                                marker.setOpacity(0);
                                                if (marker.options.name.toLowerCase().includes(searchValue.toLowerCase())) {
                                                    marker.setOpacity(1);
                                                    foundMarker = marker;
                                                    foundClusterGroup.addLayer(marker);
                                                    map.setView(foundMarker.getLatLng(), 15);
                                                    foundMarker.openPopup();
                                                    //return false; // break the loop
                                                }
                                            });
                                            if (foundMarker) {
                                                // Zoom to the found marker
                                                map.setView(foundMarker.getLatLng(), 15);
                                                foundMarker.openPopup();
                                            } else {
                                                alert('Store not found');
                                            }


                                            map.removeLayer(markerClusterGroup);
                                            map.addLayer(foundClusterGroup);

                                        };
                                    })

                                    //var searchContainer2 = L.DomUtil.create('div', 'search-container2');
                                    var searchInput2 = L.DomUtil.create('input', 'search-input', searchContainer);
                                    searchInput2.type = 'text';
                                    searchInput2.placeholder = 'Search for discount ';
                                    searchInput2.addEventListener('keyup', function (z) {
                                        // Only search when the user presses the enter key
                                        if (z.key === 'Enter') {
                                            var searchValue2 = searchInput2.value;
                                            //if (!searchValue2) return;

                                            if (!searchValue2) {
                                                markerClusterGroup.getLayers().forEach(function (marker) {
                                                    marker.setOpacity(1);
                                                });
                                                map.addLayer(markerClusterGroup);
                                                return;
                                            }

                                            $.ajax({
                                                url: "http://localhost:5000/searchbar",
                                                dataType: "json",
                                                success: function (results) {
                                                    const filteredDiscs = results.filter(item => item.category_name.toLowerCase().includes(searchValue2.toLowerCase()) && item.counter !== null);
                                                    console.log(filteredDiscs);
                                                    if (filteredDiscs.length) {
                                                        markerClusterGroup.getLayers().forEach(function (marker) {
                                                            marker.setOpacity(0);
                                                        });
                                                        filteredDiscs.forEach(function (row) {
                                                            var coordlat = row.store_latitude;
                                                            var coordlng = row.store_longtitude;
                                                            var foundMarker;

                                                            markerClusterGroup.getLayers().forEach(function (marker) {
                                                                if (coordlat === marker._latlng.lat && coordlng === marker._latlng.lng) {
                                                                    foundMarker = marker;
                                                                    foundMarker.setOpacity(1);
                                                                    // For last question

                                                                    discStoresClusterGroup.addLayer(foundMarker);
                                                                    map.setView(foundMarker.getLatLng(), 15);
                                                                    foundMarker.openPopup();
                                                                }
                                                            });
                                                            if (!foundMarker) {
                                                                foundMarker = L.marker([coordlat, coordlng]);
                                                                markerClusterGroup.addLayer(foundMarker);
                                                            }

                                                            // foundMarker.setOpacity(1);
                                                            // foundMarker.openPopup();
                                                        });
                                                        //map.addLayer(markerClusterGroup);
                                                        map.removeLayer(markerClusterGroup);
                                                        map.addLayer(discStoresClusterGroup);

                                                    }
                                                }
                                            });




                                        }
                                    });


                                    return searchContainer;

                                }

                        });

                        var searchControl = new L.Control.Search({
                            layer: foundClusterGroup, discStoresClusterGroup,// markerClusterGroup
                            propertyName: 'name',
                            circleLocation: false,
                            zoom: 12
                        });
                        map.addControl(searchControl);

                    });

                } else {
                    alert('Sorry, no position available.');
                }
                // to ensure the map is created only once
                mapinit = true;

            }
        },



        // to stop the animation of loading
        complete: function () {
            $("#loading-container").hide();
        },
        error: function (error) {
            console.log(error);
        }

    });

});



