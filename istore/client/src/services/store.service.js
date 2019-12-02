import {
    sortProductByDistance,
    sortIncreseProductByPrice,
    sortDescreseProductByPrice,
    sortProductByRating
} from "../utils/sortModel";
import { showProductDetail } from "../components/istore/ProductDetail";
import { onZoomSearchField } from "../components/HomeIndex";

export function showHideStoreInfoService(id, info, thisMap, thisStoreWindow) {
    const storeInfo = document.querySelector(".store-info");
    const items = document.querySelectorAll(".field-results-item");
    if (
        items[id].style.backgroundColor === "" ||
        //storeInfo.style.right === "-100%"
        thisStoreWindow.state.effect === ''
    ) {
        if (items[id].style.backgroundColor !== "") {
            //storeInfo.style.right = "0px";
            thisStoreWindow.setState({
                effect: 'show'
            })
        } else {
            for (let i = 0; i < items.length; i++) {
                items[i].style.backgroundColor = "";
            }

            showProductDetail(info);

            // Marker

            //storeInfo.style.right = "0px";
            thisStoreWindow.setState({
                effect: 'show'
            })
            items[id].style.backgroundColor = "#C7F0AA";
        }
    } else {
        //storeInfo.style.right = "-100%";
        thisStoreWindow.setState({
            effect: ''
        })
        onZoomSearchField('in');
        items[id].style.backgroundColor = "";
    }

    // Address
    const latlng = {
        lat: parseFloat(info.store.location.coordinates[1]),
        lng: parseFloat(info.store.location.coordinates[0])
    };
    // Redirect from  client's location to shop's location
    const latLng = thisMap.props.google.maps.LatLng;
    const { lat, lng } = thisMap.state.currentLocation;
    thisMap.cleanMaps(false);
    thisMap.getRedirectMap(
        new latLng(lat, lng),
        new latLng(latlng.lat, latlng.lng)
    );
}

export function onZoomSearchFieldService(that, zoom) {
    that.onZoom(zoom);
}

export function onSortStoreListService(stores, priority, cb) {
    document.querySelector(".loading").style.display = "block";
    if (stores.length > 1) {
        switch (+priority) {
            case 0:
                sortProductByRating(stores);
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
                console.log("0");
                break;
        }
    }
    cb(stores);
}

export function addStore(store, callback) {
    fetch("/api/stores", {
        method: "POST",
        headers: {
            Accept: "application",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(store)
    })
        .then(res => res.json())
        .then(store => {
            // return stores;

            if (store) {
                callback("Thêm cửa hàng thành công!");
            } else {
                callback("Thêm cửa hàng thất bại.");
            }
        })
        .catch(err => console.log(err));
}
