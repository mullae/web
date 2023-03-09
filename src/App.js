import React from "react";
import { Content, Footer, Reference } from "components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  console.log("version 1.0.1");
  return (
    <div className="App items-center justify-center">
      <Router>
        {/* <Header /> */}
        <Route path="/" exact={true} component={Content} />
        <Route path="/reference" exact={true} component={Reference} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
