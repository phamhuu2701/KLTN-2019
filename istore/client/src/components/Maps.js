import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Map, /*InfoWindow,*/ Marker, GoogleApiWrapper} from 'google-maps-react';

import {onGetCurrentPositionService, geocodingService, showNearHostelService, getRedirectMapService, recenterMapService, loadMapService} from '../services/maps.service.js'

import './Maps.css'

let markers = [], currentDirection = null, currentCircle = null;

export function onGetCurrentPosition() {
    onGetCurrentPositionService(this);
}

export function onSearchAddress (address, cb) {
    geocodingService(address, this, cb)
}

export function onSearchProduct (product, cb) {
    // Find product and location of that products
    // 
    // Show nearby store existing product
    // 
}

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }

    UNSAFE_componentWillMount() {
        onSearchAddress = onSearchAddress.bind(this);
        onGetCurrentPosition = onGetCurrentPosition.bind(this);
    }

    componentDidMount() {
        onGetCurrentPosition();
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
        //this.map.fitBounds(this.bounds);
    }

    recenterMap() {
        recenterMapService(this);
    }

    loadMap() {
        loadMapService(this);
    }

    cleanMaps() {
        // Clear current direction if existing
        if (currentDirection) {
            currentDirection.setMap(null)
            currentDirection = null;
        }
        // Clear old marker of client's location
        if (this.marker) {
            this.marker.setMap(null)
        }

        // Clear current circle if existing
        if (currentCircle) {
            currentCircle.setMap(null);
            currentCircle = null;
        }

        this.clearNearHostel();
    }

    showNearHostel(nearByStore) {
        this.clearNearHostel();
        showNearHostelService(this, markers, nearByStore);
    }

    clearNearHostel() {
        markers.forEach(marker => {
            marker.setMap(null)
        })
        markers = [];
    }

    getRedirectMap(origin, destination) {
        getRedirectMapService(this, origin, destination, result => {
            currentDirection = result;
        });
    }

    drawCircleFromCenter(center, radius) {
        currentCircle = new this.props.google.maps.Circle({
            strokeColor: '#888', // Màu viên
            strokeOpacity: 0.5, // Độ mờ viền
            strokeWeight: 1, // Độ mảnh của đường tròn
            fillColor: '#03A9F4', // Màu nền của đường tròn
            fillOpacity: 0.1, // Độ trong suốt của nền
            map: this.map, // Hiển thị trên map nào
            center: {lat: center.lat, lng: center.lng}, // tạo độ trung tâm
            radius: radius // bán kính
        })
    }

    render() {
        return (
            <div className="map">
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={this.state.currentLocation}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Current location'}/>
                </Map>
            </div>
    );
  }
}

MapContainer.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    centerAroundCurrentLocation: PropTypes.bool
}
MapContainer.defaultProps = {
    zoom: 13,
    // Ben Thanh market, by default
    initialCenter: {
        lat: 10.772967,
        lng: 106.698077
    },
    centerAroundCurrentLocation: true
}

const LoadingContainer = (props) => (
  <div className="loadingMaps">Đang tải bản đồ...</div>
)

export default GoogleApiWrapper({
    apiKey: ('AIzaSyD9mzilMG4xBbeqNYQpBzLysB2YMxWVNfs'),
    language: 'vi-vn',
    LoadingContainer: LoadingContainer
})(MapContainer)