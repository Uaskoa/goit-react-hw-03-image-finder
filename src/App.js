import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import imagesApi from './services/images-api';



class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
  };

  componentDidMount() {
    // axios.get('https://pixabay.com/api/?key=20667808-d6e3a4866a107921c5b89b931&q=yellow+flowers')
    //   .then(response => {
    //     this.setState({ images: response.data.hits })
    //   })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  // fetchImages =() => {
  //    const {currentPage, searchQuery } = this.state
  //   axios.get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=${IMG_TYPE}&orientation=${ORIENTATION}&per_page=12`)
  //     .then(response => {
  //       this.setState(prevState => ({ images: [...prevState.images, ...response.data.hits], currentPage: prevState.currentPage +1 }))
  //       console.log(this.state);
  //     })
  // }

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery};
    imagesApi.fetchImages(options).then(hits => {
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
      console.log(this.state);
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />

        {images.length > 0 && <Button onClick={this.fetchImages} />}

        {/* <button type='button' className="Button" onClick={this.fetchImages}>Load more</button> */}
      </div>
    );
  }
}

export default App;
