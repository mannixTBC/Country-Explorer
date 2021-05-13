import React from 'react';


const SearchBox= ({searchfield, searchChange,placeholder}) => {
    return(
        <div className='pa2'>
            <input
            className='pa3 ba b--gren bg-lightest-blue'
            type="search"
            placeholder={placeholder}
            onChange = {searchChange}
            value = {searchfield}
            />
        </div>
    )
}



export default SearchBox;