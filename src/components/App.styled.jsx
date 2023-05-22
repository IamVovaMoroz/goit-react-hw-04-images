import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200;
  margin: 0px auto;
  padding: 15px;
  /* background-color: #ade6e6; */
`;


export const TextWarning = styled.h2`
 text-align: center;
 color:#37b2d9;
`;

export const ImageNotFound = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0.7;
  cursor: pointer;
  animation: rotate 2s linear infinite;

  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: #37b2d9;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    animation-play-state: paused;
    
  }
 


`;

export const BlockWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  flex-direction: column
`;