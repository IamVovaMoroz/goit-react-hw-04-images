import React, { useEffect, useState } from 'react';

import { ToastContainer} from 'react-toastify';
import { Container, TextWarning, ImageNotFound, BlockWarning } from './App.styled';
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
{/* выводим сообщение только если  пустой массив, запрос отправлен и нет загрузки */}
{querySubmitted && images.length === 0 &&  !loading && (
       <BlockWarning> <TextWarning>Here are no images available for your request, but you can still click below.</TextWarning>
       <ImageNotFound
       src="https://i.pinimg.com/564x/44/8b/70/448b7040d44cfc0a620c03c63df26680.jpg"
       alt="Image not found"
     /></BlockWarning>
        
      )}
            {images.length > 0 && images.length !== totalHits && (
            
            <LoadMoreButton onClick={loadMore} />
            )}
          
          </Container>
  )
}


