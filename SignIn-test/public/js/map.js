$(document).ready(function () {
    
    var greenIcon = L.icon({
        iconUrl: 'https://cdn.leafletjs.com/leaflet/v1.0.0-beta.2/images/marker-icon-2x-green.png',
        shadowUrl: 'https://cdn.leafletjs.com/leaflet/v1.0.0-beta.2/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });


    $.ajax({
        url: "http://localhost:5000/stores",
        dataType: "json",

        beforeSend: function () {
            $("#loading-container").show();
        },

        success: function (results) {
            var data = results[0]; // stores
            var role = results[1]; // user role
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

                        // var container = L.DomUtil.get('map');
                        // if(container != null){
                        //     container._leaflet_id = null;
                        //     console.log("container of map = null ");
                        // }

                        //38.236023, 21.737156 Patra
                        var map = new L.map('map').addLayer(osm).setView([position.coords.latitude, position.coords.longitude], 15);

                        //console.log(map);
                        //console.log(data);

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

                                    // Update the content and position of the div element and marker object
                                    if (data[i].store_type === 'supermarket') {
                                        icon = superIcon;
                                    } else if (data[i].store_type === 'convenience') {
                                        icon = miniIcon;
                                    }
                                    //console.log(icon);  
                                    

                                // Get the marker position
                                const markerPosition = L.latLng(data[i].store_latitude, data[i].store_longtitude);
                                //console.log("markerPosition", markerPosition);

                                // Get the user's position
                                const userPosition = L.latLng(38.236023, 21.737156);
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

                                    // For last question
                                    if (role === 'admin') {
                                        div.innerHTML += '<button type="button" data-toggle="modal" data-target="#exampleModal" id="buttonDelete' + i + '">Delete Discounts</button>';
                                    }

                                    

                                    var marker = L.marker([data[i].store_latitude, data[i].store_longtitude], {
                                        icon: icon,
                                        name: data[i].store_name
                                    });



                                    //console.log("marker", marker);

                                    marker.bindPopup(div);
                                    let buttonSubmit = div.querySelector('#buttonSubmit' + i);
                                    let buttonReview = div.querySelector('#buttonReview' + i);
                                    let buttonDelete = div.querySelector('#buttonDelete' + i);
                                    let storeidclicked = data[i].storeID;
                                    let storenameclicked = data[i].store_name;
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

                                    // last for delete discount from admin
                                    if (role === "admin") {
                                        buttonDelete.addEventListener('click', function () {
                                            // alert('Submit Discount!');
                                            //console.log('storeID = ', storeidclicked, "store Name = ", storenameclicked);
                                            $.ajax({
                                                type: 'POST',
                                                url: '/submit_disc',
                                                data: { storeclicked: storeclicked },
                                                success: function (response) {
                                                    alert('Delete Discount!')
                                                    window.location.href = 'http://localhost:5000/map';
                                                }
                                            })
                                        });

                                    }

                                    markerClusterGroup.addLayer(marker);

                                    
                                   


                                } else {
                                    // The marker is within the radius, so update the content of the div element and add the marker
                                    // div.innerHTML = `<b>${data[i].store_type}</b>.` + `<p>${data[i].store_name}</p>` + '<button id="button' + i + '">Submit Discount</button>';
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

                                // success: function (results) {
                                //     var discStores = results[0]; // stores
                                //     console.log(discStores);
                                //     var discStoreMarker;
                                //     if (discStores.length > 0) {
                                //         for (i = 0; i < discStores.length; i++) {
                                //             markerClusterGroup.getLayers().forEach(function (marker) {
                                //                 if (marker._latlng.lat === discStores[i].store_latitude && marker._latlng.lng === discStores[i].store_longtitude) {
                                //                     marker = L.marker([discStores[i].store_latitude, discStores[i].store_longtitude], {
                                //                         icon: manIcon,
                                //                         name: discStores[i].store_name
                                //                     });
                                                   
                                //                 }
                                //                 console.log(discStoreMarker);
                                //                 if(discStoreMarker){
                                //                     markerClusterGroup.addLayer(discStoreMarker);
                                //                 }
                                //             })

                                //         }
                                        
                                //     }
                                    
                                // }
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

                        var foundClusterGroup = new L.MarkerClusterGroup();
                        var discStoresClusterGroup = new L.MarkerClusterGroup();
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
                            layer: foundClusterGroup,discStoresClusterGroup ,// markerClusterGroup
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






    // onAdd: function (map) {
                            //     var searchContainer = L.DomUtil.create('div', 'search-container');
                            //     var searchInput = L.DomUtil.create('input', 'search-input', searchContainer);
                            //     searchInput.type = 'text';
                            //     searchInput.placeholder = 'Search for store';
                            //     searchInput.addEventListener('keyup', function (e) {
                            //         // Only search when the user presses the enter key
                            //         if (e.key === 'Enter') {
                            //             var searchValue = searchInput.value;
                            //             var foundMarker;
                            //             markerClusterGroup.getLayers().forEach(function (marker) {
                            //                 if (marker.options.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            //                     foundMarker = marker;
                            //                     return false; // break the loop
                            //                 }
                                            
                            //             });
                            //             if (foundMarker) {
                            //                 // Zoom to the found marker
                            //                 map.setView(foundMarker.getLatLng(), 18);
                            //                marker.openPopup();
                                            
                            //             } else {
                            //                 alert('Store not found');
                            //             }
                            //         }
                            //     });
                            //     return searchContainer;
                            // }



                            // else  {
                            //     connection.query(`
                            //     SELECT stores.store_longitude, stores.store_latitude
                            //     FROM stores
                            //     JOIN product ON stores.storeID = product.storeID
                            //     JOIN subcategories ON product.subID = subcategories.subID
                            //     JOIN categories ON subcategories.catID = categories.catID
                            //     JOIN discount ON product.counter = discount.counter
                            //     WHERE categories.category_name = ? AND discount.counter IS NOT NULL;`, [searchValue], function (err, result) {
                            //         if (err) throw err;
                            //         if (result.length) {
                            //             result.forEach(function (row) {
                            //                 var marker = L.marker([row.store_latitude, row.store_longitude]);
                            //                 markerClusterGroup.addLayer(marker);
                            //             });
                            //             map.addLayer(markerClusterGroup);
                            //         } else {
                            //             alert('Store not found');
                            //         }
                            //     });
                            // }



                                            // searchInput2.addEventListener('keyup', function (z) {
                                    //     // Only search when the user presses the enter key
                                    //     if (z.key === 'Enter') {
    
                                    //         var searchValue2 = searchInput2.value;
                                    //         $.ajax({
                                    //             url: "http://localhost:5000/searchbar",
                                    //             dataType: "json",
    
                                    //             success: function (results) {
                                    //                 const filteredDiscs = results.filter(item => item.category_name.toLowerCase().includes(searchValue2.toLowerCase()) && item.counter !== null);
                                    //                 console.log(filteredDiscs);
                                    //                 if (filteredDiscs.length) {

                                    //                     filteredDiscs.forEach(function (row) {
                                    //                         var coordlat = filteredDiscs.store_latitude;
                                    //                         var coordlng = filteredDiscs.store_longtitude;
                                    //                         var foundMarker;
                                    //                         markerClusterGroup.getLayers().forEach(function (marker) {
                                    //                             console.log("Found one");
                                    //                             if (marker._latlng.lat === coordlat && marker._latlng.lng === coordlng) {
                                    //                            // if (marker.options.latitude === coordlat && marker.options.longitude === coordlng) {
                                    //                                 //console.log(marker._latlng.lat, marker._latlng.lng);
                                    //                                 foundMarker = marker;
                                    //                                 console.log("Found one");
                                    //                             }
                                    //                         });
                                    //                         if (foundMarker) {
                                    //                             map.setView(marker.getLatLng(), 15);
                                    //                             foundMarker.bindPopup("I have discount!")
                                    //                             foundMarker.openPopup();

                                    //                         }// } else if (marker._latlng.lat !== coordlat || marker._latlng.lng !== coordlng) {
                                    //                         //     marker.setOpacity(0);
                                    //                         // }

                                    //                         // var marker = L.marker([row.store_latitude, row.store_longtitude]);
                                    //                         // markerClusterGroup.addLayer(marker);
                                    //                     })
                                    //                 }
                                    //                 map.addLayer(markerClusterGroup);

                                    //             }
                                    //         });
                                    //     };
                                    // })