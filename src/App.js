import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard"
// import Home from "./pages/Home";
// import CustomerFundTransfer from "./pages/CustomerFundTransfer/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";


function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
