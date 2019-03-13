const search=(state={images: [], term: ''}, action) => {
	switch (action.type) {
		case 'SEARCH_TERM' :
			return {
				...state,
				images: action.payload.data,
				term: action.payload.term
			}

		default:
      		return state
	}
}

export default search;