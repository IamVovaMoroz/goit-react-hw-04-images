import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Form, SearchField, SearchButton } from './SearchBar.styled';
import { FiSearch } from 'react-icons/fi';

function SearchBar ({onSubmit}) {
  const [query, setQuery] = useState("");
  // state = {
  //   searchQuery: '',
  // };
  const handleQueryChange = event => {
    // this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    setQuery(event.currentTarget.value.toLowerCase() );
  };

 const handleSubmit = event => {
    event.preventDefault();
    // if (this.state.searchQuery.trim() === '') {
    if (query.trim() === '') {
      toast.error('Search field is empty');
     
      return;
    }
    // this.props.onSubmit(this.state.searchQuery);
   onSubmit(query);
   
  };


    return (
      <Header>
        {/* c пропсов приходит  onSubmit, передаем в пропсах */}
        <Form onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <FiSearch style={{ marginRight: 8 }} />
          </SearchButton>
          <SearchField
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleQueryChange}
          />
        </Form>
      </Header>
    );
  
}
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
