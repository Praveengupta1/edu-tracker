import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Plan from "./pages/plan";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} exact>
          <Route path=":planId" elemen={<Plan />} exact />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
