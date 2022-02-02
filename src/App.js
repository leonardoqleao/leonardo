import logo from './logo.svg';
import tela from './tela.jsx'
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='cabecalho'>
        <nav className='menu'>
          <ul>
            <li><a href=''>PERSONAL STATEMENT</a>  </li>
            <li><a href=''>EXPERIENCE</a>  </li>
            <li><a href=''>PROJECTS</a>  </li>
            <li><a href=''>GITHUB</a>  </li>
            <li><a href=''>REPOSITORIES</a>
            </li>
            <li><a href=''>EDUCATION</a>  </li>
            <li><a href=''>CONTACT</a>  </li>

          </ul>
        </nav>

      </header>
      <body className='body'>
        <div className='stats'>
          <p className='github'>

            <div className='tela'>
              <h2>GitHub:</h2>
              <div className='imgs'>
                <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&layout=demo&theme=vue&hide_border=true&hide=c' />
                <img id='stats' src='https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=vue&show_icons=true' />

              </div>
              <h3>Repositorys:</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <br />
          </p>
        </div>
      </body>
    </div>

  );
}

export default App;
