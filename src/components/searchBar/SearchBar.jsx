import react from "react";
import "./SearchBar.css";

class SearchBar extends react.Component {
  state = { text: "Search video" };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.text);
  };

  onChangeHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="bar" onSubmit={this.onSubmitHandler}>
        <div style={{ backgroundColor: "#181818" }} className="ui segment bar">
          <form className="form searchForm">
            <div className="field">
              <label
                style={{
                  fontSize: "2.2rem",
                  marginBottom: "20px",
                  color: "#ff5959",
                }}
                htmlFor="search"
              >
                Youtube
              </label>
              <div className="searchBar">
                <input
                  id="search"
                  type="text"
                  placeholder={this.state.text}
                  onChange={this.onChangeHandler}
                />
                <button className="searchButton">
                  <i
                    onClick={this.onSubmitHandler}
                    className="fontButton fas fa-search fa-2x"
                  ></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
