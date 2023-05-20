import styled from '@emotion/styled';

export const Header = styled.header``;

export const Form = styled.form`
  font: inherit;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  max-width: 520px;
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  background-color: #3c3a3a79;
  border: none;
`;

export const SearchField = styled.input`
  font: inherit;
  max-width: 350px;
  width: 100%;
  border-radius: 5px;
  margin: 16px auto;
  padding: 12px;
  display: block;
`;

export const SearchButton = styled.button`
  width: 100px;
  height: 45px;
  margin: auto;
  font: inherit;
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;