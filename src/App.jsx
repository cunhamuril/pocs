import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
