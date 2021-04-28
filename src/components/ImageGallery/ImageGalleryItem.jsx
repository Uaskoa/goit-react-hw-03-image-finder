import './ImageGallery.scss';

const ImageGalleryItem = ({ id, webformatURL }) => (
  <li key={id} className="ImageGalleryItem">
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
