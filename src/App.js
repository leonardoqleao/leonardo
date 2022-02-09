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
      display: ['mdcolor-ul-close', 'button-light-dark-close', 'cabecalho-close', ''],
      link: ['vue', 'c8c8c8', '000'],
      classN: ['h2', 'cabecalho ccolor', 'menu-below-700 mcolor', 'mcolor-ul-li-a', 'bcolor', 'App', 'menu', 'reps'],//0-7
      lightOurDark: iconDark,
    }
    this.setState({ classN: this.state.dark })
  }
  fLightOurDark = () => {
    if (this.state.lightOurDark === iconLight) {
      this.setState({ lightOurDark: iconDark })
      this.setState({ classN: ['h2', 'cabecalho ccolor', 'menu-below-700 mcolor', 'mcolor-ul-li-a', 'bcolor', 'App', 'menu', 'reps'] })
      this.setState({
        link: ['vue', 'c8c8c8', '000']
      })
    }
    else {
      this.setState({ lightOurDark: iconLight })
      this.setState({ classN: ['dh2', 'cabecalho cdcolor', 'menu-below-700 mdcolor', 'mdcolor-ul-li-a', 'bdcolor', 'App', 'menu', 'dreps'] })
      this.setState({
        link: ['vue-dark', '333849', 'fff']
      })
    }
  }
  fMenu = () => {
    if (this.state.display[0] === 'mdcolor-ul-close') {
      this.setState({ display: ['mdcolor-ul', 'button-light-dark', 'cabecalho-animation', 'cabecalho-animation'] })
    }
    else {
      this.setState({ display: ['mdcolor-ul-close', 'button-light-dark-close', 'cabecalho-close', ''] })
    }
  }
  render() {
    let { lightOurDark } = this.state;
    let { classN } = this.state;
    let { display } = this.state;
    let { link } = this.state
    return (

      <div className={classN[5]}>
        <header className={classN[1] + ' ' + display[2]}>
          <div onClick={this.fMenu} className={classN[2]}>
            <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
          </div>
          <nav className={classN[6]}>
            <ul className={display[0]} >
              <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#personal'>PERSONAL STATEMENT</a>  </li>
              <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#experience'>EXPERIENCE</a>  </li>
              <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#projects'>PROJECTS</a>  </li>
              <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#github'>GITHUB</a>  </li>
              <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#education'>EDUCATION</a>  </li>
              <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#contact'>CONTACT</a>  </li>
            </ul>
          </nav>
          <div onClick={this.fLightOurDark}>
            <img src={lightOurDark} alt="lightButton" className={display[1]} />
          </div>
        </header>
        <div className={classN[4]}>

          <div><br id='personal' /><h2 className={classN[0]}>Personal Statement:</h2> <Psta /> </div>

          <div><br id='experience' /> <h2 className={classN[0]}>Experience:</h2> <Exp /> </div>

          <div><br id='projects' /> <h2 className={classN[0]}>Projects:</h2> <Project /> </div>

          <div><br id='github' />
            <div>
              <h2 className={classN[0]} >GitHub:</h2>
              <div className='imgs'>
                <img className='stats2' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&langs_count=8&layout=compact&theme=' + link[0] + '&hide_border=true'} />
                <img className='stats' width="45%" height="60em" src={'https://github-readme-streak-stats.herokuapp.com/?user=leonardoqleao&theme=' + link[0] + '&date_format=M%20j%5B%2C%20Y%5D&hide_border=true'} />
                <img className='stats' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=' + link[0] + '&show_icons=true&hide_border=true'} />
              </div>
              <img className='stats1' align="center" width="90%" src={'https://activity-graph.herokuapp.com/graph?username=leonardoqleao&theme=github&bg_color=' + link[1] + '&hide_border=true&color=' + link[2]} />


              <div className='imgs-reps'>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/DEV' >
                    <img className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=DEV&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/leonardo' >
                    <img className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=leonardo&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/learnReact' >
                    <img className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=learnReact&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/cssAndHtml' >
                    <img className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=cssAndHtml&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/typescript' >
                    <img className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=typescript&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
              </div>
            </div>
            <Github />
          </div>
          <div>
            <br id='education' />
            <h2 className={classN[0]} >Education:</h2>
            <Edu />
          </div>

          <div><br id='contact' />
            <h2 className={classN[0]} >Contact:</h2>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}
export default App;