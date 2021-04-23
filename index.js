// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 27.69041308480001, lng:  85.34429478345714 }
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  function mySubscribe(){
      alert("subscribed")
  }