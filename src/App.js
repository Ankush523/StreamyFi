import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import SubscriptionCreation from "./pages/SubscriptionCreation";
import SubscriptionList from "./pages/SubscriptionList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/Subscription-creation" component={SubscriptionCreation}/>
          <Route path="/Subscription-list" component={SubscriptionList} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
