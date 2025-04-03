import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './component/Home'
import CMS from './component/CMS'
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cms" element={<CMS />} />
    </Routes>
  </Router>
)

export default App
