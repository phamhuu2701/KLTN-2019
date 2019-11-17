export function zoomSizeOfMap(distance) {
	let zoom;
	switch (distance/1000) {
		case 1:
			zoom = 15.5;
			break;
		case 2:
			zoom = 14.5;
			break;
		case 5:
			zoom = 13.2;
			break;
		case 10:
			zoom = 12.2;
			break;
		case 15:
			zoom = 11.6;
			break;
		case 20:
			zoom = 11.2;
			break;
		default:
			zoom = 10.2;
			break;
	}
	return zoom;
}