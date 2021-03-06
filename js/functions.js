window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-26.774139,-49.370590),
            scrollwheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map - new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content){
        var latLng = {'lat':lat,'long':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon,
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        infoWindow.open(map,marker);
    }

    initialize();

    var conteudo = '<p style="color:black;font-size:13px; padding:10px 0;">Meu endereço</p>';
    addMarker(-26.774139,-49.370590,'',conteudo, true);
}