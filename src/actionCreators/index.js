import {getSongsList, selectSong} from '../actions';

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
