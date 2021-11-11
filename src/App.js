import logo from './logo.svg';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Ourproducts from './Pages/Ourproducts/Ourproducts';
import Singlepage from './Pages/Singlepage/Singlepage';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Authprovider from './hooks/Context';
import useFirebase from "./hooks/Firebasehook";
import PrivateRoute from './PrivateRoute/Privateroute';
function App() {
    const {user}=useFirebase();
  return (
    <div className="App">
     <Authprovider>
      <BrowserRouter>
         <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/products">
                <Ourproducts/>
            </Route>

            <PrivateRoute path="/singleproduct/:id">
                <Singlepage/>
            </PrivateRoute>

            <Route path="/login">
                 <Login/>
            </Route>

            <Route path="/registration">
               <Registration/>
            </Route>
             
            

          
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
         </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
