import './App.css';
import {Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import './components/style.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route path='/Blog' component={Blog}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
 