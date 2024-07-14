import React from 'react';
import City from '../containers/city';
import CityList from '../containers/city_list';


const App = () => {
  return (
    <div className="app">
      <CityList />
      <City />
    </div>
  );
};

export default App;
