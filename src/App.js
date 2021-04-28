import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar'
import axios from 'axios'
import ImageGallery from './components/ImageGallery/ImageGallery'

// axios.defaults.headers.common['Authorization'] = 'Bearer 20667808-d6e3a4866a107921c5b89b931';

// const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '20667808-d6e3a4866a107921c5b89b931';


class App extends Component {
 
  state = {
    images: [],
  };
  
    componentDidMount() {
    axios.get('https://pixabay.com/api/?key=20667808-d6e3a4866a107921c5b89b931&q=yellow+flowers')
      .then(response => {
        this.setState({ images: response.data.hits })
      })
   
  }
 
  onChangeQuery = (query) => {
    console.log(query);
    
  }

  render() {
   const { images}=this.state
    return (
      <div >
        <Searchbar onSubmit={ this.onChangeQuery}/>
        <ImageGallery images={images} />
      </div>
    );
  }
}

export default App;
