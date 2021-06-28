import { Route, NavLink, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {

  const onChange = (evt) =>  {
    const id = evt.target
    id.remove();
  }
  return (
    <div className="App">
      <NavLink to='/'><button>Home</button></NavLink>
      <NavLink to='/projects'><button>Projects</button></NavLink>
      <NavLink id='about' to='/contact'><button>Contact Me</button></NavLink>
      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'> 
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
