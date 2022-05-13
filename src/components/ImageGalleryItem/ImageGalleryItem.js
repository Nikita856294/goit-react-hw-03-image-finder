import { ImageItem } from './ImageGalleryStyled';

function ImageGalleryItem({ images, showModal }) {
  return (
    <ImageItem className="gallery-item">
      <img
        key={images.id}
        src={images.webformatURL}
        alt={images.tag}
        onClick={() => showModal(images.largeImageURL, images.tags)}
        width="400"
        height="200"
      />
    </ImageItem>
  );
}

export default ImageGalleryItem;
