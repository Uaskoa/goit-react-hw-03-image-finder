import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from 'react-loader-spinner';
// import Spinner from './components/Loader/Loader'
import fetchImages from './services/images-api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });
    fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    if (this.state.showModal) {
      this.setState({ largeImgUrl: '' });
    }

    // console.log(e.target);
  };

  handleModalImg = e => {
    this.setState({ largeImgUrl: e.target.dataset.source });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, error, showModal, largeImgUrl } = this.state;
    const shouldRenderLoadButton = images.length > 0 && !isLoading;

    return (
      <div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImgUrl} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && (
          <h1 className="Error">Something went wrong. Please try again.</h1>
        )}
        <ImageGallery images={images} onOpenModal={this.handleModalImg} />
        {isLoading && (
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#3f51b5"
            height={50}
            width={50}
            timeout={3000}
          />
        )}
        {shouldRenderLoadButton && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
