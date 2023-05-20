import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background-color: #37b2d9;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #fff;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  min-width: 180px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0062cc;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.3);
    transform: scale(1.05); /* Добавленный эффект приближения */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: #0062cc;
    box-shadow: none;
    transform: scale(1); /* Возврат к исходному размеру при активации кнопки */
  }
`;