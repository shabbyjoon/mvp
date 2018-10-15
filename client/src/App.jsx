import React from 'react';
import axios from 'axios';
import Board from './Board.jsx';
import Search from './Search.jsx';
import BoardList from './BoardList.jsx';
import ImageList from './ImageList.jsx';
const credentials = require('../unsplashConfig.js');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currBoard: '',
      images: [],
      loadingState: true

    }
    this.searchImages = this.searchImages.bind(this);
  }
  componentDidMount() {
    this.searchImages('mermaid');
  }
  searchImages(keyword) {
    axios
      .get(`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${keyword}&client_id=${credentials.APP_ID}`)
      .then(data => {
        console.log('full shape', data)
        console.log('data.data', data.data)
        console.log('data.data.results', data.data.results)

        this.setState({
          images: data.data.results,
          loadingState: false

        })
        console.log('state', this.state.images)
        .catch(err => {
          console.log('Error loading images', err)
        })
      })
  }

  render(){
    return(
      <div>
        <Board />
        <button> Save Board</button>
        <button>Delete Board</button>
        <Search onSearch={this.searchImages}/>
        <div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImageList data={this.state.images} />}
				</div>
        <BoardList />

      </div>
    )
  }
}
export default App;