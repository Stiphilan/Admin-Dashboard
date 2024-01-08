import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./component/pages/Home/Home";
import './app.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import UserList from "./component/pages/UserList/UserList";
import User from "./component/pages/User/User";
import NewUser from "./component/pages/NewUser/NewUser";
import ProductList from "./component/pages/ProductList/ProductList";
import Product from "./component/pages/Product/Product";

function App() {
  
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/users" element = {<UserList/>}/>
  <Route path="/user/" element = {<User/>}/>
  <Route path="/newUser/" element = {<NewUser/>}/>
  <Route path="/products/" element = {<ProductList/>}/>
  <Route path="/product/" element = {<Product/>}/>
  
  

</Routes>
        

        


      </div>
    </Router>
  );
}

export default App;
