if ('geolocation' in navigator) {

    const watchID = navigator.geolocation.watchPosition((position) => {
        var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 16
        );
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
   
        var Icon = L.Icon.extend({
        options: {
            //shadowUrl: 'leaf-shadow.png',
            //iconSize:     [38, 95],
            //shadowSize:   [50, 64],
            iconAnchor:   [25, 16],
        // shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        }
        });

        var superIcon = new Icon({iconUrl: 'super.png'});
        var miniIcon = new Icon({iconUrl: 'mini.png'}); 
        var manIcon = new Icon({iconUrl: 'man.png'}); 

        var marker = L.marker([38.24, 21.73], {icon: miniIcon}).addTo(map);
        marker.bindPopup("<b>Minimarket</b>.").openPopup();

        var marker = L.marker([38.2466, 21.7345], {icon: superIcon}).addTo(map);
        marker.bindPopup("<b>Supermarket</b>.").openPopup();
        var marker = L.marker([position.coords.latitude, position.coords.longitude], {icon: manIcon}).addTo(map);
        marker.bindPopup("<b>You are here</b>.").openPopup();

        var circle = L.circle([position.coords.latitude, position.coords.longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.1,
            radius: 50
        }).addTo(map);
    
    });

} else {
    alert('Sorry, no position available.');
}


var popup = L.popup()
    .setLatLng([38.24, 21.73])
    .setContent("I am a standalone popup.")
    .openOn(map);


function onMapClick(e) {
     popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
