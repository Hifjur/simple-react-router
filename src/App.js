
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Frineds from './Components/Friends/Frineds';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/friends" 
        activeStyle={{
            fontWeight: "bold",
            color: "red"
            }}
        > Frineds</NavLink>
        <NavLink to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
            }}
        > Home</NavLink>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Frineds></Frineds>
          </Route>
          <Route path ="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </BrowserRouter>
      
    </div>

    
  );
}

export default App;
