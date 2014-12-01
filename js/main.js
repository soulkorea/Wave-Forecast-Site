$(document).ready(function () {




var token = 'tlbH6dvujieR0UgP7e6JpHSnf4F3m56r';
//var spot_id = 383;
var spot_id = $('#location').val();
console.log(spot_id);
var url = 'http://magicseaweed.com/api/'+token+'/forecast/?spot_id='+spot_id;
var mornpic = $('#mornpic');
var noonpic = $('#noonpic');
var evepic = $('#evepic');

$("#location").on( "change", function() {
// take value from option and pass into spot_id in url
var spot_id = $('#location').val();
var url = 'http://magicseaweed.com/api/'+token+'/forecast/?spot_id='+spot_id;
getConditions(url);
});

getConditions(url);

function getConditions(url){
  $.ajax({
    url: url, 
    dataType: "jsonp",
    success: function(data){
      console.log(data);
      console.log("period: ",data[0].swell.components.primary.period);
      //this function runs if the api call is successful
      var mornMinBH = data[3].swell.minBreakingHeight;
      var mornMaxBH = data[3].swell.maxBreakingHeight;
      var mornPeriod = data[3].swell.components.primary.period;
      var mornWindspeed = data[3].wind.speed;
      var mornWinddirection = data[3].wind.compassDirection;
      var mornSwelldirection = data[3].swell.components.combined.compassDirection;
      var mornTemp = data[3].condition.temperature;


      var noonMinBH = data[5].swell.minBreakingHeight;
      var noonMaxBH = data[5].swell.maxBreakingHeight;
      var noonPeriod = data[5].swell.components.primary.period;
      var noonWindspeed = data[5].wind.speed;
      var noonWinddirection = data[5].wind.compassDirection;
      var noonSwelldirection = data[5].swell.components.combined.compassDirection;
      var noonTemp = data[5].condition.temperature;

      var eveMinBH = data[7].swell.minBreakingHeight;
      var eveMaxBH = data[7].swell.maxBreakingHeight;
      var evePeriod = data[7].swell.components.primary.period;
      var eveWindspeed = data[7].wind.speed;
      var eveWinddirection = data[7].wind.compassDirection;
      var eveSwelldirection = data[7].swell.components.combined.compassDirection;
      var eveTemp = data[7].condition.temperature;

        changeImage(mornMaxBH,morn.id);
        changeImage(noonMaxBH,noon.id);
        changeImage(eveMaxBH,eve.id);

       console.log(mornMaxBH);
        $('#mornMinBH').text(mornMinBH);
      	$('#mornMaxBH').text(mornMaxBH);
      	$('#mornPeriod').text(mornPeriod);
        $('#mornWindspeed').text(mornWindspeed);
        $('#mornWinddirection').text(mornWinddirection);
        $('#mornSwelldirection').text(mornSwelldirection);
        $('#mornTemp').text(mornTemp);

        $('#noonMinBH').text(noonMinBH);
        $('#noonMaxBH').text(noonMaxBH);
        $('#noonPeriod').text(noonPeriod);
        $('#noonWindspeed').text(noonWindspeed);
        $('#noonWinddirection').text(noonWinddirection);
        $('#noonSwelldirection').text(noonSwelldirection);
        $('#noonTemp').text(noonTemp);

        $('#eveMinBH').text(eveMinBH);
        $('#eveMaxBH').text(eveMaxBH);
        $('#evePeriod').text(evePeriod);
        $('#eveWindspeed').text(eveWindspeed);
        $('#eveWinddirection').text(eveWinddirection);
        $('#eveSwelldirection').text(eveSwelldirection);
        $('#eveTemp').text(eveTemp);

    }
  });
}


function changeImage(maxHeight,id){

var waveHeight;

 /*       for humans (surfer.png)

        if (maxHeight <= 2) {
          waveHeight="120px";
        } else if( ( maxHeight >= 2 )&& (maxHeight < 3 )){
          waveHeight="100px";
        } else if( ( maxHeight >= 3 )&& (maxHeight < 4 )){
          waveHeight="80px";
        } else if( ( maxHeight >= 4 )&& (maxHeight < 5 )){
          waveHeight="60px";
        } else if( ( maxHeight >= 5 )&& (maxHeight < 6 )){
          waveHeight="40px";
        } else if( ( maxHeight >= 7 )&& (maxHeight < 7 )){
          waveHeight="25px";
        }
*/


/* for Garfield */

if (maxHeight <= 2) {
          waveHeight="100px";
        } else if( ( maxHeight >= 2 )&& (maxHeight < 3 )){
          waveHeight="90px";
        } else if( ( maxHeight >= 3 )&& (maxHeight < 4 )){
          waveHeight="100px";
        } else if( ( maxHeight >= 4 )&& (maxHeight < 5 )){
          waveHeight="60px";
        } else if( ( maxHeight >= 5 )&& (maxHeight < 6 )){
          waveHeight="35px";
        } else if( ( maxHeight >= 6 )&& (maxHeight < 7 )){
          waveHeight="20px";
        } else if( ( maxHeight >= 7 )&& (maxHeight < 8 )){
          waveHeight="10px";  
        } else if( ( maxHeight >= 8 )&& (maxHeight < 9 )){
          waveHeight="5px";  
        }



        document.querySelector("#" + id + " .secondcontainer").style.marginTop= waveHeight;
}
	
});


