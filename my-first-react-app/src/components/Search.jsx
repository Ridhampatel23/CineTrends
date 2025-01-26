import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="search_icon.svg" alt="search"/>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search for movies..."
                />
            </div>
        </div>
    )
}
export default Search
