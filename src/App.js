import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Plan from "./pages/plan";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:planId" element={<Plan />} />
      </Routes>
    </Router>
  );
}

export default App;
