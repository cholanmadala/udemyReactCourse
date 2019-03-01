import {getSongsList, selectSong} from '../actions';

const data = [
	{name:'Ricky Martin', duration: '5:20'},
	{name:'Micheal Jackson', duration: '4:50'},
	{name:'David Guetta', duration: '6:45'},
	{name:'Akon', duration: '3:20'},
	{name:'Queen', duration: '5:20'},
	{name:'Back Street Boys', duration: '8:20'},
	{name:'Aqua', duration: '5:20'},
	{name:'Britney Spears', duration: '5:20'},
]

export const getSongs = () => {
	return (dispatch) => {
		data.map((song) => {
			return dispatch(getSongsList(song));
		});
	};
};


export const selectASong = (song) => {
	return (dispatch) => {
		return dispatch(selectSong(song));
	}
};
