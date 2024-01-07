
import {HashRouter, Routes, Route} from "react-router-dom";
import './App.css';
import UserModule from './userapp';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';
import Mylogin from './login';
import Myregister from './register';
import Adduser from './adduser';
import Edituser from './edituser';
import Userlist from "./userlist";
import Details from "./details";




function App() {
  if(localStorage.getItem("fullname") == null){
    return(
      <HashRouter>     
      <UserModule/>
     <Routes>  
       <Route exact path="/login" element={<Mylogin />} />
       <Route exact path="/register" element={<Myregister />} />
      </Routes>
   </HashRouter>
    ) 
  }
  else{
    return(
      <HashRouter>     
      <Header/>  
     <Routes>  
     <Route exact path="/" element={<Userlist />} />
       <Route exact path="/edituser/:userid" element={<Edituser/>} />
       <Route exact path="/details/:userid" element={<Details/>} />
       <Route exact path="/adduser" element={<Adduser />} />
     </Routes>
   </HashRouter>
   )
  }
}
 
// }

export default App;

