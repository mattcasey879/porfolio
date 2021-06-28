import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {

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
    </div>
  );
}

export default App;
