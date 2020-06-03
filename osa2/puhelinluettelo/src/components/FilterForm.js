import React from 'react'

const FilterForm = ({filterWord, handleFilterChange}) => {

    return(
        <form>
            <div>
                filter shown with: <input
                value={filterWord}
                onChange={handleFilterChange}
                />
            </div>
        </form>
    )
}

export default FilterForm