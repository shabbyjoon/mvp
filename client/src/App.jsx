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
      loadingState: true,
      selectedImage1: undefined,
      imageClicked: false,
      cards: [],
      isComponentHidden: true 
 
    }
    this.searchImages = this.searchImages.bind(this);
    this.selectImages = this.selectImages.bind(this);
    this.postData = this.postData.bind(this);
    this.getData = this.getData.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);

  }
  componentDidMount() {
    // this.searchImages();
    this.getData();
    console.log(this.state.cards)
  }

  toggleHidden () {
    this.setState({
      imageClicked: !this.state.imageClicked,
      isComponentHidden: !this.state.isComponentHidden
    })
  }

  searchImages(keyword) {
    axios
      .get(`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${keyword}&client_id=${credentials.APP_ID}`)
      .then(data => {
        this.setState({
          images: data.data.results,
          loadingState: false
        })
        .catch(err => {
          console.log('Error loading images', err)
        })
      })
  }
  getData() {
    axios
    .get('/cards')
    .then(response => {
      this.setState({
        cards: response.data
      })
      console.log('get state set', this.state.cards)
    })
    .catch(error => {
      console.log('cannot get', error);
    })
  }

  postData(cardData) {
    axios
    .post('/cards', cardData)
    .then(this.getData)
    .catch(error => {
      console.log('cannot post', error);
    })
  }
  
    selectImages(imageUrl){
      if (!this.state.imageClicked) {
        this.setState({
          selectedImage1: imageUrl,
          imageClicked: !this.state.imageClicked,
        })
        imageUrl = undefined;
        console.log('selected image 1', this.state.selectedImage1)
      } 
      // else { 
      //   this.setState({
          
      //   })

      // }


    }

  render(){
    return(
      <div>
        <h1>V-CARDS</h1>
        <h2> Inspirational Trading Cards</h2>
      <div className="main">
          <div>
          {this.state.imageClicked
          ? <Board imageClicked={this.state.imageClicked} imageUrl={this.state.selectedImage1} submitCard={this.postData}/>
          : <Board imageClicked={this.state.imageClicked}/>
           } 
           </div>
           <div className="search-container">
           <div >
        {this.state.cards.length === 0
						? <p>Loading</p>
            :  <BoardList data={this.state.cards} renderCard={this.toggleHidden}/>}
         </div> 
         
        <div >
        <Search onSearch={this.searchImages}/>
        <div className="img"> 
			{this.state.loadingState
						? <p>Loading</p>
            : <ImageList 
                data={this.state.images} selectImage={this.selectImages} toggleHidden={this.toggleHidden} />}
				</div>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
export default App;

