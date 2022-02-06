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
      display: 'idlist',
      link: ['https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&layout=demo&theme=vue&hide_border=true',
      'https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=vue&show_icons=true',''],
      teme: ['h2', 'cabecalho ccolor', 'menu-below-700 mcolor', 'mcolor-ul-li-a', 'bcolor', ''],
      lightOurDark: iconDark,
    }
    this.setState({ teme: this.state.dark })
  }
  fLightOurDark = () => {
    if (this.state.lightOurDark == iconLight) {
      this.setState({ lightOurDark: iconDark })
      this.setState({ teme: ['h2', 'cabecalho ccolor', 'menu-below-700 mcolor', 'mcolor-ul-li-a', 'bcolor', 'App'] })
      this.setState({ link: ['https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&layout=demo&theme=vue&hide_border=true',
      'https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=vue&show_icons=true']})
    }
    else {
      this.setState({ lightOurDark: iconLight })
      this.setState({ teme: ['dh2', 'cabecalho cdcolor', 'menu-below-700 mdcolor', 'mdcolor-ul-li-a', 'bdcolor', 'App'] })
      this.setState({ link: ['https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&layout=demo&theme=dark&hide_border=true',
      'https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=dark&show_icons=true']})
    }
  }


  render() {
    let { lightOurDark } = this.state;
    let ligh = this.state.teme;
    let { display } = this.state;
    let { link } = this.state
    return (
      <div className={ligh[5]}>
        <header className={ligh[1]}>
          <div className={ligh[2]}>
            <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#ffffff'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
          </div>
          <nav className='menu mcolor'>
            <ul className={display} >
              <li><a className={ligh[3]} href='#personal'>PERSONAL STATEMENT</a>  </li>
              <li><a className={ligh[3]} href='#experience'>EXPERIENCE</a>  </li>
              <li><a className={ligh[3]} href='#projects'>PROJECTS</a>  </li>
              <li><a className={ligh[3]} href='#github'>GITHUB</a>  </li>
              <li><a className={ligh[3]} href='#repositories'>REPOSITORIES</a></li>
              <li><a className={ligh[3]} href='#education'>EDUCATION</a>  </li>
              <li><a className={ligh[3]} href='#contact'>CONTACT</a>  </li>
            </ul>
          </nav>
          <div onClick={this.fLightOurDark}>
            <img src={lightOurDark} alt="lightButton" className="button-light-dark" />
          </div>
        </header>
        <div className={ligh[4]}>
          <div className='stats'>
            <div> <h2 className={ligh[0]} id='personal'>Personal Statemente:</h2> <Psta /> </div>
            <div> <h2 className={ligh[0]} id='experience'>Experience:</h2> <Exp /> </div>
            <div> <h2 className={ligh[0]} id='projects'>Projects:</h2> <Project /> </div>
            <div>
              <div>
                <h2 className={ligh[0]} id='github'>GitHub:</h2>
                <div className='imgs'>
                  <div className='most'> <img height="300em" src={link[0]} /></div>
                  <img className='stats' height="180em" src={link[1]} />
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
