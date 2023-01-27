$(document).ready(function () {
    
    if ('geolocation' in navigator) {
        const watchID = navigator.geolocation.watchPosition((position) => {
            var Icon = L.Icon.extend({
                options: {
                    iconAnchor: [25, 16]
                }
            });

            var icon;
            var superIcon = new Icon({ iconUrl: '../img/super.png' });
            var miniIcon = new Icon({ iconUrl: 'img/mini.png' });
            // var manIcon = new Icon({ iconUrl: 'man.png' });

            var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

            //38.236023, 21.737156 Patra
            var map = new L.map('map').addLayer(osm).setView([position.coords.latitude, position.coords.longitude], 15);
           

            $.ajax({
                url: "http://localhost:5000/stores",
                dataType: "json",

                beforeSend: function() {
                    $("#loading-container").show();
                },

                success: function (data) {

                    console.log(data);

                    var markerClusterGroup = L.markerClusterGroup();
                    // Set the radius (in meters)
                    const radius = 3000;

                    console.log(data.length);
                    // Loop through the data.elements array
                    if (data.length > 0) {

                        for (i = 0; i < data.length; i++) {
                            console.log(data[i]);
                            // Create the div element and the marker object
                            var div = document.createElement('div');

                            // Update the content and position of the div element and marker object
                            if (data[i].store_type === 'supermarket') {
                                icon = superIcon;
                            } else if (data[i].store_type === 'convenience') {
                                icon = miniIcon;
                            }
                            console.log(icon);

                            // Get the marker position
                            const markerPosition = L.latLng(data[i].store_latitude, data[i].store_longtitude);
                            console.log("markerPosition", markerPosition);

                            // Get the user's position
                            const userPosition = L.latLng(position.coords.latitude, position.coords.longitude);
                            console.log('user position', userPosition);

                            // Calculate the distance between the user's position and the marker position
                            const distance = userPosition.distanceTo(markerPosition);
                            console.log("distance", distance);
                            console.log("radius", radius);

                            // Check if the distance is less than the radius
                            if (distance < radius) {
                                // The marker is within the radius, so update the content of the div element and add the marker
                                div.innerHTML = `<b>${data[i].store_type}</b>.` + `<p>${data[i].store_name}</p>` + '<button id="button' + i + '">Click me</button>';

                                var marker = L.marker([data[i].store_latitude, data[i].store_longtitude], {
                                    icon: icon,
                                    name: data[i].store_name
                                });

                                console.log("marker", marker);

                                marker.bindPopup(div);

                                var button = div.querySelector('#button' + i);
                                button.addEventListener('click', function () {
                                    alert('Supermarket was clicked!');
                                });

                                markerClusterGroup.addLayer(marker);

                            } else {
                                // The marker is within the radius, so update the content of the div element and add the marker
                                div.innerHTML = `<b>${data[i].store_type}</b>.` + `<p>${data[i].store_name}</p>`;

                                var marker = L.marker([data[i].store_latitude, data[i].store_longtitude], {
                                    icon: icon,
                                    name: data[i].store_name
                                });

                                console.log("marker", marker);

                                marker.bindPopup(div);

                                markerClusterGroup.addLayer(marker);
                            }

                        }

                        // Add the markerClusterGroup to the map
                        console.log('added i guess');

                        map.addLayer(markerClusterGroup);

                    } else {
                        $('#discounts-list').append(
                            `<h4 class="alert alert-danger mt-4">No Discounts yet in this store. Try later.</h4>`
                        );
                    }


                    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                    marker.bindPopup("<b>You are here</b>.").openPopup();
                    L.circle([position.coords.latitude, position.coords.longitude], 100).addTo(map);

                    var circle = L.circle([position.coords.latitude, position.coords.longitude], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.1,
                        radius: 500
                    }).addTo(map);

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
    }else {
        alert('Sorry, no position available.');

    }

});