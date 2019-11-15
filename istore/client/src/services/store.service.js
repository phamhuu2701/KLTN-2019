import { sortProductByDistance, sortIncreseProductByPrice, sortDescreseProductByPrice, sortProductByRating } from '../utils/sortModel'
import { showProductDetail } from '../components/istore/ProductDetail';

export function showHideStoreInfoService(id, info, thisMap) {
	const storeInfo = document.querySelector('.store-info');
    const items = document.querySelectorAll('.field-results-item');
    if ( items[id].style.backgroundColor === '' || storeInfo.style.right === '-100%') {
        if (items[id].style.backgroundColor !== '') {
            storeInfo.style.right = '0px';
        } else {
            for (let i = 0; i < items.length; i++) {
                items[i].style.backgroundColor = '';
            }
            
            showProductDetail(info);

            // Marker
            
            storeInfo.style.right = '0px';
            items[id].style.backgroundColor = '#C7F0AA';
        }
    } else {
        storeInfo.style.right = '-100%';
        items[id].style.backgroundColor = '';
    }
    
    // Address
    const latlng = {lat: parseFloat(info.store.location.coordinates[1]), lng: parseFloat(info.store.location.coordinates[0])};
    // Redirect from  client's location to shop's location
    const latLng = thisMap.props.google.maps.LatLng;
    const {lat, lng} = thisMap.state.currentLocation;
    thisMap.cleanMaps(false);
    thisMap.getRedirectMap(new latLng(lat, lng), new latLng(latlng.lat, latlng.lng));
}

export function onSortStoreListService(stores, priority, cb) {
    document.querySelector('.loading').style.display = 'block';
    if (stores.length > 1) {
        switch (+priority) {
            case 0:
                sortProductByRating(stores)
                break;
            case 1:
                sortProductByDistance(stores);
                break;
            case 2:
                sortIncreseProductByPrice(stores);
                break;
            case 3:
                sortDescreseProductByPrice(stores);
                break;
            default:
                console.log('0');
                break;
        }
    }
    cb(stores);
}