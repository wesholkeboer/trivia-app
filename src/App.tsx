import React, { useState } from "react";
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
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  return (
    <div className={`App ${darkModeEnabled ? "dark" : "light"}Mode`}>
      <Router>
        <Header
          toggleDarkMode={toggleDarkMode}
          darkModeEnabled={darkModeEnabled}
        />
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
