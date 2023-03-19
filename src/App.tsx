import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import EndScreen from "./components/EndScreen";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/end' element={<EndScreen />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
