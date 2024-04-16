
import css from './SearchBox.module.css'

const SearchBox = ({inputValue, handleChange}) => {
  return (
    <>
          <p className={css.findCotact}><b>Find contacts by name:</b> </p>  
          <input className={css.inputCotact}
              type="text"
              value={inputValue} 
              onChange={handleChange}
          />
    </>
  )
}

export default SearchBox