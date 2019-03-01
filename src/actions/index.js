export const getSongsList = (data) => {
	return {
		type:'GET_SONGS',
		payload: data
	}
}

export const selectSong = (song) => {
	return {
		type:'SELECT_SONG',
		payload: song
	}
}
