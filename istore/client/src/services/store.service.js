export function showHideStoreInfo(id) {
	const widthStoreInfo = document.querySelector('.store-info');
    const items = document.querySelectorAll('.field-results-item');
    if ( items[id].style.backgroundColor === '' || widthStoreInfo.style.right === '-100%') {
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = '';
        }
        widthStoreInfo.style.right = '0px';
        items[id].style.backgroundColor = '#baed95';
    } else {
        widthStoreInfo.style.right = '-100%';
        items[id].style.backgroundColor = '';
    }
}