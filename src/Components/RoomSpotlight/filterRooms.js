function filterRooms(roomData, filtersData) {
	const {
		costRangeSliderData,
		checkboxesData
		} = filtersData;

	if (costRangeSliderData.lesserValue >= roomData.price ||
			costRangeSliderData.greaterValue <= roomData.price) {
		return false;
	}
	for (let [key, isAllowed] of Object.entries(checkboxesData)) {
		if (isAllowed === true && roomData.allowed[key] === false) {
			return false;
		}
	}

	return true;
}

export default filterRooms;