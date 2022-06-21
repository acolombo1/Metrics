import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './header.css';

function Header() {
  const [filter, updateFilter] = useState({ filter: '' });
  const onFilterChange = (event) => {
    updateFilter({ filter: event.target.value });
  };
  const dispatch = useDispatch();
  return (
    <form className="FilterForm">
      <input value={filter.filter} type="text" id="filter" placeholder="1-10" name="filter" onChange={onFilterChange} />
      <button
        className="FilterButton"
        type="button"
        onClick={() => {
          const filterarr = filter.filter.match(/[0-9]{1,3} *- *[0-9]{1,3}/g);
          if (filterarr) {
            if (filterarr.join('') === filter.filter) {
              const newfilter = filterarr.join().replace(/\s/g, '');
              if (newfilter !== '') {
                const liminf = parseInt(newfilter.substring(0, newfilter.search('-')), 10);
                const limsup = parseInt(newfilter.substring(newfilter.search('-') + 1), 10);
                if (limsup >= liminf) {
                  dispatch({
                    type: 'SET_FILTER',
                    payload: { liminf, limsup },
                  });
                }
              }
            }
          }
        }}
      >
        Filter
      </button>
    </form>
  );
}

export default Header;
