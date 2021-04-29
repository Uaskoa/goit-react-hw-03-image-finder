import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          id={image.id}
          key={image.id}
          webformatURL={image.webformatURL}
          alt={image.tags}
          largeImageURL={image.largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
