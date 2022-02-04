import logo from './logo.svg';
import tela from './tela.jsx'
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'open',
      textlign: 'cabecalho',
      width: '100%'
    }
  }
  botonC = () => {
    this.state.display == 'none' ? this.setState({ display: 'inline' }) : this.setState({ display: 'none' })
    this.state.textlign == 'm cabecalho' ? this.setState({ textlign: 't cabecalho'}) : this.setState({ textlign: 'm cabecalho'})
  }
  render() {
    let { display } = this.state;
    let {textlign} = this.state;
    return (
      <div className='App'>

        <header className='cabecalho' className={textlign}>
          <div onClick={this.botonC} className='menu-below-700'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#ffffff'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
          </div>
          <nav className='menu effect'>
            <ul>
              <li className={display} ><a href='#personal'>PERSONAL STATEMENT</a>  </li>
              <li className={display} ><a href='#experience'>EXPERIENCE</a>  </li>
              <li className={display} ><a href='#projects'>PROJECTS</a>  </li>
              <li className={display} ><a href='#github'>GITHUB</a>  </li>
              <li className={display} ><a href='#repositories'>REPOSITORIES</a></li>
              <li className={display} ><a href='#education'>EDUCATION</a>  </li>
              <li className={display} ><a href='#contact'>CONTACT</a>  </li>
            </ul>
          </nav>

        </header>
        <div className='body'>
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
                <img className='stats' height="190em" src='https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=vue&show_icons=true' />
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

            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default App;
