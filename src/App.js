//feature 1
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All rights is reserved</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
