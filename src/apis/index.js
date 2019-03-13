import axios from 'axios';

const searchApi = axios.create({
	baseURL:'https://api.unsplash.com/search'
});

export default searchApi
