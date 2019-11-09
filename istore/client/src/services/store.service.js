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
            // Product info
            document.querySelector('.product-detail-product-body-title').innerHTML = `<h5>${info._doc.name}</h5>`;
            document.querySelector('.product-detail-product-body-comment-count').innerHTML = `${info._doc.rates.length}`;
            document.querySelector('.product-detail-product-body-price-sale').innerHTML = `Giảm ${info._doc.saleoff}%`;
            document.querySelector('.product-detail-product-body-price-main').innerHTML = `(${((info._doc.price*((100-info._doc.saleoff)/100))/1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}đ)`;
            document.querySelector('.product-detail-product-body-origin-price').innerHTML = `(${(info._doc.price/1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}đ)`;
            document.querySelector('.product-detail-info-avatar').innerHTML = `<Image src="${info.store.images[0]}" />`;


            // Store info
            document.querySelector('.product-detail-info-content-store-name').innerHTML = `<h5>${info.store.title}</h5>`;
            
            

            // Marker
            
            storeInfo.style.right = '0px';
            items[id].style.backgroundColor = '#baed95';
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
    if (stores.length > 1) {
        switch (+priority) {
            case 0:
                break;
            case 1:
                stores.sort((first, second) => {
                    if (first.distance < second.distance)
                        return -1;
                    else if (first.distance > second.distance)
                        return 1;
                    else return 0;
                })
                break;
            case 2:
                stores.sort((first, second) => {
                    return first._doc.price*((100 - first._doc.saleoff)/100) - second._doc.price*((100 - second._doc.saleoff)/100);
                })
                break;
            case 3:
                stores.sort((first, second) => {
                    return second._doc.price*((100 - second._doc.saleoff)/100) - first._doc.price*((100 - first._doc.saleoff)/100);
                })
                break;
            default:
                console.log('0');
                break;
        }
    }
    cb(stores);
}