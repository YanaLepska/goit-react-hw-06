import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <>
      <p className={css.findCotact}>
        <b>Find contacts by name:</b>{" "}
      </p>
      <input
        className={css.inputCotact}
        type="text"
        value={filters}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
