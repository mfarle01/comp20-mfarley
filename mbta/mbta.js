
      function initMap() {
      	var map;
        var options = {
          center: {lat: 42.352271, lng: -71.05524200000001},
          zoom: 14
        };
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
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-alfcl',
        });
        stationarr.push(Alewife.position);
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
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-davis'
        });
        stationarr.push(Davis.position);
        Davis.setMap(map);
        gettraindata(Davis);


        var Porter = new google.maps.Marker({
          position: {lat:  42.3884 , lng: -71.11914899999999},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-portr'
        });
        stationarr.push(Porter.position);
        Porter.setMap(map);
        gettraindata(Porter);

        var Harvard = new google.maps.Marker({
          position: {lat: 42.373362, lng: -71.118956},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-harsq'
        });
        stationarr.push(Harvard.position);
        Harvard.setMap(map);
        gettraindata(Harvard);


        var Central = new google.maps.Marker({
          position: {lat: 42.365486, lng:  -71.103802},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-cntsq'
        });
        stationarr.push(Central.position);
        Central.setMap(map);
        gettraindata(Central);


        var Kendall = new google.maps.Marker({
          position: {lat: 42.36249079, lng:  -71.08617653},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-knncl'
        });
        stationarr.push(Kendall.position);
        Kendall.setMap(map);
        gettraindata(Kendall);

        var Charles = new google.maps.Marker({
          position: {lat: 42.361166, lng:  -71.070628},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-chmnl'
        });
        stationarr.push(Charles.position);
        Charles.setMap(map);
        gettraindata(Charles);
  

        var Park = new google.maps.Marker({
          position: {lat: 42.35639457, lng:  -71.0624242},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-pktrm'
        });
        stationarr.push(Park.position);
        Park.setMap(map);
        gettraindata(Park);

        var Crossing = new google.maps.Marker({
          position: {lat: 42.355518, lng:  -71.060225},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-dwnxg'
        });
        stationarr.push(Crossing.position);
        Crossing.setMap(map);
        gettraindata(Crossing);


        var South = new google.maps.Marker({
          position: {lat: 42.352271, lng:  -71.05524200000001},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-sstat'
        });
        stationarr.push(South.position);
        South.setMap(map);
        gettraindata(South);

        var Broadway = new google.maps.Marker({
          position: {lat: 42.342622, lng:  -71.056967},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-brdwy'
        });
        stationarr.push(Broadway.position);
        Broadway.setMap(map);
        gettraindata(Broadway);

        var Andrew = new google.maps.Marker({
          position: {lat: 42.330154, lng: -71.057655},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-andrw'
        });
        stationarr.push(Andrew.position);
        Andrew.setMap(map);
        gettraindata(Andrew);

        var redbreak = [];

        var JFK = new google.maps.Marker({
          position: {lat: 42.320685, lng: -71.052391},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-jfk'
        });
        stationarr.push(JFK.position);
        redbreak.push(JFK.position);
        JFK.setMap(map);
        gettraindata(JFK);

        var NorQuincy = new google.maps.Marker({
          position: {lat: 42.275275, lng: -71.029583},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-nqncy'
        });

        redbreak.push(NorQuincy.position);
        NorQuincy.setMap(map);
        gettraindata(NorQuincy);


        var Wollaston = new google.maps.Marker({
          position: {lat: 42.2665139, lng: -71.0203369},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-wlsta'
        });

        redbreak.push(Wollaston.position);
        Wollaston.setMap(map);
        gettraindata(Wollaston);
       

        var Qcenter = new google.maps.Marker({
          position: {lat: 42.251809, lng: -71.005409},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-qnctr'
        });

        redbreak.push(Qcenter.position);
        Qcenter.setMap(map);
        gettraindata(Qcenter);

        var Qadams = new google.maps.Marker({
          position: {lat: 42.233391, lng: -71.007153},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-qamnl'
        });

        redbreak.push(Qadams.position);
        Qadams.setMap(map);
        gettraindata(Qadams);

    
        var Braintree = new google.maps.Marker({
          position: {lat: 42.2078543, lng: -71.0011385},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-brntn'
        });

        redbreak.push(Braintree.position);
        Braintree.setMap(map);
        gettraindata(Braintree);


        var Savhill = new google.maps.Marker({
          position: {lat: 42.31129, lng: -71.053331},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-shmnl'
        });
        stationarr.push(Savhill.position);
        Savhill.setMap(map);
        gettraindata(Savhill);

        var Fieldscorn = new google.maps.Marker({
          position: {lat: 42.300093, lng: -71.061667},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-fldcr'
        });
        stationarr.push(Fieldscorn.position);
        Fieldscorn.setMap(map);
        gettraindata(Fieldscorn);

        var Shawmut = new google.maps.Marker({
          position: {lat: 42.29312583, lng: -71.06573796000001},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-smmnl'
        });
        stationarr.push(Shawmut.position);
        Shawmut.setMap(map);
        gettraindata(Shawmut);
        

        var Ashmont = new google.maps.Marker({
          position: {lat: 42.284652, lng: -71.06448899999999},
          title: 'Hello World!',
          icon: 'icons8-arrow-pointing-down-26.png',
          stop_id: 'place-asmnl'
        });
        stationarr.push(Ashmont.position);
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

            var infowindow = new google.maps.InfoWindow({
          		content: 'Closest T stop is'
        	});

            var marker = new google.maps.Marker({
          		position: pos,
          		map: map,
         	 	title: 'Hello World!'
        	});
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
