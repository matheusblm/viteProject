import { useState } from "react";
import { Route, Switch } from "wouter";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
 

  return (
    <div className="App">
      <Header />
      <main>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
