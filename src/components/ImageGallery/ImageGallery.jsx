import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList, GalleryText } from './ImageGallery.styled';
import PropTypes from 'prop-types';



function ImageGallery({ images, openModal, updateImglink }) {
  if (images.length === 0) {
    return <GalleryText>No images available for your request</GalleryText>;
  }
  // console.log('картинки з галереї', images);
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
    
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            openModal={openModal}
            updateImglink={updateImglink}
          />
        );
      })}
    </GalleryList>
  );
}

export default ImageGallery;


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
