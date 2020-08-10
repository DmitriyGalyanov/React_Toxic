export const LIKE_BUTTON_SET_LIKED = 'LIKE_BUTTON_SET_LIKED';
export const LIKE_BUTTON_SET_UNLIKED = 'LIKE_BUTTON_SET_UNLIKED';

export const likeButtonSetLiked = (likeButtonId) => {
	return ({
		type: LIKE_BUTTON_SET_LIKED,
		payload: likeButtonId
	})
}
export const likeButtonSetUnliked = (likeButtonId) => {
	return ({
		type: LIKE_BUTTON_SET_UNLIKED,
		payload: likeButtonId
	})
}