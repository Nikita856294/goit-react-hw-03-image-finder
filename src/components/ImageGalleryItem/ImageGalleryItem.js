function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  <li class="gallery-item">
    <img id={id} src={webformatURL} alt="" />
  </li>;
}

export default ImageGalleryItem;
