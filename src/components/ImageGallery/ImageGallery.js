import { Component } from 'react';
import { ImageList } from './ImageGalleryStyled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from '../../services/fetchImages';
import { LoadMore } from '../LoadMore/LoadMore';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';
class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    page: 1,
    per_page: 24,
    showModal: false,
    status: 'idle',
    imageModal: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.image !== this.props.image) {
      this.setState({ status: 'pending' });

      try {
        const images = await fetchImages(this.props.image).then(images => {
          if (images.length === 0) {
            this.setState({ status: 'idle' });
            toast.error('Введите корректный запрос');
          }
          this.setState({ status: 'resolved' });
          return images;
        });
        this.setState({ images });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  handleClick = async e => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        per_page: prevState.per_page + 12,
      };
    });

    const images = await fetchImages(this.props.image, this.state.per_page);
    this.setState({ images });
  };
  toggleModal = (largeImageURL, tags) => {
    this.setState(({ showModal }) => {
      return { showModal: !showModal };
    });
    this.setState({
      imageModal: {
        largeImageURL,
        tags,
      },
    });
  };

  render() {
    const { images, showModal, imageModal, status, error } = this.state;

    if (status === 'idle') {
      return <div>Введите запрос</div>;
    }
    if (status === 'pending') {
      return <TailSpin height={80} width={80} />;
    }
    if (status === 'rejected') {
      return <p>Whoops, something went wrong: {error.message}</p>;
    }
    if (status === 'resolved' && images.length > 0) {
      <LoadMore onClick={this.handleClick} />;
    }
    if (status === 'resolved') {
      return (
        <div>
          <ImageList>
            {images.map(images => (
              <ImageGalleryItem
                key={images.id}
                images={images}
                showModal={this.toggleModal}
              />
            ))}
          </ImageList>

          {showModal && (
            <Modal toggleModal={this.toggleModal}>
              <img src={imageModal.largeImageURL} alt={imageModal.tags} />
            </Modal>
          )}
        </div>
      );
    }
  }
}
export { ImageGallery };
