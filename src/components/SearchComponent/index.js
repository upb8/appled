import React from 'react';
import './style.css';
import ReactSearchBox from 'react-search-box';
import partsData from '../../res/parts/parts.json';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const data = [
  {
    key: 'john',
    value: 'John Doe',
    value: 'kjon kabir',
    value: 'jhon putki'
  },
  {
    key: 'jane',
    value: 'Jane Doe',
  },
  {
    key: 'mary',
    value: 'Mary Phillips',
  },
  {
    key: 'robert',
    value: 'Robert',
  },
  {
    key: 'karius',
    value: 'Karius',
  },
]

const options = [
  'one', 'two', 'three'
]

function Search() {
  // console.log(partsData.cpu.core2Duo.E4200.searchable)
  //console.log(this.props.location);
  
  return (
    <div>
      <div>
        <label className="label">
          Hackintosh guide (Dummy text)
        </label>
      </div>
      <div className="searchContainerHolder">
        <div className="searchContainer">
          <div className="searchDropdown">
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          </div>
          <div className="searchBox">
      <div className="rsb">
          <ReactSearchBox
                    placeholder="Search for John, Jane or Mary"
                    data={data}
                    onSelect={record => console.log(record)}
                    onFocus={() => {
                      console.log('This function is called when is focussed')
                    }}
                    onChange={value => console.log(value)}
                    fuseConfigs={{
                      threshold: 0.05,
                    }}
                    inputBoxHeight='10vh'
                    inputBoxFontSize='2.1vh'
                    
                  />
      </div>
          

          </div>
          <div className="searchButton">
          <p>lalal</p>
          </div>
        </div>
      </div>
      
        
    </div>
    
  );
}

export default Search;
