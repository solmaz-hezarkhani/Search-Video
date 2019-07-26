import axios from 'axios';

const KEY = 'AIzaSyAAODSzp9eWzfEkOlP3TxtXNgFl96a0d9c';

export default axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3',
	params:{
		part : 'snippet',
		key: KEY,
		maxResults: 5,
	}


});