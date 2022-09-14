import './App.css';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home  from './components/home';
import Profile from './components/profile';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
    </nav>
          <Switch>
            <Route path={['/', './home']} exact >
              <Home />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
          </Switch>
    </BrowserRouter>
  );
}

export default App;
