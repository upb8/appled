import React from 'react';
import './style.css';
import ReactSearchBox from 'react-search-box';

const data = [
  {
    key: 'john',
    value: 'John Doe',
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

function Search() {
  
  return (
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
          inputBoxHeight='30vh'
        />
  );
}

export default Search;
