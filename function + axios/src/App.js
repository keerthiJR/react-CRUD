import Getcomponent from "./components/Getcomponent";
import Patchcomponent from "./components/Patchcomponent";
import Deletecomponent from './components/Deletecomponent'
import Postcomponent from "./components/Postcomponent";
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><button type="button" className="btn text-white bg-dark">Get</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/patch"><button type="button" className="btn text-white bg-dark">Update</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/delete"><button type="button" className="btn text-white bg-dark">Delete</button></Link>
            </li>
            <li className="nav-item">
              <Link to="/post"><button type="button" className="btn text-white bg-dark">Post</button></Link>
            </li>
          </ul>
        </nav>
        
      </>
      <Routes>
        <Route exact path="/" element={<Getcomponent/>}/> 
        <Route exact path="/patch" element={<Patchcomponent/>}/> 
        <Route exact path="/delete" element={<Deletecomponent/>}/> 
        <Route exact path="/post" element={<Postcomponent/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;