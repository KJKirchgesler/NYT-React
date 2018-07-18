// Include React as a dependency
import React, { Component } from 'react'

// Include the Query and Results components
import Query from "./Search/Query";
import Results from "./Search/Results";

// Include the helpers for making API calls
import helpers from "../utils/helpers";

// Create the Search component
class Search extends Component {
  
// Setting the initial state variables
  state = { 
    results: []
  }

  // This function will be passed down into child components so they can change the "parent"
  setQuery = (newQuery, newStart, newEnd) => {
    helpers.runQuery(newQuery, newStart, newEnd)
    .then((data) => {
      this.setState({ results: { docs: data.docs } });
    });
  }

  // Render the component
  render() {
    return (
      <div className="main-container">

        {/* setQuery function enables Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        
        {/* Results are passed  into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
};

// Export the module back to the route
export default Search;