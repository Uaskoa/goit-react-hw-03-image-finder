import './ImageGallery.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  id,
  webformatURL,
  alt,
  largeImageURL,
  onOpenModal,
}) => (
  <li key={id} className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={alt}
      data-source={largeImageURL}
      className="ImageGalleryItem-image"
      onClick={e => onOpenModal(e)}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  onOpenModal: PropTypes.func,
};



