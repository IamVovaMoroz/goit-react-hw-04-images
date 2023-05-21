import { GalleryItem, Thumb, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
// export default class ImageGalleryItem extends Component {


export default function ImageGalleryItem({src, alt, largeImageURL}) {
// создаём set для модалки
const [isModalOpen, setIsModalOpen] = useState(false);

// переключатель на модалке , обратное делает значение. На открытие и на закрытие модалки
const handleToggleModal = () =>{
  setIsModalOpen(prevState => !prevState);

};
  
    return (
      <GalleryItem>
        <Thumb>
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            // при клике на изображ, открываем модалку
            onClick={handleToggleModal}
            // onClick={this.onImageClick}
          />
        </Thumb>
   
        {isModalOpen && <Modal img={largeImageURL} tags={alt}  onClose={handleToggleModal}/>}
      </GalleryItem>
    );
  
}
// ImageGalleryItem.propTypes = {
//   updateImglink: PropTypes.func.isRequired,
//   openModal: PropTypes.func.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
// };
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};