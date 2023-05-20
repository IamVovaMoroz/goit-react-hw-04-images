import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  /* // background-color: rgba(221, 229, 232, 0.256); */
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2); /* Увеличенный размер тени */
`;

export const Thumb = styled.div`
  height: 300px;
  width: 450px;
  overflow: hidden;
  margin-bottom: 0;
`;
export const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 750ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.15);
  }
`;