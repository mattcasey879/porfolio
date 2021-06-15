import { Route, Link, Switch } from 'react-router-dom'
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


    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
    <Link id='about' to='/contact'>Contact Me</Link>
    </div>
  );
}

export default App;
