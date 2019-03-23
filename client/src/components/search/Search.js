import React from 'react'
import './search.css'
const SearchBox = () =>{
    return(
       <div className="s-container">
            <div id="search">
            <input id="input" placeholder="Find Meme.." />
            <button id="button"><i class="fa fa-search"></i></button>
            <div class="spinner"><i class="fa fa-spinner"></i>
            </div>
        </div>
       </div>
    )
}

export default SearchBox