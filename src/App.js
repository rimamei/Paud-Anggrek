import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer, Header } from "./component";
import { Home, PageFix } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full box-border m-0 p-0 font-body text-sm font-normal text-body text-black">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kontak" component={PageFix} />
          <Route exact path="/tentang" component={PageFix} />
          <Route exact path="/daftar" component={PageFix} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
