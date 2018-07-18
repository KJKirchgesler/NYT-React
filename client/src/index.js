// Include the Main React Dependencies
import ReactDOM from "react-dom";

//CSS 
//import './css/style.css';

// Grabs the Routes
import routes from "./config/routes";

// Renders the contents according to the route page
// Displays the contents in the div app of index.html
ReactDOM.render(routes, document.getElementById("root"));

