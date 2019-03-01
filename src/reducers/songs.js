const songs=(state={songs: [], selectedSong: null}, action) => {
	switch (action.type) {
		case 'SELECT_SONG' :
			return {
				...state,
				selectedSong: action.payload
			}
		case 'GET_SONGS' :
			return {
				...state,
				songs: [...state.songs, action.payload]
			}

		default:
      		return state
	}
}

export default songs;