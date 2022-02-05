import Menu from './jsx/menu.jsx'
import Repo from './jsx/menu/repo.jsx';
import Exp from './jsx/menu/exp.jsx';
import Project from './jsx/menu/projct.jsx';
import Psta from './jsx/menu/psta.jsx';
import Edu from './jsx/menu/edu.jsx';
import Github from './jsx/menu/github.jsx';
import Contact from './jsx/menu/contact.jsx';
import iconDark from './img/iconmonstreyedark.svg';
import iconLight from './img/iconmonstreyewhite.svg';
import './style/App.css';
import './style/dark.css';
import './style/light.css';
import './style/teste.css';
import './style/media.css';
import './style/index.css';

import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        display: '',
        ligh: ['h2','cabecalho ccolor', 'menu-below-700 mbcolor','mdcolor-ul-li-a', 'bdcolor', '' ],
        lightOurDark: iconDark,
    }
}
fLightOurDark = () => {
    this.state.lightOurDark == iconLight ? this.setState({ lightOurDark: iconDark }) : this.setState({ lightOurDark: iconLight })

}


  render() {
    let { lightOurDark } = this.state;
    let { ligh } = this.state;
    return (
      <div className='App'>
        <header className={ligh[1]}>
          <div className='menu-below-700 mbcolor'>
            <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#ffffff'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
          </div>
          <nav className='menu mcolor'>
            <ul className="idlist" >
              <li><a className='mdcolor-ul-li-a' href='#personal'>PERSONAL STATEMENT</a>  </li>
              <li><a className='mdcolor-ul-li-a' href='#experience'>EXPERIENCE</a>  </li>
              <li><a className='mdcolor-ul-li-a' href='#projects'>PROJECTS</a>  </li>
              <li><a className='mdcolor-ul-li-a' href='#github'>GITHUB</a>  </li>
              <li><a className='mdcolor-ul-li-a' href='#repositories'>REPOSITORIES</a></li>
              <li><a className='mdcolor-ul-li-a' href='#education'>EDUCATION</a>  </li>
              <li><a className='mdcolor-ul-li-a' href='#contact'>CONTACT</a>  </li>
            </ul>
          </nav>
          <div onClick={this.fLightOurDark}>
            <img src={lightOurDark} alt="lightButton" className="button-light-dark" />
          </div>
        </header>
        <div className='body bcolor'>
          <div className='stats'>
            <div> <h2 className={ligh[0]} id='personal'>Personal Statemente:</h2> <Psta /> </div>
            <div> <h2 className={ligh[0]} id='experience'>Experience:</h2> <Exp /> </div>
            <div> <h2 className={ligh[0]} id='projects'>Projects:</h2> <Project /> </div>
            <div>
              <div>
                <h2 className={ligh[0]} id='github'>GitHub:</h2>
                <div className='imgs'>
                  <div className='most'> <img height="300em" src='https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&layout=demo&theme=vue&hide_border=true&hide=c' /></div>
                  <img className='stats' height="180em" src='https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=vue&show_icons=true' />
                </div>
              </div>
              <Github />
            </div>
            <div> <h2 className={ligh[0]} id='repositories'>Repositories:</h2> <Repo /> </div>
            <div> <h2 className={ligh[0]} id='education'>Education:</h2> <Edu /> </div>
            <div> <h2 className={ligh[0]} id='contact'>Contact:</h2> <Contact /> </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
