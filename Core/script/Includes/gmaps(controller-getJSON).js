//INFO WINDOW//
String.prototype.myFormat = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

var markerBauble = '<div class="marker-desc"><h4 class="firstHeading">{0}</h4></div>';
//INFO WINDOW//


//console.log(cityList.lists.avrist[0].latitude);

var map, infoWindow, currentLocation, geocoder, contentString;
var defaultmap = {lat: -6.174448, lng: 106.764759};
var radius = 5; // In Kilometer
var xRadius = ( radius * 2000 );
var zoom = 12;
var bunchAllData = [];
var bunchData = {};
var infowindow = new google.maps.InfoWindow();
var results = {};

//UNTUK SEARCH MAP
function codeAddress(address) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            //change geolocation with geometry location
            currentLocation = results[0].geometry.location;

            //MAP OPTIONS
            var myOptions = {
                zoom: zoom,
                center: currentLocation,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            }

            //REINIT MAP
            map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

            //ADD MARKER
            var marker = new google.maps.Marker({
                map: map,
                position: currentLocation
            });

            //ADD CIRCLE RADIUS
            var cityCircle = new google.maps.Circle({
              strokeColor: '#542888',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#542888',
              fillOpacity: 0.35,
              map: map,
              center: currentLocation,
              radius: xRadius
            });
            
            //CALLING JSON ON getList FUNCTION
            getList();
        }
    });
}
//UNTUK SEARCH MAP//

//GET CURRENT LOCATION
function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } 
  else {
    currentLocation = defaultmap;
    initMap();
  }
}

//IF GEOLOCATION SUCCESS to get the currentLocation
function showPosition(position) {
    //console.log(position);
    currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    initMap();
}

//FUNCTION IF GEOLOCATION NOT ALLOWED, ETC
function showError(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.")
          currentLocation = defaultmap;
          initMap();
          break;
      case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.")
          currentLocation = defaultmap;
          initMap();
          break;
      case error.TIMEOUT:
          console.log("The request to get user location timed out.")
          currentLocation = defaultmap;
          initMap();
          break;
      case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.")
          currentLocation = defaultmap;
          initMap();
          break;
  }
}
//GET CURRENT LOCATION//

//INIT MAP FUNCTION
var initMap = function() {

  var mapOptions = {
    center: currentLocation,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var marker = new google.maps.Marker({
    position: currentLocation,
    map: map
  });

  var cityCircle = new google.maps.Circle({
    strokeColor: '#542888',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#542888',
    fillOpacity: 0.35,
    map: map,
    center: currentLocation,
    radius: xRadius
  });

  getList();
}, //INIT MAP//

// GET JSON FROM CONTROLLER
getMapList = function() {

    //http://avrist.localhost/?controller=HospitalProvider&action=list
    //$.getJSON( window.location.protocol + '//' + window.location.hostname + '/generate-branch' )

    $.getJSON( window.location.protocol + '//' + 'avrist.localhost/?controller=HospitalProvider&action=list' )
      .done(function( res ) {
        getList(res);
        results = res;
        //console.log(results);
    })
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });

},

//GET LIST FROM JSON
getList = function(result) {

  //get data from json controller//
  var getData = result.list;
  //get data from json controller//

  var sortMarkerInRange = [];

  // for all data
  bunchAvristData = [];
  bunchAdmedikaData = [];

  //EACH DATA FROM cityList.lists JSON
  //$.each( cityList.lists, function( key, value ) {

  //EACH DATA FROM JSON CONTROLLER getData
  $.each( getData, function( key, value ) {
    //console.log(value);

    //EACH DATA FROM cityList.lists.avrist and cityList.lists.admedika JSON
    $.each(value, function(k, v) {

      //LOOPING MARKER FROM JSON//
      var position    = new google.maps.LatLng(v.latitude, v.longitude);
      //console.log(v.latitude, v.longitude);
      var marker      = new google.maps.Marker({
          position: position,
          map: map,
          icon: './assets/images/icon-marker.png'
      });

        //INFO WINDOW//
        var categoryName   = v.name ,
        message = markerBauble.myFormat(categoryName);

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(message)
            infowindow.open(map, marker)
            $('.gm-style-iw').parent().addClass('gm-style-par')
        });
        //INFO WINDOW//

      //LOOPING MARKER FROM JSON//
      
      //GET DISTANCE FROM CURRENT LOCATION TO EACH MARKER
      var distance_from_location = google.maps.geometry.spherical.computeDistanceBetween(currentLocation, position);
      var distance_in_km = (distance_from_location / 1000).toFixed(1);
      //console.log(distance_in_km + 'km');

      if ((distance_from_location <= xRadius)) {
        // console.log(v.category);
        // console.log(v.name);

        //add property radius to each data
        v.radius = distance_in_km;

        //Make EACH DATA TO OBJECT
        if(v.category === 'avrist') {
          //console.log('avrist');
          // $('.avrist-map-1 #Avrist').append(avrist);
          bunchAvristData.push(v);
        }
        else if(v.category === 'admedika') {
          //console.log('admedika');
          // $('.avrist-map-1 #AdMedika').append(avrist);
          bunchAdmedikaData.push(v);
        }
      }

    });

  });

  //SORT DATA FROM SMALL RADIUS TO BIG
  $('.avrist-map-1 #Avrist').html('');
  $('.avrist-map-1 #AdMedika').html('');

  bunchAvristData.sort(function(a, b) {
      return parseFloat(a.radius) - parseFloat(b.radius);
  });
  bunchAdmedikaData.sort(function(a, b) {
      return parseFloat(a.radius) - parseFloat(b.radius);
  });

  //console.log(bunchAvristData);
  //console.log(bunchAdmedikaData);

  //APPEND AVRIST DATA TO ELEMENT AFTER GET SORTED
  $.each(bunchAvristData, function(idx, v){    
    var avrist = "<div class=\"pane-box\" data-tipe=\"avrist\">" +
          "<span class=\"font-18 font-xs-14 title\">"+ v.name +" </span>" +
          "<br>" +
          "<span class=\"font-14 font-xs-12\">"+ v.address + 
          "<br>"+ v.region_name +
          "<br>"+ v.phone +"</span>" +
          "<span class=\"distance\">"+ v.radius + " km</span>" +
          "<a href="+ v.link +" class=\"btn-violet margin-top-25\">Buka di Google Maps</a>" +
          "</div>";
      $('.avrist-map-1 #Avrist').append(avrist);
  });

  //APPEND ADMEDIKA DATA TO ELEMENT AFTER GET SORTED
  $.each(bunchAdmedikaData, function(idx, v){    
    var avrist = "<div class=\"pane-box\" data-tipe=\"avrist\">" +
          "<span class=\"font-18 font-xs-14 title\">"+ v.name +" </span>" +
          "<br>" +
          "<span class=\"font-14 font-xs-12\">"+ v.address + 
          "<br>"+ v.region_name +
          "<br>"+ v.phone +"</span>" +
          "<span class=\"distance\">"+ v.radius + " km</span>" +
          "<a href="+ v.link +" class=\"btn-violet margin-top-25\">Buka di Google Maps</a>" +
          "</div>";
      $('.avrist-map-1 #AdMedika').append(avrist);
  });

}

$(document).ready(function(){

  //INIT MAP WITH getLocation FUNCTION
  getLocation();

  //SEARCH FUNCTION
  $('.avrist-map-1 #searchButton').on('click', function(){
    $('.avrist-map-1 #Avrist').empty();
    $('.avrist-map-1 #AdMedika').empty();
    var lokasi = $('#mapSearch').val();
    codeAddress(lokasi);
  });
  $('#mapSearch').on('change', function(){
    $('.avrist-map-1 #Avrist').empty();
    $('.avrist-map-1 #AdMedika').empty();
    var lokasi = $('#mapSearch').val();
    codeAddress(lokasi);
  });
  //SEARCH FUNCTION//

});


