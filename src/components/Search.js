const Search = ({ resData }) => {
  function topRatedHandler() {
    console.log(
      "button clicked",
      resData.filter((i) => i.info.avgRating > 4)
    );
  }

  return (
    <button className="filter-btn" onClick={() => topRatedHandler()}>
      Top Rated
    </button>
  );
};

export default Search;
