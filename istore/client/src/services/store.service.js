import { onSearchAddressByLocation } from '../components/Maps'

export function showHideStoreInfo(id, info, thisMap) {
	const storeInfo = document.querySelector('.store-info');
    const items = document.querySelectorAll('.field-results-item');
    if ( items[id].style.backgroundColor === '' || storeInfo.style.right === '-100%') {
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = '';
        }
        // Product
        document.querySelector('.store-detail-product-body-title').innerHTML = `<h5>${info._doc.name}</h5>`;
        document.querySelector('.store-detail-product-body-comment-count').innerHTML = `${info._doc.rates.length}`;
        document.querySelector('.store-detail-product-body-price-sale').innerHTML = `${info._doc.saleoff}%`;
        document.querySelector('.store-detail-product-body-price-main').innerHTML = `(${((info._doc.price*((100-info._doc.saleoff)/100))/1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}đ)`;
        document.querySelector('.store-detail-product-body-origin-price').innerHTML = `(${(info._doc.price/1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}đ)`;


        // Store
        document.querySelector('.store-detail-info-content-store-name').innerHTML = `<h5>${info.store.title}</h5>`;
        // Address
        const latlng = {lat: parseFloat(info.store.location.coordinates[1]), lng: parseFloat(info.store.location.coordinates[0])};
        onSearchAddressByLocation(latlng, result => {
           document.querySelector('.store-detail-info-content-store-address').innerHTML = `${result}`;
        })
        // Marker
        
        
        storeInfo.style.right = '0px';
        items[id].style.backgroundColor = '#baed95';
    } else {
        storeInfo.style.right = '-100%';
        items[id].style.backgroundColor = '';
    }
}