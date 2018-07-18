// Include the Axios library for HTTP requests
import axios from "axios";

// NYT API Key 
var APIKey = "2b1986cffa6b4c7a959dbe8876df102e";

// Helper Functions
const helpers = {

  // This will run our query.
  runQuery: function(term, start, end) {

    // Adjust to get search terms in proper format
    var formattedTerm = term.trim();
    var formattedStart = start.trim() + "0101";
    var formattedEnd = end.trim() + "1231";

    console.log("Query Run");
    
    // Run a query using Axios. Then return the results as an object with an array.
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedEnd
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },
  
  // This will return any saved articles from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  
  // This will save new articles to our database
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    console.log('postSaved', title)
    
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  
  // This will remove saved articles from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};

// Export the helpers function
export default helpers;