import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';

class App extends Component {
  
  // Configuration of parsed csv file
  papaparseOptions = {
    header: true //First row becomes header, and all data matrix keys become the header value.
  }
  
  render() {
    return (
      <div className="App">
        <CSVReader 
          onFileLoaded={data => console.log(data)}
          parserOptions={this.papaparseOptions} />
      </div>
    );
  }
}

export default App;
