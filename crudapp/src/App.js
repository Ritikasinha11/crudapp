import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Allusers from "./Components/Allusers";
import Adduser from "./Components/Adduser";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";
import { BrowserRouter,Switch,Route } from 'react-router-dom';



function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <Switch>
    <Route exact path="/" component={About}/>
    <Route path="/all" component={Allusers}/>
    <Route path="/add" component={Adduser}/>
    <Route path="/edit/:id" component={EditUser}/>
    <Route component ={NotFound}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
