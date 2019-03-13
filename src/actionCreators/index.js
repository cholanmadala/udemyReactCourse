import {getSongsList, selectSong, searchTerm} from '../actions';

import searchApi from '../apis';

const data = [
	{name:'Ricky Martin', duration: '5:20'},
	{name:'Micheal Jackson', duration: '4:50'},
	{name:'David Guetta', duration: '6:45'},
	{name:'Akon', duration: '3:38'},
	{name:'Queen', duration: '5:54'},
	{name:'Back Street Boys', duration: '8:08'},
	{name:'Aqua', duration: '5:03'},
	{name:'Britney Spears', duration: '5:46'},
]

export const getSongs = () => {
	return (dispatch) => {
		data.map((song) => {
			return dispatch(getSongsList(song));
		});
	};
};


export const selectASong = (song) => {
	console.log('selectASong action creator');
	// return (dispatch) => {
	// 	return dispatch(selectSong(song));
	// }
	// return {
	// 	type:'SELECT_SONG',
	// 	payload: song
	// };

	return selectSong(song);
};


export const searchATerm = (term) =>  async dispatch => {
	//make an api call
	const response = await searchApi.get('/photos', {
			headers: {
				Authorization: 'Client-ID 5edcc90dbe91ad23abf0cf59223b59301a3767365586e47cfa3df4e2acad8347'
			},
			params: {
				query: term
			} 
		});
	// return an action
	return dispatch(searchTerm({data: response.data.results, term}));
}