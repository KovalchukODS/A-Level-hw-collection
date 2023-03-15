import "./Header.css";

const Header = (props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" onChange={props.onInputFinder} />
      <select value={props.optionAge} onChange={props.onInputSelect}>
        <option value="default">Default</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
      <button type="reset" onClick={props.onBtnReset}>
        Reset
      </button>
    </form>
  );
};

export default Header;
