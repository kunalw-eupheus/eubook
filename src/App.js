import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/pages/Login';
import Dashboard from './component/pages/Dashboard';
import View from './component/pages/View';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/view" element={<View/>}/>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
