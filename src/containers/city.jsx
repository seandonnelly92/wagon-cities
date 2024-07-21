import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className="city">
        <h5>{this.props.city.name}</h5>
      </div>
    );
  }
}

export default City;
