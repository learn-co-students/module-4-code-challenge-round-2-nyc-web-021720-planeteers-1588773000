import React from 'react';

class SearchBar extends React.Component {
  render() {
    // console.log("search bar ", this.props.handleSearch )

    return (
      <div className="search">

        <input
          type="text"
          onChange={this.props.handleSearch}
          placeholder="Search Planeteers"
        />
      </div>
    );
  }

}

export default SearchBar;
