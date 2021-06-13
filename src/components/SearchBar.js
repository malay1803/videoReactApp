import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) =>{
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event =>{
      event.preventDefault()
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input value={this.state.term} onChange={this.onInputChange} type="text" />
          </div>
        </form>
      </div>
    );
  }
}
