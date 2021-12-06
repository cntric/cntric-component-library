import React from 'react';
import {Button, SearchbarDemo} from "./ComponentLibrary";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h1>Button</h1>
      <Button>Hello world!</Button>
      <h2>Searchbar</h2>
      <SearchbarDemo/>
    </div>
  );
}

export default App;
