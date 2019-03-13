import { combineReducers } from 'redux';
import songs from './songs';
import search from './search';


export default combineReducers({
	songs,
	search
});