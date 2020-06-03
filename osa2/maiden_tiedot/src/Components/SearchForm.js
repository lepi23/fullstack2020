import React from 'react'

const SearchForm = ({searchWord, handleSearchWord}) =>{
    return(
        <form>
            <div>
                find countries: <input
                value = {searchWord}
                onChange = {handleSearchWord}
                />
            </div>
        </form>
    )
}

export default SearchForm