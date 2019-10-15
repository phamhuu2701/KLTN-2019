export function onGetCurrentPositionService(thisMap) {
    thisMap.cleanMaps();

    if (thisMap.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                thisMap.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
    }
}



// Get Address or geometry (latitude and longitude)
export function geocodingService(address, thisMap, cb) {
    const google = thisMap.props.google;
    const maps = google.maps;
    const geocoder = new maps.Geocoder();
    geocoder.geocode({'address': address}, (results, status) => {
        if (status === maps.GeocoderStatus.OK) {
            // Get Lat and Lng from entered location
            const { lat, lng } = results[0].geometry.location;

            thisMap.cleanMaps();

            // Test Direction
            thisMap.getRedirectMap(new maps.LatLng(thisMap.state.currentLocation.lat, thisMap.state.currentLocation.lng), results[0].geometry.location);

            thisMap.setState({
                currentLocation: {
                    lat: lat(),
                    lng: lng()
                }
            })

            // Test draw a circle on map from center position 
            thisMap.drawCircleFromCenter(thisMap.state.currentLocation, 1000)

            // Show near hostels
            const nearbyHostel = [
                [10.8613154, 106.75557779999997],
                [10.8513154, 106.76557779999997],
                [10.8413154, 106.74557779999997],
                [10.8433154, 106.75457779999997]
            ]
            thisMap.showNearHostel(nearbyHostel);

            cb(results[0].formatted_address)
        } else {
            return alert( 'Không tìm vị trí: ' + status );
        }
    })
}

export function showNearHostelService(thisMap, markers, nearByStore) {
    const {google} = thisMap.props;
    const maps = google.maps;

    // Add some new markers
    for (let i = 0; i < nearByStore.length; i++) {
        setTimeout(() => {
            console.log();
            markers.push(new maps.Marker({
                name: 'Your location!',
                map: thisMap.map,
                animation: maps.Animation.DROP,
                position: new thisMap.props.google.maps.LatLng(nearByStore[i][0], nearByStore[i][1]),
                icon: {
                    url: '../icons/logo.svg',
                    anchor: new maps.Point(32,32),
                    scaledSize: new maps.Size(30,32)
                }
            }))
        }, i*500)
    }
}

export function getRedirectMapService(thisMap, origin, destination, cb) {
    const google = thisMap.props.google;
    const maps = google.maps;

    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    const request = {
        origin: origin,
        destination: destination,
        travelMode: thisMap.props.google.maps.TravelMode.DRIVING
    }


    directionsDisplay.setMap(thisMap.map);
    directionsService.route(request, (results, status) => {
        if (status === 'OK') {
            directionsDisplay.setDirections(results);

            // Get other values
            const otherValues = results.routes[0].legs[0];
            const time = otherValues.duration.text;
            const total = otherValues.distance.text;
            const from = otherValues.start_address;
            const to = otherValues.end_address;
            console.log(`Đi từ ${from} đến ${to} dài ${total} trong ${time}`);
            cb(directionsDisplay);
        }
    })
}

export function recenterMapService(thisMap) {
    const map = thisMap.map;
    const curr = thisMap.state.currentLocation;

    const google = thisMap.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center);

        // FitBounds --> góc nhìn hẹp, chỉ khu vực gần kề ở vị trí muốn đặt
        //thisMap.bounds = new maps.LatLngBounds();
        //thisMap.bounds.extend(curr);

        // Set Marker after get client's current location
        setTimeout(() => {
            thisMap.marker = new maps.Marker({
                map: map,
                animation: maps.Animation.DROP,
                position: center
            })
        }, 300)
        // Change marker's animation
        setTimeout(() => {
            thisMap.marker.setAnimation(maps.Animation.BOUNCE);
        }, 5000)
    }
}

export function loadMapService(thisMap) {
    if (thisMap.props && thisMap.props.google) {
        // google is available
        const {google} = thisMap.props;
        const maps = google.maps;


        let zoom = 14;
        let lat = thisMap.state.currentLocation.lat;
        let lng = thisMap.state.currentLocation.lng;
        const center = new maps.LatLng(lat, lng);
        const mapConfig = Object.assign({}, {
            center: center,
            zoom: zoom
        })
        thisMap.map = new maps.Map(document.querySelector('.app-body-right'), mapConfig);
    }
}

// No complete yet Autocomplete -- Not display autocomplete
/*export function onPlaceAutocomplete (input, cb) {
    const google = this.props.google;
    const maps = google.maps;

    if (!google) return;

    this.autocomplete = new maps.places.Autocomplete(input, {
        "types": ["cities"]
    });
    this.autocomplete.bindTo('bounds', this.map);

    //this.autocomplete.setFields(['address_component', 'formatted_address']); //'geometry', 'icon', 'name'

    // After Enter --> When selected a address
    this.autocomplete.addListener('place_changed', () => {
        const addressObject = this.autocomplete.getPlace();
        cb(addressObject)
    })
}*/