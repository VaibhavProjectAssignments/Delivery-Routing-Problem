var inputJSON = {
    service: [
        { id: 110810, lat: 30.648670261474, lng: 76.809466440475, name: "OrderID:110810" },
        { id: 110798, lat: 30.663827186748, lng: 76.8583046, name: "OrderID:110798" },
        { id: 110767, lat: 30.725135205493, lng: 76.754956500806, name: "OrderID:110767" },
        { id: 110762, lat: 30.711872470975, lng: 76.762024407935, name: "OrderID:110762" },
        { id: 110757, lat: 30.73243011699, lng: 76.739011330689, name: "OrderID:110757" },
        { id: 110747, lat: 30.707190711617, lng: 76.850105361377, name: "OrderID:110747" },
        { id: 110743, lat: 30.744933, lng: 76.741402, name: "OrderID:110743" },
        { id: 110734, lat: 30.695649147281, lng: 76.74342468381, name: "OrderID:110734" },
        { id: 110733, lat: 30.708026204455, lng: 76.860328338623, name: "OrderID:110733" },
        { id: 110732, lat: 30.732282563081, lng: 76.7389255, name: "OrderID:110732" },
        { id: 110730, lat: 30.734327102234, lng: 76.732653169312, name: "OrderID:110730" },
        { id: 110704, lat: 30.728782761185, lng: 76.849316277246, name: "OrderID:110704" },
        { id: 110702, lat: 30.72869511948, lng: 76.717071661377, name: "OrderID:110702" },
        { id: 110701, lat: 30.699274102296, lng: 76.844140069311, name: "OrderID:110701" },
        { id: 110696, lat: 30.695155273618, lng: 76.738129107935, name: "OrderID:110696" },
        { id: 110690, lat: 30.719112765252, lng: 76.831389177246, name: "OrderID:110690" },
        { id: 110686, lat: 30.6978446, lng: 76.717864830689, name: "OrderID:110686" },
        { id: 110678, lat: 30.739078684831, lng: 76.7382, name: "OrderID:110678" },
        { id: 110676, lat: 30.726936890558, lng: 76.778821457672, name: "OrderID:110676" },
        { id: 110671, lat: 30.727524329084, lng: 76.774441338623, name: "OrderID:110671" },
        { id: 110669, lat: 30.729400589616, lng: 76.786641738623, name: "OrderID:110669" },
        { id: 110668, lat: 30.6880572, lng: 76.723205853442, name: "OrderID:110668" },
        { id: 110666, lat: 30.688014636559, lng: 76.859133504331, name: "OrderID:110666" },
        { id: 110659, lat: 30.757619120924, lng: 76.769114397217, name: "OrderID:110659" },
        { id: 110658, lat: 30.710668968463, lng: 76.7183, name: "OrderID:110658" },
        { id: 110622, lat: 30.717184, lng: 76.767452746033, name: "OrderID:110622" },
        { id: 110618, lat: 30.721612870468, lng: 76.727892707935, name: "OrderID:110618" },
        { id: 110519, lat: 30.726341764892, lng: 76.785085423279, name: "OrderID:110519" },
        { id: 110426, lat: 30.735563974527, lng: 76.769615876721, name: "OrderID:110426" },
        { id: 109977, lat: 30.73512641259, lng: 76.776623253967, name: "OrderID:109977" }
    ],
    distanceCalculation: false,
    fleet: [{ id: 1, lat: 30.7188978, lng: 76.8102981, latEnd: 30.7188978, lngEnd: 76.8102981, returnToStart: 0 }],
    decideFleetSize: 0,
    maxVisits: 6,
    polylines: false,
    speed: 40
}
, flag = 0, indexes = [];
var locations = [
    {
        "delivery_latitude": 30.648670261474,
        "delivery_longitude": 76.809466440475,
        "ignore": 0,
        "order_id": 110810,
        "delivery_address": "Flat 10/1, Skynet Tower, Zirakpur, Punjab, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.663827186748,
        "delivery_longitude": 76.8583046,
        "ignore": 0,
        "order_id": 110798,
        "delivery_address": "11, GH 50, Sector 20, Panchkula, Haryana 134116, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.725135205493,
        "delivery_longitude": 76.754956500806,
        "ignore": 0,
        "order_id": 110767,
        "delivery_address": "3290, Second floor, Sector 35 D, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.711872470975,
        "delivery_longitude": 76.762024407935,
        "ignore": 0,
        "order_id": 110762,
        "delivery_address": "256, Sector 45 a, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.73243011699,
        "delivery_longitude": 76.739011330689,
        "ignore": 0,
        "order_id": 110757,
        "delivery_address": "1217B, 2nd floor, Sector 41B, Sector 41, Chandigarh, India, Sector 41, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.707190711617,
        "delivery_longitude": 76.850105361377,
        "ignore": 0,
        "order_id": 110747,
        "delivery_address": "136, Sector 7, Panchkula, Haryana, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.744933,
        "delivery_longitude": 76.741402,
        "ignore": 0,
        "order_id": 110743,
        "delivery_address": "3428 First Floor, Sector 38-D,  Sector 38, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.695649147281,
        "delivery_longitude": 76.74342468381,
        "ignore": 0,
        "order_id": 110734,
        "delivery_address": "2508,  Telehos Society, Sector 50 C , Chandigarh, Phase 9, Chandigarh, 160047, India, ",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.708026204455,
        "delivery_longitude": 76.860328338623,
        "ignore": 0,
        "order_id": 110733,
        "delivery_address": "House No. 207, Sector 6, Panchkula, Haryana, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.732282563081,
        "delivery_longitude": 76.7389255,
        "ignore": 0,
        "order_id": 110732,
        "delivery_address": "house no 3211 first floor, sector41d Sector 41, Chandigarh,, Sector 41, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.734327102234,
        "delivery_longitude": 76.732653169312,
        "ignore": 0,
        "order_id": 110730,
        "delivery_address": "2654, Sector 40C, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.728782761185,
        "delivery_longitude": 76.849316277246,
        "ignore": 0,
        "order_id": 110704,
        "delivery_address": "506, MDC Sector 6 Road, Manimajra, Sukteri, India, M D C Sector 6 Road, Mansa Devi Complex, Manimajra, Sukteri, Haryana, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.72869511948,
        "delivery_longitude": 76.717071661377,
        "ignore": 0,
        "order_id": 110702,
        "delivery_address": "61(FF), Opp. Khokha Market, phase-1., Sector 55, Sahibzada Ajit Singh Nagar, 160055",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.699274102296,
        "delivery_longitude": 76.844140069311,
        "ignore": 0,
        "order_id": 110701,
        "delivery_address": "174, Sector 8 B Road, Sector 8, Panchkula, Haryana, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.695155273618,
        "delivery_longitude": 76.738129107935,
        "ignore": 0,
        "order_id": 110696,
        "delivery_address": "693 mig independent, Back side PCA, Phase 9, Sahibzada Ajit Singh Nagar, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.719112765252,
        "delivery_longitude": 76.831389177246,
        "ignore": 0,
        "order_id": 110690,
        "delivery_address": "5172/ 3 ,Modern housing complex, Manimajra Chandigarh , Manimajra Manimajra, Chandigarh,, Manimajra, Chandigarh, Haryana, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.6978446,
        "delivery_longitude": 76.717864830689,
        "ignore": 0,
        "order_id": 110686,
        "delivery_address": "House No 1630 , Sector 70 Mohali Sector 70, Sahibzada Ajit Singh Nagar,, Sector 70, Sahibzada Ajit Singh Nagar, Punjab, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.739078684831,
        "delivery_longitude": 76.7382,
        "ignore": 0,
        "order_id": 110678,
        "delivery_address": "1042 GF, 1042 GF, Sector 40B,  Sector 40B, Chandigarh, 160036, ",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.726936890558,
        "delivery_longitude": 76.778821457672,
        "ignore": 0,
        "order_id": 110676,
        "delivery_address": "House No 1233, Ground Floor, Sector 21B Sector 21, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.727524329084,
        "delivery_longitude": 76.774441338623,
        "ignore": 0,
        "order_id": 110671,
        "delivery_address": "3278,  Himalaya Marg,  Sector 21 D, Sector 21, Chandigarh, 160022, India, ",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.729400589616,
        "delivery_longitude": 76.786641738623,
        "ignore": 0,
        "order_id": 110669,
        "delivery_address": "House no 1223, Sector 18, Chandigarh, 160018",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.6880572,
        "delivery_longitude": 76.723205853442,
        "ignore": 0,
        "order_id": 110668,
        "delivery_address": "Flat no 198 United Co operative society Sector 68, S A S Nagar, Sector 68, Sahibzada Ajit Singh Nagar, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.688014636559,
        "delivery_longitude": 76.859133504331,
        "ignore": 0,
        "order_id": 110666,
        "delivery_address": "Ravi Shankar, 1st floor, House no-1179, Sector 4, Panchkula, India, Near park",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.757619120924,
        "delivery_longitude": 76.769114397217,
        "ignore": 0,
        "order_id": 110659,
        "delivery_address": "W2 warden house, Panjab university, Sector 14, Chandigarh, 160014",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.710668968463,
        "delivery_longitude": 76.7183,
        "ignore": 0,
        "order_id": 110658,
        "delivery_address": "1780, phase 3 B 2, Sahibzada Ajit Singh Nagar, 160059",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.717184,
        "delivery_longitude": 76.767452746033,
        "ignore": 0,
        "order_id": 110622,
        "delivery_address": "244,  Sector 33-34 Jct,  Sector 34C, Sector 34, Chandigarh, 160022, India,  Furniture Market",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.721612870468,
        "delivery_longitude": 76.727892707935,
        "ignore": 0,
        "order_id": 110618,
        "delivery_address": "50, 1st floor, Mohali Stadium Road, Sector 54, Sahibzada Ajit Singh Nagar, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.726341764892,
        "delivery_longitude": 76.785085423279,
        "ignore": 0,
        "order_id": 110519,
        "delivery_address": "house no 693 top floor, 20A,  Sector 20, Chandigarh, 160020",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.735563974527,
        "delivery_longitude": 76.769615876721,
        "ignore": 0,
        "order_id": 110426,
        "delivery_address": "3417, Sector 22 Market Road, 22A, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.73512641259,
        "delivery_longitude": 76.776623253967,
        "ignore": 0,
        "order_id": 109977,
        "delivery_address": "1232, Himalaya Marg, Sector 22, Chandigarh, India",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    },
    {
        "delivery_latitude": 30.7188978,
        "delivery_longitude": 76.8102981,
        "ignore": 0,
        "order_id": 1,
        "delivery_address": "Driver's current location",
        "delivery_date": "2017-5-4",
        "delivery_slot_id": 75
    }
];
function generateRoutes() {
    var markers = [];
    var text = "";
    var obj = {};
    obj.lat = 30.7188978;
    obj.lng = 76.8102981;
    obj.title = "Driver's current location";
    obj.description = "Driver's current location";
    markers.push(obj);

    for (var iLength = 0; iLength < indexes.length; iLength++) {
        var obj = {};
        obj.lat = locations[indexes[iLength]].delivery_latitude;
        obj.lng = locations[indexes[iLength]].delivery_longitude;
        obj.title = locations[indexes[iLength]].delivery_address;
        obj.description = locations[indexes[iLength]].delivery_address;
        markers.push(obj);
    }
    var geocoder;
    var map;
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(30.7188978,76.8102981),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        directionsDisplay.setMap(map);
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        var request = {
            travelMode: google.maps.TravelMode.DRIVING
        };
        for (i = 0; i < markers.length; i++) {
            if(i===0){
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
                icon: "http://maps.google.com/mapfiles/kml/shapes/cabs.png"
            });
        }
            else{
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
                });
            }
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(markers[i].title);
                    infowindow.open(map, marker);
                }
            })(marker, i));

            if (i == 0) request.origin = marker.getPosition();
            else if (i == markers.length - 1) request.destination = marker.getPosition();
            else {
                if (!request.waypoints) request.waypoints = [];
                request.waypoints.push({
                    location: marker.getPosition(),
                    stopover: true
                });
            }
        }
        directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(30.7, 76.776623253969)
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        if (i == locations.length-1){
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(30.7188978, 76.8102981),
                icon: "http://maps.google.com/mapfiles/kml/shapes/cabs.png",
                map: map
            });
        }
        else {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].delivery_latitude, locations[i].delivery_longitude),
                map: map
            });
        }

        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i].delivery_address);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
function initMapInitial() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: new google.maps.LatLng(30.7, 76.776623253969)
    });
}

$(document).ready(function () {
    initMapInitial();
    var xhr = $.ajax({
        type: 'POST',
        url: "https://api.flightmap.io/api/v1/vrp" + "",
        headers: {
            "Authorization": "772ea600-78ad-11e6-a56b-0bff586a75e5",
            "Content-Type": "application/json; charset=utf-8"
        },
        rejectUnauthorized: false,
        data: JSON.stringify(inputJSON),
        success: function (data) {
            if (!!data) {
                indexes = [];
                var paths = data.data.solutions["1"];
                $("#loadingImage").hide();
                for (var iCount = 0; iCount < paths.length; iCount++) {
                    var id = paths[iCount].id.split(":")[1];
                    id = parseInt(id, 10);
                    indexes.push(locations.findIndex(x => x.order_id == id));
                }
            } else {
                console.log(data);
                $("#loadingImage").hide();
            }          
        },
        error: function (data) {
            console.log(data);
            $("#loadingImage").hide();
        }
    });
    $("#getData").click(function () {
        $("#loadingImage").show();
        initMap();
        $("#loadingImage").hide();
    });
    $("#generateRoutes").click(function () {
        $("#loadingImage").show();
        generateRoutes();
        $("#loadingImage").hide();
    });
});
