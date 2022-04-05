import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Navbar from "./Components/NavBar/Navbar";
import NotFound from "./Pages/NotFound";
import MovieDetails from "./Pages/Movies/MovieDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Movies from "./Pages/Movies/Movies";
import Favorites from "./Pages/Movies/Favorites";



function App() {
  return (
    <Router className="container">
      <Navbar/>
      <switch>
      <Route path="/" exact component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/movies" exact component={Movies}/>
      <Route path="/movies/:id" component={MovieDetails}/>
      <Route path="/favorites" component={Favorites}/>
      {/* <Route path="*" component={NotFound}/> */}
      </switch>
    </Router>
  );
}

export default App;
