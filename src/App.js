import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/pages/Login';
import Dashboard from './component/pages/Dashboard';
import View from './component/pages/View';
import Admin from './component/pages/Admin';
import AllBooks from './component/pages/AllBooks';
import Users from "./component/pages/Users";
import AddInfo from './component/pages/AddInfo';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/view" element={<View/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/all_books" element={<AllBooks/>}/>
            <Route path="/admin/users" element={<Users/>}/>
            <Route path="/admin/addInfo" element={<AddInfo/>}/>
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
