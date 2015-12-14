<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=&sensor=true"></script>
<script type="text/javascript">
  markers = [];
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(53.23283117761171, -3.2718089257812),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADTYPE,
      panControl: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true
    };
    map = new google.maps.Map(document.getElementById("mapCanvas"),mapOptions);

    var marker0 = new google.maps.Marker({
        position: new google.maps.LatLng (8.082620520162514,98.30197870731354),
        map: map,
        icon: "/icons/home-icon.png"
    });
    markers.push(marker0);
    var infowindow0 = new google.maps.InfoWindow({
        content: "<div class='infoWindow'>Suntalee.com</div>",maxWidth: 350
    });
    google.maps.event.addListener(marker0, "click", function()
    {
        infowindow0.open(map,marker0);
    });

  }
  google.maps.event.addDomListener(window, "load", initialize);

  $(document).ready(function()
  {
      $('#markerOptions li').on('click', function()
      {
          $('#markerOptions li').removeClass('selectedMarker');
          $(this).addClass('selectedMarker');
          var markerId = $(this).attr('data-marker');
          var lat = markers[markerId].position.lat();
          var lng = markers[markerId].position.lng();
          map.setCenter(new google.maps.LatLng(lat, lng));
          map.setZoom(10);
      });
  });

</script>
