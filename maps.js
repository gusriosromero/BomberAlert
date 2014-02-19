var markers = [
        ['Bondi Beach', -33.890542, 151.274856],
        ['Coogee Beach', -33.923036, 151.259052],
        ['Cronulla Beach', -34.028249, 151.157507],
        ['Manly Beach', -33.80010128657071, 151.28747820854187],
        ['Maroubra Beach', -33.950198, 151.259302]
    ];

function initializeMaps() { 
    var latlng = new google.maps.LatLng(-33.92, 151.25);
    var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),myOptions);
    var infowindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < markers.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(markers[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

// google.maps.event.addDomListener(window, 'load', initializeMaps);




// function initialize() {
//         var myLatlng = new google.maps.LatLng(-27.342799,-55.86396);
//         var mapOptions = {
//           zoom: 8,
//           center: myLatlng
//         };
//         var styles = [
//           {
//             stylers: [
//               { hue: "#00ffe6" },
//               { saturation: -20 }
//             ]
//           },{
//             // featureType: "road",
//             elementType: "geometry",
//             stylers: [
//               { lightness: 100 },
//               { visibility: "simplified" }
//             ]
//           },{
//             featureType: "road",
//             elementType: "labels",
//             stylers: [
//               { visibility: "off" }
//             ]
//           }
//         ];

//         var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//         map.setOptions({styles: styles});

//         var contentString = '<div id="content">'+
//             '<div id="siteNotice">'+
//             '</div>'+
//             '<h2 id="firstHeading" class="firstHeading">Puerto Encaranacion</h2>'+
//             '<div id="bodyContent">'+
//             '<p><b>Encarnacion</b>, y aqui va toda la info... </br>'+
//             '<b>Tel</b> </br> ' +
//             '<b>Direccion</b>' +
//             '</p>'+
//             '<p>Mas Informacion en: <a href="http://www.aduanas.gov.py">Aduanas Py</a>'+
//             '</div>'+
//             '</div>';

//         var infowindow = new google.maps.InfoWindow({
//             content: contentString
//         });

//         var marker = new google.maps.Marker({
//             position: myLatlng,
//             map: map,
//             title: 'Uluru (Ayers Rock)'
//         });
//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.open(map,marker);
//         });
//       }

//       google.maps.event.addDomListener(window, 'load', initialize);