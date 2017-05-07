
 function calculateDistance(startAddress, endAddress)
 {
              // Limpar todos os itens da lista...
				console.log('Calculate Distance:'+ startAddress +'*'+ endAddress);
				var dismille = 0;
               // Consumir a API...
			   var urlg = "http://maps.googleapis.com/maps/api/distancematrix/xml?origins="+
			              startAddress+"&destinations="+endAddress+"&mode=driving&language=pt-BR&sensor=false";
                $.ajax({
                    type: "GET",
                    url: urlg,
                    timeout: 8000,
                    //dataType: "jsonp",
					dataType: "xml",
                    success: function (result) {
					 $(result).find('distance').each(function(){
						  var valdis = $(this).find('value').text();
						  console.log(valdis);
						  dismille = parseFloat(valdis / 1.6);
						  console.log(dismille);
						});			 
					},
                    error: function (jqXHR, status) {
                        console.log("<center>Server busy try again later...  "+status+"</center>");
						return '0';
                    },
                });
 } 
 

function distance(lat1, lon1, lat2, lon2) {
	console.log('distance');
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

//  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  var dist = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  console.log("distance: " + dist); // 2 * R; R = 6371 km
  
}


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  console.log('distance:' + d);
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}