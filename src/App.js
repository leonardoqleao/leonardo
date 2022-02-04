import Menu from './jsx/menu.jsx'
import Repo from './jsx/menu/repo.jsx';
import Exp from './jsx/menu/exp.jsx';
import Project from './jsx/menu/projct.jsx';
import Psta from './jsx/menu/psta.jsx';
import Edu from './jsx/menu/edu.jsx';
import Github from './jsx/menu/github.jsx';
import Contact from './jsx/menu/contact.jsx';
import './style/App.css';
import './style/dark.css';
import './style/light.css';
import './style/teste.css';
import './style/media.css';
import './style/index.css';

import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu/>
        <div className='body bcolor'>
          <div className='stats'>
            <div> <Psta/> </div>
            <div> <Exp /> </div>
            <div> <Project /> </div>
            <div> <Github/> </div>
            <div> <Repo /> </div>
            <div> <Edu /> </div>
            <div> <Contact /> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
