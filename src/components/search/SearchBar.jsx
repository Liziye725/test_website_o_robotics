// SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle the search logic here
        console.log(`Search query: ${searchQuery}`);
        // Example: window.location.href = `/search?query=${searchQuery}`;
    };

    return (
        <form onSubmit={handleSearch} className="search_form">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search_input"
                placeholder="Search..."
            />
            <button type="submit" className="search_button">Search</button>
        </form>
    );
};

export default SearchBar;
