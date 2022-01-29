
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { EmailOutlined, EmailRounded, HomeOutlined, InsertDriveFileOutlined, NfcOutlined, PhoneMissedOutlined } from '@material-ui/icons';
import Home from './Component/Home';
function App() {
  AOS.init();

  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;
