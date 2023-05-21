import {  useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContainer, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal ({onClose, tags, img}) {
    /* eslint-disable */
  const handleKeyDown = event => {
    if (event.code === 'Escape'){
       onClose();
         // this.props.onClose();
     }
  };
  /* eslint-enable */

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(()=>{
    // componentDidMount заменяем , вешаем слушателя
    window.addEventListener('keydown', handleKeyDown);
    // имитация WillUnmount компонента=>>   " return () =>  "  снимаем слушателя в конце
return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }
  
 

    return createPortal(
      <ModalOverlay onClick={handleBackdropClick}>
        <ModalContainer>
          <Img src={img} alt={tags} />
        </ModalContainer>
      </ModalOverlay>,
      modalRoot
    );

}

export default Modal;

// Modal.propTypes = {
//   img: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};