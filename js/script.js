
function iniciarMap() {
    var coordenadas = [
        {lat: 13.974259, lng: -89.5718685},
        {lat: 13.6739956, lng: -89.2814062},
        {lat: 13.4970274, lng: -88.8693042},
        {lat: 13.4997675, lng: -88.1657847},
        {lat: 13.339191, lng: -87.861036}
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: coordenadas[0] 
    });

    var imagenesMarcadores = [
        './images/pointerSantaAna.png',
        './images/pointersantatecla.png',
        './images/pointerzacatecoluca.png',
        './images/pointerSanmiguel.png',
        './images/pointerLaunion.png'
        
    ];

    for (var i = 0; i < coordenadas.length; i++) {
        var marker = new google.maps.Marker({
            position: coordenadas[i],
            map: map,
            icon: {
                url: imagenesMarcadores[i],
                scaledSize: new google.maps.Size(60, 60) // Especifica el tamaño deseado (30x30)
            }
        });
    }
}