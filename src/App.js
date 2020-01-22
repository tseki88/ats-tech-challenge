import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import CSVReader from 'react-csv-reader';

class App extends Component {
  
  constructor() {
    super();
    this.state  = {
      renderedData: []
    }
  }

  // Configuration of parsed csv file
  papaparseOptions = {
    skipEmptyLines: true,
    header: true //First row becomes header, and all data matrix keys become the header value.
  }
  
  saveData = (dataSource) => {
    
    dataSource.forEach((e) => {
      e["Date"] = e["Date"].split("/");
      console.log(e)
    })
    
    this.setState({
      renderedData: dataSource
    })

    console.log(this.state.renderedData)
  }


  render() {
    return (
      <div className="App">
        <CSVReader 
          onFileLoaded={data => this.saveData(data)}
          parserOptions={this.papaparseOptions} />
      </div>
    );
  }
}

export default App;
