import React, { Component } from 'react';

export default class Grade extends Component {
  render() {
    const { desc, grade } = this.props;
    return (
      <div className="input-field">
        <input id="first_name" type="number" defaultValue={grade} />
        <label className="active" htmlFor="first_name">
          {desc}
        </label>
      </div>
    );
  }
}
