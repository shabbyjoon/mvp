import React from 'react';
import axios from 'axios';
import Board from './Board.jsx';
import Search from './Search.jsx';
import BoardList from './BoardList.jsx';
import ImageList from './ImageList.jsx';
const credentials = require ('../unsplashConfig.js');

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      images: [],
      loadingState: true,
      boardImages: [],
      selectedImage1: undefined,
      imageClicked: false,
      imageClickCount: 0,
      cards: [],
      isComponentHidden: true,
    };
    this.searchImages = this.searchImages.bind (this);
    this.selectImages = this.selectImages.bind (this);
    this.postData = this.postData.bind (this);
    this.getData = this.getData.bind (this);
    this.toggleHidden = this.toggleHidden.bind (this);
  }
  componentDidMount () {
    this.getData ();
    console.log (this.state.cards);
  }

  toggleHidden () {
    this.setState ({
      imageClicked: !this.state.imageClicked,
      isComponentHidden: !this.state.isComponentHidden,
    });
  }

  searchImages (keyword) {
    axios
      .get (
        `https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${keyword}&client_id=${credentials.APP_ID}`
      )
      .then (data => {
        this.setState ({
          images: data.data.results,
          loadingState: false,
        }).catch (err => {
          console.log ('Error loading images', err);
        });
      });
  }
  getData () {
    axios
      .get ('/cards')
      .then (response => {
        this.setState ({
          cards: response.data,
        });
        console.log ('get state set', this.state.cards);
      })
      .catch (error => {
        console.log ('cannot get', error);
      });
  }

  postData (cardData) {
    axios.post ('/cards', cardData).then (this.getData).catch (error => {
      console.log ('cannot post', error);
    });
  }

  selectImages (imageUrl) {
    // if (!this.state.imageClicked) {
    this.setState ({
      selectedImage1: imageUrl,
      imageClicked: !this.state.imageClicked,
      imageClickCount: this.state.imageClickCount + 1,
      boardImages: [...this.state.boardImages, imageUrl],
    });
    console.log ('board urls in app component', this.state.boardImages);
    console.log ('selected image in app component', this.state.selectedImage1);
    console.log (
      'image click countin app component',
      this.state.imageClickCount
    );
  }

  render () {
    return (
      <div>
        <div className="header">
          <h1>Vision CARDS</h1>
          <h2> Inspirational Post Cards</h2>
          <h3> </h3>
        </div>
        <div className="board-list-container">
          <div>
            {this.state.imageClicked
              ? <Board
                  imageClicked={this.state.imageClicked}
                  imageClickCount={this.state.imageClickCount}
                  imageUrl={this.state.selectedImage1}
                  submitCard={this.postData}
                />
              : <Board
                  imageClicked={this.state.imageClicked}
                  imageUrl={this.state.selectedImage1}
                />}
          </div>
        </div>
        <div className="board-list">
          {this.state.cards.length === 0
            ? <p>Loading</p>
            : <BoardList
                data={this.state.cards}
                renderCard={this.toggleHidden}
              />}
        </div>
        <div className="search-container">
          <Search onSearch={this.searchImages} />
          <div>
            {this.state.loadingState
              ? <p>Loading</p>
              : <ImageList
                  data={this.state.images}
                  selectImage={this.selectImages}
                  toggleHidden={this.toggleHidden}
                />}
          </div>
        </div>

      </div>
    );
  }
}
export default App;
