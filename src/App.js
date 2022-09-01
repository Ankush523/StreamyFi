import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SubscriptionCreation from "./pages/SubscriptionCreation";
import SubscriptionList from "./pages/SubscriptionList";
import Home from "./pages/Home";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/subscription-creation" element={<SubscriptionCreation/>}/>
          <Route path="/subscription-list" element={<SubscriptionList/>} />
          <Route path="startpage" element={<StartPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
