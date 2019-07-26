import React from'react';
import SearchBar from './SearchBar';
import Youtube from '../Api/YoutubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

	state ={ videos:[], selectedVideo:null}

	componentDidMount() {
		this.onSearchSubmit('buildings');

	}

	onSearchSubmit= async (term) =>{
		const response = await Youtube.get('/search',{
			params: {
				q:term
			}
		})

		this.setState({
			videos : response.data.items,
			selectedVideo : response.data.items[0]

		});
	};

	onVideoSelect = (video) =>{

		this.setState({selectedVideo:video});
	};

	render(){

		return(
			<div className="ui container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />

			</div>
			)
		
	}
}

export default App;
