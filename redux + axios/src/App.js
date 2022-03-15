import AddUser from "./components/AddUser";
import Get from "./components/Get";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Updatecomponent from "./components/Updatecomponent";
import Deletecomponent from "./components/Deletecomponent";

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><button type="button" className="btn btn-primary">Get</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/add"><button type="button" className="btn btn-primary">Add user</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/update"><button type="button" className="btn btn-primary">Update</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/delete"><button type="button" className="btn btn-primary">Delete</button></Link>
            </li>
          </ul>
        </nav>
      <Routes>
      <Route exact path="/" element={ <Get/>}/> 
      <Route path="/add" element={<AddUser/>}/> 
      <Route path="/update" element={<Updatecomponent/>}/> 
      <Route path="/delete" element={<Deletecomponent/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
