import React, { useState, useEffect, useCallback, useReducer } from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// const useDebounce = (fn, wait) => {
//   return (...args) => {
//     window.setTimeout(() => {
//       fn.call(this, ...args);
//     }, wait);
//   }
// }

const initialState = {
  fetching: true,
  items: null,
}

function reducer(state, action) {
  switch(action.type) {
    case 'set_fetching':
      return { fetching: action.isFetching, ...state }
    case 'set_items':
      return { items: action.items, fetching: false }
    default:
      return state;
  }
}

function Autocomplete({ onSelectItem }) {
  const [query, setQuery] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const delayedFetchItems = useCallback(lodash.debounce(fetchItems, DEBOUNCE_DELAY), [query]);
  
  useEffect(() => {
    if (query.length > 0) {
      delayedFetchItems(query);
    }
  }, [query, delayedFetchItems]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const handleListClick = (event) => {
    const maybeListItem = event.target;

    if (maybeListItem.classList.contains('list-item')) {
      const listItem = maybeListItem;
      onSelectItem(listItem.innerText);
    }
  };

  const fetchItems = (query) => {
    dispatch({ type: 'set_fetching', isFetching: true });

    axios.get(`${ITEMS_API_URL}?q=${query}`)
      .then(items => {
        dispatch({ type: 'set_items', items, });
      })
      .catch(error => {
        dispatch({ type: 'set_fetching', isFetching: false })
        console.error(error);
      });
  };

  return (
    <div className={
      classnames('wrapper', {
        [state.fetching]: 'is-loading'
      })
    }>
      <div className="control">
        <input type="text" value={query} onChange={handleInputChange} className="input" />
      </div>
      
      <div className="list is-hoverable" onClick={handleListClick}>
        {state.items && state.items.map(item => (
          <div className="list-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Autocomplete;