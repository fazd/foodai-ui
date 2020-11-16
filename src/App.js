import React, {useState} from "react";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Recipes from "./pages/Recipes/Recipes";
import Footer from "./components/Footer/Footer";
import Appbar from "./components/Appbar/Appbar";

import UserContext from "./context/UserContext";

function App() {

  const [authState, setAuthState] = useState({
    user: null,
    reported: false,
  });

  const requireLogin = (Component) => {
    if(authState.reported && authState.user){
      return <Component />;
    }
    else{
      return <Redirect to="/login" />;
    }
  }


  return (
    <div className="main-app">
       <UserContext.Provider value={{ authState, setAuthState }}>
        <CssBaseline />
        <Appbar />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/recipes"
              render={() => requireLogin(Recipes)}
            >
            </Route>
          </Switch>
          <Footer />
       </UserContext.Provider>
    </div>
  );
}

export default App;
