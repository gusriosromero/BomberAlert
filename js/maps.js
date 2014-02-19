function initialize() {
        var myLatlng = new google.maps.LatLng(-27.342799,-55.86396);
        var mapOptions = {
          zoom: 8,
          center: myLatlng
        };
        var styles = [
          {
            stylers: [
              { hue: "#00ffe6" },
              { saturation: -20 }
            ]
          },{
            // featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { visibility: "simplified" }
            ]
          },{
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ];

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        map.setOptions({styles: styles});

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h2 id="firstHeading" class="firstHeading">Puerto Encaranacion</h2>'+
            '<div id="bodyContent">'+
            '<p><b>Encarnacion</b>, y aqui va toda la info... </br>'+
            '<b>Tel</b> </br> ' +
            '<b>Direccion</b>' +
            '</p>'+
            '<p>Mas Informacion en: <a href="http://www.aduanas.gov.py">Aduanas Py</a>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Uluru (Ayers Rock)'
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);