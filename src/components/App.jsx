import React, { useEffect, useState } from 'react';

import { ToastContainer} from 'react-toastify';
import { Container, TextWarning } from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Spinner from './Loader/Loader';

import LoadMoreButton from './Button/Button';
import fetchApi from '../components/service/ApiService';


export const App = () => {
const [searchQuery, setSearchQuery] = useState("");
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
const [totalHits, setTotalHits] = useState(null);
const [loading, setLoading] = useState(false);
// Для отслеживания что запрос отправлен пользователем
const [querySubmitted, setQuerySubmitted] = useState(false);
const [error, setError]  = useState(null);


//     // массив обьектов - console.log(data)
//     // массив картинок console.log(data.hits) передаем в картинки 
//     // console.log(totalHits)  всего результатов передаем в totalHits
    
//     setTotalHits(data.totalHits)
//     // если ошибка ловим и set в error
//     .catch(error => setError(error))



useEffect(() => {
  if (!searchQuery) {
    return;
  }
  fetchApi(searchQuery, page)
    .then(data => {
      setImages(prevImages => [...prevImages, ...data.hits]);
      setTotalHits(data.totalHits);
       // Проверка наличия изображений после получения ответа
      if (data.hits.length === 0) {
        setQuerySubmitted(true);
      }
    })
    .catch(error => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
}, [searchQuery, page]);






const handleSubmitForm = query => {
      if (searchQuery === query) {
        return;
      }
   
      setImages([])
      setPage(1);
      setLoading(true)
      setSearchQuery(query);
      // изменяем состояние если отправили запрос
      setQuerySubmitted(true);
    };
  
  
 
  // при нажатии на кнопку loadMore prevState(prevPage) + 1 и setLoading(true)
    const loadMore = () => {
      setPage(prevState => prevState + 1);
      setLoading(true)
    };



  return (
    <Container>
          <SearchBar onSubmit={handleSubmitForm} />
        <ToastContainer autoClose={2000} position="top-center" />
        {/* если идёт загрузка используем Spinner */}
         {loading && <Spinner />}
       {error && (
              <h1 style={{ color: 'red', textAlign: 'center' }}>{error.message}</h1>
            )}
            
        {/* ImageGallery всегда рендерим т.к или пустой массив или массив с изображаениями */}
              <ImageGallery images={images}
                // openModal={this.openModal}
                // updateImglink={this.updateImglink}
/>
{querySubmitted && images.length === 0 &&  !loading && (
        <TextWarning>No images available for your request</TextWarning>
      )}
            {images.length > 0 && images.length !== totalHits && (
            
            <LoadMoreButton onClick={loadMore} />
            )}
          
          </Container>
  )
}


// тоже самое на class

// export class App extends Component {
//   state = {
//     searchQuery: '',
//     images: [],
//     page: 1,
//     status: 'idle',
//     totalHits: null,
//     showModal: false,
//     modalPicture: '',
//     loading: false,
//     showBtnLoadMore: false,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { page, searchQuery } = this.state;
//     if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
//       this.setState({ status: 'pending' });

//       try {
//         const imageData = await fetchApi(searchQuery, page);
//         this.totalHits = imageData.total;
//         const imagesHits = imageData.hits;
//         if (!imagesHits.length) {
//           toast.warning(
//             'No results for your search, please try something else.'
//           );
//         }
//         this.setState(({ images }) => ({
//           images: [...images, ...imagesHits],
//           status: 'resolved',
//           showBtnLoadMore: true,
//         }));
//       } catch (error) {
//         toast.error(`Sorry something went wrong. ${error.message}`);
//         this.setState({ status: 'rejected' });
//       }
//     }
//   }
//   handleSubmitForm = searchQuery => {
//     if (this.state.searchQuery === searchQuery) {
//       return;
//     }
//     this.resetState();
//     this.setState({ searchQuery });
//   };

//   handleSelectedImage = (largeImageUrl, tags) => {
//     this.setState({
//       selectedImage: largeImageUrl,
//       alt: tags,
//     });
//   };
//   resetState = () => {
//     this.setState({
//       searchQuery: '',
//       images: [],
//       page: 1,

//       alt: null,
//       status: 'idle',
//       error: null,
//     });
//   };
//   closeModal = () => {
//     this.setState({
//       showModal: false,
//     });
//   };
//   openModal = () => {
//     this.setState({
//       showModal: true,
//     });
//   };
//   updateImglink = imgLink => {
//     this.setState({ modalPicture: imgLink });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, status, error } = this.state;
//     return (
//       <Container>
//         <SearchBar onSubmit={this.handleSubmitForm} />
//         <ToastContainer autoClose={2000} position="top-center" />
//         {status === 'pending' && <Spinner />}
//         {error && (
//           <h1 style={{ color: 'red', textAlign: 'center' }}>{error.message}</h1>
//         )}
//         {images.length !== [] && (
//           <ImageGallery
//             images={this.state.images}
//             openModal={this.openModal}
//             updateImglink={this.updateImglink}
//           />
//         )}
//         {images.length > 0 && images.length !== this.totalHits && (
//           <LoadMoreButton onClick={this.loadMore} />
//         )}
//         {this.state.showModal && (
//           <Modal onClose={this.closeModal} img={this.state.modalPicture} />
//         )}
//       </Container>
//     );
//   }
// }
