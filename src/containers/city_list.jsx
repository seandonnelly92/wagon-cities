import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from './city'; // Ensure the import path is correct
import { setCities } from '../actions';

class CityList extends Component {

  // This will trigger the action in index.js
  // The action will "call the API"
  // The reducer will receive the payload and update the redux store
  componentWillMount() {
    // TODO: Dispatch an action to update the Redux State Tree (cities)
    this.props.setCities();
  }

  // static defaultProps = {
  //   cities: [
  //     { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  //     { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  //     { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
  //   ]
  // };

  render() {
    return (
      <div className="cities">
        <h2>Cities</h2>
        {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

// This function wires the action (in this case SET_CITIES) to the props of the component.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

// Must wire this component/container to the redux state store
function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
