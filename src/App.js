import Tela from './jsx/tela.jsx'
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
      color1:'',
      color2:'',
      color3:'',
      color4:'',
      color5:'',
      color6:'',
      color7:'',
      color8:'',
      color10:'',
      color12:'',
      color13:'',
    }
  }
  render() {
    return (
      <div className='App'>
        <header className='cabecalho ccolor'>
          <div className='menu-below-700 mbcolor'>
            <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#ffffff'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
          </div>
          <nav className='menu mcolor'>
            <ul>
              <li><a href='#personal'>PERSONAL STATEMENT</a>  </li>
              <li><a href='#experience'>EXPERIENCE</a>  </li>
              <li><a href='#projects'>PROJECTS</a>  </li>
              <li><a href='#github'>GITHUB</a>  </li>
              <li><a href='#repositories'>REPOSITORIES</a></li>
              <li><a href='#education'>EDUCATION</a>  </li>
              <li><a href='#contact'>CONTACT</a>  </li>
            </ul>
          </nav>
        </header>
        <div className='body bcolor'>
          <div className='stats'>
            <div>
              <h2 id='personal'>Personal Statemente:</h2>
            </div>
            <div>
              <h2 id='experience'>Experience:</h2>
              <p>
              </p>
            </div>
            <div>
              <h2 id='projects'>Projects:</h2>
            </div>
            <div>
              <h2 id='github'>GitHub:</h2>
              <div className='imgs'>
                <div className='most'> <img height="300em" src='https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&layout=demo&theme=vue&hide_border=true&hide=c' /></div>
                <img className='stats' height="180em" src='https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=vue&show_icons=true' />
              </div>
            </div>
            <div>
              <h2 id='repositories'>Repositories:</h2>
            </div>
            <div>
              <h2 id='education'>Education:</h2>
            </div>
            <div>
              <h2 id='contact'>Contact:</h2>
              <Tela/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
