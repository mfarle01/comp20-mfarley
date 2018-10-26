
      function initMap() {
      	var map;
        var options = {
          center: {lat: 42.352271, lng: -71.05524200000001},
          zoom: 14
        };


        function haversineDistance(lat,lng, Marker2) {
                  function toRad(x) {
                        return x * Math.PI / 180;
                  }

                var lon1 = lng;
                //console.log("lon1 is " +lon1);
                var lat1 = lat;
                //console.log(lat1);
                var lon2 = Marker2.lng;
                //console.log(lon2);
                var lat2 = Marker2.lat;
                //console.log(lat2);

                var R = 6371; // km

                var x1 = lat2 - lat1;
                var dLat = toRad(x1);
                var x2 = lon2 - lon1;
                var dLon = toRad(x2)
                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                d /= 1.60934;
                return d;
        }

        function gettraindata(Marker){
        //console.log("in function");

        var request = new XMLHttpRequest();
        //console.log(Marker.stop_id);
        url = "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=" + Marker.stop_id;
        //console.log(url);
        request.open("GET", url, true);

        request.onreadystatechange = function() {
          if (request.readyState == 4 && request.status == 200) {
              //console.log("in if statement");
              dat = request.responseText;
              //console.log(dat);
              loc = JSON.parse(dat);
              //console.log(loc);
              print = "Upcoming departures: ";
              //console.log("loc" + loc.data.length);
              for (var i = 0; i < loc.data.length; i++) {
                //console.log("in for loop");
                //elem = document.getElementById("departure_time");
                  elem = loc.data[i].attributes;
                  if(elem != null)
                  {
                    //console.log("in not null if");
                      check = loc.data[i].attributes.departure_time;
                      if(check ==  null){
                        print += "time not aval ";
                      }else{
                        //console.log("in else statement");
                        print += loc.data[i].attributes.departure_time;
                        print += " ";
                        //console.log(print);
                      }
                
                  }else{
                    //console.log("in main else");
                  }

                }
                //print = "hello";
              //console.log("print is " + print);
              var infowind = new google.maps.InfoWindow({
                  content: print
              });
              //console.log(infowind.content);
              Marker.addListener('click', function() {
                      infowind.open(map, Marker);
                });
              //return "hi";
              elem = document.getElementById("location");
              /// do stuff with data here
            }
            else if (request.readyState == 4 && request.status != 200) {
                //console.log("in else statement");
              // think 404 or 500
                document.getElementById("location").innerHTML = "<p>Whoops, something went terribly wrongo</p>";
              }

          };

          request.send(null);
      }
        map = new google.maps.Map(document.getElementById('map'), options);
        stationarr = [];

         var Alewife = new google.maps.Marker({
          position: {lat: 42.395428, lng: -71.142483},
          title: 'Alewife',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-alfcl',
        });
        var coords = {name:'Alewife',lat: 42.395428, lng: -71.142483};
        stationarr.push(coords);
        //console.log(Alewife.position);
        //console.log(stationarr[0]);
        Alewife.setMap(map);
        gettraindata(Alewife);
        // var infowindA = new google.maps.InfoWindow({
        //      content: gettraindata(Alewife)
        //   });
        // console.log(infowindA.content);
        //Alewife.addListener('click', function() {
          //		infowindA.open(map, Alewife);
        	//});

        var Davis = new google.maps.Marker({
          position: {lat: 42.39674 , lng: -71.121815},
          title: 'Davis-Square',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-davis'
        });
        var coords = {name:'Davis' ,lat: 42.39674 , lng: -71.121815};
        stationarr.push(coords);
        Davis.setMap(map);
        gettraindata(Davis);


        var Porter = new google.maps.Marker({
          position: {lat:  42.3884 , lng: -71.11914899999999},
          title: 'Porter-Square',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-portr'
        });
        var coords = {name:'Porter',lat:  42.3884 , lng: -71.11914899999999};
        stationarr.push(coords);
        Porter.setMap(map);
        gettraindata(Porter);

        var Harvard = new google.maps.Marker({
          position: {lat: 42.373362, lng: -71.118956},
          title: 'Harvard-Square',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-harsq'
        });
        var coords = {name:'Harvard',lat: 42.373362, lng: -71.118956};
        stationarr.push(coords);
        Harvard.setMap(map);
        gettraindata(Harvard);


        var Central = new google.maps.Marker({
          position: {lat: 42.365486, lng:  -71.103802},
          title: 'Central-Square',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-cntsq'
        });
        var coords = {name:'Central',lat: 42.365486, lng:  -71.103802};
        stationarr.push(coords);
        Central.setMap(map);
        gettraindata(Central);


        var Kendall = new google.maps.Marker({
          position: {lat: 42.36249079, lng:  -71.08617653},
          title: 'Kendall-Square',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-knncl'
        });
        var coords = {name:'Kendall',lat: 42.36249079, lng:  -71.08617653};
        stationarr.push(coords);
        Kendall.setMap(map);
        gettraindata(Kendall);

        var Charles = new google.maps.Marker({
          position: {lat: 42.361166, lng:  -71.070628},
          title: 'Charles/MGH',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-chmnl'
        });
        var coords = {name:'Charles',lat: 42.361166, lng:  -71.070628};
        stationarr.push(coords);
        Charles.setMap(map);
        gettraindata(Charles);
  

        var Park = new google.maps.Marker({
          position: {lat: 42.35639457, lng:  -71.0624242},
          title: 'Park-Street',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-pktrm'
        });
        var coords = {name:'Park',lat: 42.35639457, lng:  -71.0624242};
        stationarr.push(coords);
        Park.setMap(map);
        gettraindata(Park);

        var Crossing = new google.maps.Marker({
          position: {lat: 42.355518, lng:  -71.060225},
          title: 'Downtown-Crossing',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-dwnxg'
        });
        var coords = {name:'Downtown-Crossing',lat: 42.355518, lng:  -71.060225};
        stationarr.push(coords);
        Crossing.setMap(map);
        gettraindata(Crossing);


        var South = new google.maps.Marker({
          position: {lat: 42.352271, lng:  -71.05524200000001},
          title: 'South-Station',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-sstat'
        });
        var coords = {name:'South-Station',lat: 42.352271, lng:  -71.05524200000001};
        stationarr.push(coords);
        South.setMap(map);
        gettraindata(South);

        var Broadway = new google.maps.Marker({
          position: {lat: 42.342622, lng:  -71.056967},
          title: 'Broadway',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-brdwy'
        });
        var coords = {name:'Broadway',lat: 42.342622, lng:  -71.056967};
        stationarr.push(coords);
        Broadway.setMap(map);
        gettraindata(Broadway);

        var Andrew = new google.maps.Marker({
          position: {lat: 42.330154, lng: -71.057655},
          title: 'Andrew',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-andrw'
        });
        var coords = {name:'Andrew',lat: 42.330154, lng: -71.057655};
        stationarr.push(coords);
        Andrew.setMap(map);
        gettraindata(Andrew);

        var redbreak = [];

        var JFK = new google.maps.Marker({
          position: {lat: 42.320685, lng: -71.052391},
          title: 'JFK',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-jfk'
        });
        var coords = {name:'JFK',lat: 42.320685, lng: -71.052391};
        stationarr.push(coords);
        redbreak.push(JFK);
        JFK.setMap(map);
        gettraindata(JFK);

        var NorQuincy = new google.maps.Marker({
          position: {lat: 42.275275, lng: -71.029583},
          title: 'North-Quincy',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-nqncy'
        });

        redbreak.push(NorQuincy);
        var coords = {name:'North-Quincy',lat: 42.275275, lng: -71.029583};
        stationarr.push(coords);
        NorQuincy.setMap(map);
        gettraindata(NorQuincy);


        var Wollaston = new google.maps.Marker({
          position: {lat: 42.2665139, lng: -71.0203369},
          title: 'Wollaston',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-wlsta'
        });

        redbreak.push(Wollaston);
        var coords = {name:'Wollaston',lat: 42.2665139, lng: -71.0203369};
        stationarr.push(coords);
        Wollaston.setMap(map);
        gettraindata(Wollaston);
       

        var Qcenter = new google.maps.Marker({
          position: {lat: 42.251809, lng: -71.005409},
          title: 'Quincy-center',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-qnctr'
        });

        redbreak.push(Qcenter);
        var coords = {name:'Quincy-center',lat: 42.251809, lng: -71.005409};
        stationarr.push(coords);
        Qcenter.setMap(map);
        gettraindata(Qcenter);

        var Qadams = new google.maps.Marker({
          position: {lat: 42.233391, lng: -71.007153},
          title: 'Quincy-adams',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-qamnl'
        });

        redbreak.push(Qadams);
        var coords = {name:'Quincy-adams',lat: 42.233391, lng: -71.007153};
        stationarr.push(coords);
        Qadams.setMap(map);
        gettraindata(Qadams);

    
        var Braintree = new google.maps.Marker({
          position: {lat: 42.2078543, lng: -71.0011385},
          title: 'Braintree',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-brntn'
        });

        redbreak.push(Braintree);
        var coords = {name:'Braintree',lat: 42.2078543, lng: -71.0011385};
        stationarr.push(coords);
        Braintree.setMap(map);
        gettraindata(Braintree);


        var Savhill = new google.maps.Marker({
          position: {lat: 42.31129, lng: -71.053331},
          title: 'Savhill',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-shmnl'
        });
        var coords = {name:'Savhill',lat: 42.31129, lng: -71.053331};
        stationarr.push(coords);
        Savhill.setMap(map);
        gettraindata(Savhill);

        var Fieldscorn = new google.maps.Marker({
          position: {lat: 42.300093, lng: -71.061667},
          title: 'Fieldscorn',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-fldcr'
        });
        var coords = {name:'Fieldscorn',lat: 42.300093, lng: -71.061667};
        stationarr.push(coords);
        Fieldscorn.setMap(map);
        gettraindata(Fieldscorn);

        var Shawmut = new google.maps.Marker({
          position: {lat: 42.29312583, lng: -71.06573796000001},
          title: 'Shawmut',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-smmnl'
        });
        var coords = {name:'Shawmut',lat: 42.29312583, lng: -71.06573796000001};
        stationarr.push(coords);
        Shawmut.setMap(map);
        gettraindata(Shawmut);
        

        var Ashmont = new google.maps.Marker({
          position: {lat: 42.284652, lng: -71.06448899999999},
          title: 'Ashmont',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-asmnl'
        });
        var coords = {name:'Ashmont',lat: 42.284652, lng: -71.06448899999999};
        stationarr.push(coords);
        Ashmont.setMap(map);
        gettraindata(Ashmont);


        var redpath = [
        {lat: 42.395428, lng: -71.142483},
        {lat: 42.39674 , lng: -71.121815},
        {lat:  42.3884 , lng: -71.11914899999999},
        {lat: 42.373362, lng: -71.118956},
        {lat: 42.365486, lng:  -71.103802},
        {lat: 42.36249079, lng:  -71.08617653},
        {lat: 42.361166, lng:  -71.070628},
        {lat: 42.35639457, lng:  -71.0624242},
        {lat: 42.355518, lng:  -71.060225},
        {lat: 42.352271, lng:  -71.05524200000001},
        {lat: 42.342622, lng:  -71.056967},
        {lat: 42.330154, lng: -71.057655},
        {lat: 42.320685, lng: -71.052391},
        {lat: 42.31129, lng: -71.053331},
        {lat: 42.300093, lng: -71.061667},
        {lat: 42.29312583, lng: -71.06573796000001},
        {lat: 42.284652, lng: -71.06448899999999}
        ];
        var redbreak = [
        {lat: 42.320685, lng: -71.052391},
        {lat: 42.275275, lng: -71.029583},
        {lat: 42.2665139, lng: -71.0203369},
        {lat: 42.251809, lng: -71.005409},
        {lat: 42.233391, lng: -71.007153},
        {lat: 42.2078543, lng: -71.0011385}
        ];

        var flightPath = new google.maps.Polyline({
          		path: redpath,
          		geodesic: true,
          		strokeColor: '#FF0000',
          		strokeOpacity: 1.0,
          		strokeWeight: 2
        	});
        var flightbreak = new google.maps.Polyline({
          		path: redbreak,
          		geodesic: true,
          		strokeColor: '#FF0000',
          		strokeOpacity: 1.0,
          		strokeWeight: 2
        	});

        // var i;
        // for(i = 0; i < stationarr.length; i++)
        // {
        // 	var flightPath = new google.maps.Polyline({
        //   		path: stationarr[i],
        //   		geodesic: true,
        //   		strokeColor: '#FF0000',
        //   		strokeOpacity: 1.0,
        //   		strokeWeight: 2
        // 	});

        flightPath.setMap(map);
        flightbreak.setMap(map);


        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
            //distance = (float) pos.distanceTo(Alewife.position);
            //console.log(distance);

            //var distance = google.maps.geometry.spherical.computeDistanceBetween(pos,{lat: 42.39674 , lng: -71.121815}); 
            //var contentsring = ''    

            var marker = new google.maps.Marker({
          		position: pos,
          		map: map,
         	 	  title: 'Hello World!'
        	 });
            stationdistance = [];
            //console.log(stationarr.length);
            small = 0;
            for(var i = 0; i < stationarr.length; i++){
            //   //console.log(stationarr[i].title);
            //   var mark1 = stationarr[i];
            //   var pos1 = mark1.position;
            //   //console.log(pos1);
            //   var lat = pos1.lat;
            //   //console.log(lat);
            //   var lng = pos1.lng;
            //   //console.log(lng);
            //   var title = mark1.title;
            //   console.log(Alewife.position);
              var stationmiles = {name: stationarr[i].name, miles: haversineDistance(stationarr[i].lat, stationarr[i].lng, pos)};

            //   console.log("miles: " + stationmiles.miles);
                stationdistance.push(stationmiles);
                if(stationdistance[i].miles < stationdistance[small].miles){
                    small = i;
              }
            }

            //var mark1 = stationarr[i];
            //console.log(mark1);
          var infowindow = new google.maps.InfoWindow({
              content: 'Closest T stop is ' + stationdistance[small].name
          });
          var pos1 = {
              lat: stationarr[small].lat,
              lng: stationarr[small].lng
            };

          var closest  = [
          pos1,
          pos
          ];

          var TPath = new google.maps.Polyline({
              path: closest,
              geodesic: true,
              strokeColor: '#FFF000',
              strokeOpacity: 1.0,
              strokeWeight: 2
          });

          TPath.setMap(map);



        	//marker.setMap(map);
        	marker.addListener('click', function() {
          		infowindow.open(map, marker);
        	});


          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);


      }
