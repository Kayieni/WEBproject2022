// Old name: mapAd // Used in Admin Side
$(document).ready(function () {
    
    
    $.ajax({
        url: "http://localhost:5000/disc_stores",
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
                        var icon;
                        var superIcon = new Icon({ iconUrl: 'img/yellowpin.png', iconSize: [40, 62] });
                        var miniIcon = new Icon({ iconUrl: 'img/yellowpin.png',iconSize: [40, 62] });
                        var discIcon = new Icon({ iconUrl: 'img/redpin.png',iconSize: [50, 62] });
                        // var storeIcon = new Icon({ iconUrl: 'img/super.png' });
                        // var discIcon = new Icon({ iconUrl: 'img/mini.png' });

                        var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

                       

                        //38.236023, 21.737156 Patra
                        var map = new L.map('map').addLayer(osm).setView([position.coords.latitude, position.coords.longitude], 15);

                        //console.log(map);
                        console.log(data);

                        var markerClusterGroup = L.markerClusterGroup();
                        // Set the radius (in meters)
                        const radius = 3000;


                        //console.log(data.length);
                        // Loop through the data.elements array
                        if (data.length > 0) {
                            for (i = 0; i < data.length; i++) {


                                //console.log(data[i]);
                                // Create the div element and the marker object
                                var div = document.createElement('div');

                                // Get the marker position
                                const markerPosition = L.latLng(data[i].store_latitude, data[i].store_longtitude);
                                console.log("markerPosition", markerPosition);

                                // Get the user's position
                                const userPosition = L.latLng(position.coords.latitude, position.coords.longitude);
                                console.log('user position', userPosition);

                                // Calculate the distance between the user's position and the marker position
                                const distance = userPosition.distanceTo(markerPosition);
                                //console.log("distance", distance);
                                //console.log("radius", radius);

                                // Check if the distance is less than the radius
                                
                                    // The marker is within the radius, so update the content of the div element and add the marker
                                    div.innerHTML = `<b>${data[i].store_type}</b>.` +
                                        `<p>${data[i].store_name}</p>` +
                                        '<button id="buttonDelete' + i + '">Delete Discount</button>';

                                    var marker = L.marker([data[i].store_latitude, data[i].store_longtitude], {
                                        icon: discIcon,
                                        name: data[i].store_name
                                    });

                                    //console.log("marker", marker);

                                    marker.bindPopup(div);
                                    let buttonDelete = div.querySelector('#buttonDelete' + i);

                                    buttonDelete.addEventListener('click', function () {
                                        // alert('Submit Discount!');
                                        //console.log('storeID = ', storeidclicked, "store Name = ", storenameclicked);
                                        $.ajax({
                                            type: 'POST',
                                            url: '/admin-review',
                                            data: { storeclicked: storeclicked },
                                            success: function (response) {
                                                // alert('Review Discount!') 
                                                window.location.href = 'http://localhost:5000/admin-review';
                                            }
                                        })
                                    });


                                    let storeidclicked = data[i].storeID;
                                    let storenameclicked = data[i].store_name;
                                    let storeclicked = data[i];



                                    markerClusterGroup.addLayer(marker);


                               
                                //console.log(markerClusterGroup);

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

                           
                        } 
                        
                        map.addLayer(markerClusterGroup);
                    });
                }else {
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



