import './ImageGallery.scss';

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
