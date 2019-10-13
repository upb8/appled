import React from 'react';
import './style.css';
import SearchComponent from '../../components/SearchComponent';

function Search() {
  return (
    <div className="main">
     
     <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
        <div class="hamburger"><div></div></div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
      </div>
     </div>
     
     <SearchComponent />
    </div>
  );
}

export default Search;
