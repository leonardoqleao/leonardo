import iconDark from './img/iconmonstreyedark.svg';
import iconLight from './img/iconmonstreyewhite.svg';
import './style/testBootstrap.css'
import './style/App.css';
import './style/dark.css';
import './style/light.css';
import './style/teste.css';
import './style/media.css';
import './style/index.css';
import './style/text.css';
import { Component } from 'react';
import Axios from 'axios';
import Personal from './jsx/personal';

class App extends Component {
  //Construtor onde estão listadas todos os arrays usados nas animações e funções, cada objeto representa uma função na página
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      display: ['mdcolor-ul-close', 'button-light-dark-close', 'cabecalho-close', ''], // array = 0-3
      link: ['vue-dark', '333849', 'fff'], //array = 0=2
      classN: ['dh2', 'cabecalho cdcolor', 'menu-below-700 mdcolor', 'mdcolor-ul-li-a', 'bdcolor', 'App', 'menu', 'dreps', 'dinput', 'mother'],// array = 0-9
      lightOurDark: iconLight,
      email: '',
      telefone: '',
      assunto: '',
    }
  }

  //Funções responsáveis pelas funcionalidades dá página

  //Responsável por pegar e armazenar em os dados digitado no campo nome
  handleFormNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  //Responsável por pegar e armazenar em os dados digitado no campo email
  handleFormEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  //Responsável por pegar e armazenar em os dados digitado no campo telefone
  handleFormTelefone = (event) => {
    this.setState({ telefone: event.target.value })
  }

  //Responsável por pegar e armazenar em os dados digitado no campo assunto
  handleFormAsstunto = (event) => {
    this.setState({ assunto: event.target.value })
  }

  //responsavel por enviar os dados para porta selecionada
  submit = (event) => {
    Axios.post('http://www.leonardoqueiros.com.br/idform/form', {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone,
      assunto: this.state.assunto
    })
    event.preventDefault();
    this.setState({ value: '' });
  }


  //Funções responsáveis pela estética dá página.

  //Função responsavel por alterar entre tela clara e escura. 
  fLightOurDark = () => {
    //Propriedade responsavel pela página clara
    if (this.state.lightOurDark === iconLight) {
      this.setState({ lightOurDark: iconDark })
      this.setState({ classN: ['h2', 'cabecalho ccolor', 'menu-below-700 mcolor', 'mcolor-ul-li-a', 'bcolor', 'App', 'menu', 'reps', 'input', 'mother'] })
      this.setState({ link: ['vue', 'c8c8c8', '000'] })
    }
    //Propriedade responsavel pela página escura
    else {
      this.setState({ lightOurDark: iconLight })
      this.setState({ classN: ['dh2', 'cabecalho cdcolor', 'menu-below-700 mdcolor', 'mdcolor-ul-li-a', 'bdcolor', 'App', 'menu', 'dreps', 'dinput', 'mother'] })
      this.setState({ link: ['vue-dark', '333849', 'fff'] })
    }
  }

  // Função responsavel por mostrar e ocultar o menu. 'apenas na responsividade mobile'.
  fMenu = () => {
    //Propriedade responsavel pela página clara
    this.state.display[0] === 'mdcolor-ul-close' ? (
      this.setState({ display: ['mdcolor-ul', 'button-light-dark', 'cabecalho-animation', 'cabecalho-animation'] })
    )
      //Propriedade responsavel pela página escura
      : (
        this.setState({ display: ['mdcolor-ul-close', 'button-light-dark-close', 'cabecalho-close', ''] })
      )
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       classN: ['dh2', 'cabecalho cdcolor', 'menu-below-700 mdcolor', 'mdcolor-ul-li-a', 'bdcolor', 'App', 'menu', 'dreps', 'dinput', 'mother2'] // array = 0-9
  //     });
  //   }, 4000);
  // }

//Função responsável por renderizar a página. 
render() {
  let { lightOurDark } = this.state;
  let { classN } = this.state;
  let { display } = this.state;
  let { link } = this.state;
  return (

    <div className={classN[5]}>
      {/* <div className={classN[9]}>
        <div className='c1'>
          <h0>olá</h0>
          <div className='c2'>
          </div>
        </div>
      </div> */}

      {/* Cabeçlho*/}
      <header className={classN[1] + ' ' + display[2]}>
        <div onClick={this.fMenu} className={classN[2]}>
          <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
        </div>
        <nav className={classN[6]}>
          {/* Botões cabeção*/}
          <ul className={display[0]} >
            <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#personal'>PERSONAL STATEMENT</a>  </li>
            <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#experience'>EXPERIENCE</a>  </li>
            <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#projects'>PROJECTS</a>  </li>
            <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#github'>GITHUB</a>  </li>
            <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#education'>EDUCATION</a>  </li>
            <li className={display[3]} ><a onClick={this.fMenu} className={classN[3]} href='#contact'>CONTACT</a>  </li>
          </ul>
        </nav>
        {/* Botão, light & dark */}
        <div onClick={this.fLightOurDark}>
          <img src={lightOurDark} alt="lightButton" className={display[1]} />
        </div>
      </header>
      <section>

        {/* Body, toda a página abaixo do cabeçalho*/}
        <div className={classN[4]}>

          {/* Aba Personal Statement começa aqui */}
          <div><br id='personal' />
            <h2 className={classN[0]}>Personal Statement:</h2><hr /><div class="b-example-divider"></div>
            {/* externando os texto da aba personal para facilitar alterações */}
            <Personal />
          </div>

          {/* Aba Experience começa aqui */}
          <div><br id='experience' />
            <h2 className={classN[0]}>Experience:</h2><hr /><div class="b-example-divider"></div>

          </div>

          {/* Aba Projects começa aqui */}
          <div><br id='projects' />
            <h2 className={classN[0]}>Projects:</h2><hr /><div class="b-example-divider"></div>
            <div className='text-container'>
              {/* <h1 className='text-h1'> Alguns projetos que eu já fiz: </h1>
                <p className='text-p'>
                  <h3 className='text-h1' >Meu primeiro projeto com a programação foi uma planilha em VBA:</h3> 
                  <p className='text-p1'>
                    Eu precisava fazer uma planilha que gerasse um 
                  </p>
                </p>
                <p className='text-p'>
                  Esse site é sem dúvidas um dos meus maiores desafios, começando pela parte de hospedagem e o
                  próprio desenvolvimento. Ao todo, foram gastos quase um mês para conseguir fazer tudo o que eu tinha
                  que fazer, e mesmo ainda estando em desenvolvimento, eu aprendi muito com o processo até aqui.
                  <li className='text-li'>
                    Posso começar dizendo um pouco sobre a hospedagem:
                  </li>
                  <p className='text-p1'>
                    Inicialmente, a ideai era utilizar hospedagem compartilhada, daria certo se o meu projeto não tivesse o formulário, e eu só fui saber disso na hora de upar.
                    Nessa hora começou uma grande dor de cabeça, eu não fazia ideia de como eu iria subir site com nodeJS. Começei a estudar sobre as VM do google; posso dizer que ue fiquei
                    muitos dias tentando entender como elas funcionavam, como eu poderia utilizar elas sem ter que pagar o absurdo que normalmente é cobrado. E o pior de tudo, como eu iria
                    apontar meu domínio para VM.
                  </p>
                </p> */}


            </div>
          </div>

          {/* Aba GitHub começa aqui */}
          <div><br id='github' />
            <div>
              <h2 className={classN[0]}>GitHub:</h2><hr /><div class="b-example-divider"></div>

              {/* Trio de estatísticas: Linguagens usadas, contribuições, GitHub Status*/}
              <div className='imgs'>
                <img alt='github-readme' className='stats2' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&langs_count=8&layout=compact&theme=' + link[0] + '&hide_border=true'} />
                <img alt='github-readme' className='stats' width="45%" height="60em" src={'https://github-readme-streak-stats.herokuapp.com/?user=leonardoqleao&theme=' + link[0] + '&date_format=M%20j%5B%2C%20Y%5D&hide_border=true'} />
                <img alt='github-readme' className='stats' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=' + link[0] + '&show_icons=true&hide_border=true'} />
              </div>

              {/* Grafico de contribuições */}
              <img alt='github-readme' className='stats1' align="center" width="90%" src={'https://activity-graph.herokuapp.com/graph?username=leonardoqleao&theme=github&bg_color=' + link[1] + '&hide_border=true&color=' + link[2]} />

              {/* Repositórios do GiHub,  */}
              <div className='imgs-reps'>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/DEV' >
                    <img alt='github-readme' className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=DEV&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/leonardo' >
                    <img alt='github-readme' className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=leonardo&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/learnReact' >
                    <img alt='github-readme' className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=learnReact&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/cssAndHtml' >
                    <img alt='github-readme' className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=cssAndHtml&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
                <div className={classN[7]} >
                  <a href='https://github.com/leonardoqleao/typescript' >
                    <img alt='github-readme' className='rep-img' width="45%" height="60em" src={'https://github-readme-stats.vercel.app/api/pin/?username=leonardoqleao&repo=typescript&theme=' + link[0] + '&show_icons=true'} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Aba Education começa aqui */}
          <div><br id='education' />
            <h2 className={classN[0]} >Education:</h2><hr /><div class="b-example-divider"></div>

          </div>

          {/* Aba Contact começa aqui */}
          <div><br id='contact' />
            <h2 className={classN[0]} >Contato:</h2><hr /><div class="b-example-divider"></div>
            <div className='contato'>

              <div>
                {/* Toda a abada contato está divida em um display flex dividida entre os contatos e a o formulário, aqui está o responsável por isso! */}
                <div className='geral-contact'>

                  {/* Aqui está a parte dos icones e informações para contato */}
                  <div className='link-image'>

                    {/* Icone do GitHub em SVG */}
                    <div className='single-icon-contact' >

                      <a href='https://github.com/leonardoqleao'>
                        <svg id='git' viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="30" fill="#4e6e91" />
                          <path fill="#6693c1" d="M50,83c-18.196,0-33-14.804-33-33s14.804-33,33-33s33,14.804,33,33S68.196,83,50,83z M50,22 c-15.439,0-28,12.561-28,28s12.561,28,28,28s28-12.561,28-28S65.439,22,50,22z" />
                          <path fill="#eeecd9" d="M69.457,49.039c0-3.321-1.305-6.334-3.419-8.573c0.396-2.203,0.351-5.301-0.538-7.966 c-4.475,0-8.114,3.447-8.702,4H43.994c-0.589-0.552-4.019-4-8.494-4c-0.8,2.401-1.087,5.233-0.846,7.295 c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459H45.5c-2.003,0.917-3.635,2.756-4,5 c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46s1.23,1.23,2.46,3.69 C33.872,68.828,36.5,70.5,41.5,70.5v6.6c0,0,6.346,1.4,8.5,1.4s8.5-1.4,8.5-1.4l0-9.445c0-2.718-1.681-5.092-4-6.155h2.449 C63.858,61.5,69.457,55.947,69.457,49.039z" />
                          <path fill="#1f212b" d="M50,85c-19.299,0-35-15.701-35-35s15.701-35,35-35s35,15.701,35,35S69.299,85,50,85z M50,17 c-18.196,0-33,14.804-33,33s14.804,33,33,33s33-14.804,33-33S68.196,17,50,17z" />
                          <path fill="#1f212b" d="M50,79c-15.99,0-29-13.009-29-29s13.01-29,29-29s29,13.009,29,29c0,2.925-0.435,5.812-1.291,8.582 c-0.082,0.263-0.364,0.411-0.625,0.33c-0.264-0.082-0.412-0.361-0.33-0.625C77.581,55.612,78,52.825,78,50 c0-15.439-12.561-28-28-28S22,34.561,22,50s12.561,28,28,28c5.856,0,11.464-1.788,16.217-5.171c0.225-0.16,0.536-0.107,0.697,0.117 c0.16,0.225,0.107,0.537-0.117,0.697C61.873,77.147,56.065,79,50,79z" />
                          <path fill="#1f212b" d="M68.631,72.068c-0.14,0-0.279-0.059-0.378-0.173c-0.181-0.209-0.158-0.525,0.051-0.706 c0.739-0.638,1.452-1.324,2.122-2.037c0.188-0.202,0.505-0.21,0.706-0.023c0.201,0.189,0.212,0.505,0.023,0.707 c-0.693,0.739-1.433,1.449-2.197,2.11C68.863,72.028,68.747,72.068,68.631,72.068z" />
                          <path fill="#1f212b" d="M72.494,68.002c-0.107,0-0.216-0.035-0.308-0.105c-0.218-0.17-0.257-0.484-0.087-0.702 c1.649-2.118,2.982-4.452,3.963-6.938c0.101-0.258,0.392-0.382,0.648-0.282c0.257,0.102,0.383,0.392,0.281,0.648 c-1.015,2.575-2.396,4.993-4.104,7.186C72.79,67.936,72.643,68.002,72.494,68.002z" />
                          <path fill="#1f212b" d="M58.5,77.6c-0.276,0-0.5-0.224-0.5-0.5v-9.445c0-2.431-1.456-4.668-3.708-5.701 c-0.214-0.098-0.331-0.332-0.28-0.561C54.062,61.164,54.265,61,54.5,61h2.449c6.621,0,12.008-5.366,12.008-11.961 c0-3.064-1.166-5.987-3.282-8.229c-0.109-0.115-0.157-0.275-0.129-0.432c0.333-1.854,0.39-4.725-0.409-7.37 c-3.682,0.162-6.795,2.725-7.987,3.848C57.057,36.943,56.925,37,56.798,37H43.993c-0.127,0-0.249-0.048-0.342-0.135l-0.092-0.087 c-3.078-2.927-5.829-3.686-7.697-3.77c-0.662,2.162-0.941,4.762-0.712,6.729c0.019,0.16-0.042,0.319-0.161,0.428 c-2.506,2.275-3.943,5.51-3.943,8.875C31.046,55.635,36.433,61,43.053,61H45.5c0.235,0,0.438,0.164,0.488,0.394 c0.051,0.229-0.066,0.463-0.28,0.561c-1.974,0.904-3.397,2.676-3.715,4.625C41.954,66.822,41.745,67,41.5,67 c-2.333,0-5.191-0.271-6.598-2.38c-2.311-3.467-3.28-3.467-4.403-3.467c-0.14,0-0.385,0.023-0.448,0.178 c-0.086,0.206,0.031,0.756,0.702,1.428c1.287,1.287,1.311,1.335,2.554,3.82C34.409,68.785,37.319,70,41.5,70 c0.276,0,0.5,0.224,0.5,0.5v6.6c0,0.276-0.224,0.5-0.5,0.5S41,77.376,41,77.1v-6.105c-5.797-0.131-7.866-2.525-8.588-3.969 c-1.194-2.387-1.194-2.387-2.366-3.56c-0.869-0.869-1.213-1.81-0.919-2.518c0.209-0.505,0.709-0.795,1.372-0.795 c1.588,0,2.81,0.272,5.235,3.912c1.069,1.604,3.359,1.9,5.356,1.932c0.362-1.545,1.309-2.965,2.63-3.997h-0.668 c-7.172,0-13.007-5.813-13.007-12.959c0-3.562,1.485-6.988,4.084-9.442c-0.209-2.203,0.128-4.956,0.896-7.257 C35.094,32.138,35.285,32,35.5,32c2.036,0,5.192,0.696,8.692,4h12.409c1.427-1.311,4.847-4,8.898-4 c0.215,0,0.406,0.138,0.475,0.342c0.935,2.802,0.928,5.901,0.598,7.965c2.185,2.404,3.385,5.495,3.385,8.732 C69.957,56.186,64.122,62,56.949,62h-0.693C57.963,63.368,59,65.442,59,67.655V77.1C59,77.376,58.776,77.6,58.5,77.6z" />
                          <path fill="#1f212b" d="M34.238,45.97c-0.063,0-0.127-0.012-0.188-0.037c-0.256-0.104-0.379-0.396-0.274-0.651 c0.476-1.167,1.167-2.226,2.057-3.148c0.192-0.198,0.509-0.204,0.707-0.013c0.199,0.192,0.205,0.508,0.014,0.707 c-0.802,0.831-1.425,1.783-1.852,2.831C34.622,45.853,34.436,45.97,34.238,45.97z" />
                          <path fill="#1f212b" d="M33.66,51.021c-0.241,0-0.454-0.176-0.493-0.422c-0.08-0.51-0.121-1.034-0.121-1.558 c0-0.533,0.042-1.067,0.124-1.59c0.044-0.273,0.305-0.459,0.572-0.416c0.272,0.043,0.459,0.299,0.416,0.572 c-0.074,0.471-0.112,0.953-0.112,1.434c0,0.472,0.037,0.943,0.109,1.402c0.043,0.273-0.144,0.529-0.416,0.572 C33.713,51.019,33.687,51.021,33.66,51.021z" />
                          <path fill="#1f212b" d="M41.457,58.914c-0.028,0-0.057-0.002-0.085-0.007c-3.442-0.585-6.372-2.975-7.646-6.238 c-0.101-0.257,0.026-0.547,0.284-0.647c0.256-0.101,0.547,0.027,0.647,0.284c1.146,2.938,3.783,5.089,6.882,5.615 c0.271,0.046,0.455,0.305,0.409,0.577C41.907,58.741,41.696,58.914,41.457,58.914z" />
                        </svg>
                      </a>
                      github.com/leonardoqleao
                    </div>

                    {/* Icone do Gmail em SVG */}
                    <div className='single-icon-contact' >

                      <a href='mailto:leonardoq.leao@gmail.com'>
                        <svg id='gmail' viewBox="0 0 100 100">
                          <polygon fill="#f16e7c" points="29.434,25.293 50,40.657 70.566,25.293 70.566,48 50,63 29.434,48" />
                          <path fill="#ead032" d="M70.566,47.554L87.91,34.849v-4.808c0-5.002-4.055-9.056-9.056-9.056h-2.046l-6.242,4.308C70.566,25.293,70.566,47.554,70.566,47.554z" />
                          <path fill="#e85654" d="M29.434,47.554L12.089,34.849v-4.808c0-5.002,4.055-9.056,9.056-9.056h2.046l6.242,4.308L29.434,47.554L29.434,47.554z" />
                          <path fill="#8cc78c" d="M70,48l18.362-13.638v38.926c0,3.155-2.557,5.712-5.712,5.712H70V48z" />
                          <path fill="#40a6dd" d="M30,48L11.638,34.362v38.926c0,3.155,2.557,5.712,5.712,5.712H30V48z" />
                          <path fill="#1f212b" d="M78.99,20c-2.186,0-4.265,0.695-6.012,2.011L50,39.328L27.021,22.011C25.274,20.695,23.195,20,21,20c-5.514,0-10,4.486-10,10v44c0,3.309,2.691,6,6,6h13c0.553,0,1-0.447,1-1V50.092L49.4,63.8c0.18,0.13,0.39,0.2,0.6,0.2s0.41-0.06,0.59-0.19L69,50.514V79c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V30C89,24.486,84.514,20,78.99,20z M74.182,23.608C75.579,22.557,77.242,22,79,22c4.411,0,8,3.589,8,8v4.799L71,46.724V46.6V26.006L74.182,23.608z M21.01,22c1.748,0,3.411,0.557,4.809,1.608L29,26.006V46.6v0.124L13,34.799V30C13,25.589,16.589,22,21.01,22z M29,78H17c-2.206,0-4-1.794-4-4V36.047l16,11.924v0.823V49V78z M50.01,61.76L30,47.322V26.76l19.398,14.619c0.017,0.013,0.037,0.015,0.054,0.026c0.059,0.039,0.122,0.064,0.187,0.089c0.057,0.022,0.111,0.047,0.17,0.059c0.066,0.013,0.13,0.011,0.197,0.01c0.061,0,0.12,0.002,0.18-0.009c0.062-0.012,0.12-0.038,0.18-0.062c0.063-0.025,0.124-0.049,0.181-0.087c0.017-0.011,0.037-0.013,0.054-0.026L70,26.76v20.562L50.01,61.76z M83,78H71V49.07v-0.174V48.5v-0.528l16-11.924V74C87,76.206,85.206,78,83,78z" />
                          <path fill="#1f212b" d="M16.5,61c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5S16,58.224,16,58.5v2C16,60.776,16.224,61,16.5,61z" />
                          <path fill="#1f212b" d="M16.5,52c0.276,0,0.5-0.224,0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5S16,44.224,16,44.5v7C16,51.776,16.224,52,16.5,52z" />
                          <path fill="#1f212b" d="M24.5,74h-7c-0.275,0-0.5-0.225-0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5S16,63.224,16,63.5v10c0,0.827,0.673,1.5,1.5,1.5h7c0.276,0,0.5-0.224,0.5-0.5S24.776,74,24.5,74z" />
                          <path fill="#1f212b" d="M42.801,40.16c-0.22-0.164-0.532-0.123-0.7,0.099c-0.166,0.221-0.122,0.534,0.099,0.7l2.047,1.542c0.09,0.067,0.195,0.101,0.301,0.101c0.151,0,0.301-0.068,0.399-0.199c0.166-0.221,0.122-0.534-0.099-0.7L42.801,40.16z" />
                          <path fill="#1f212b" d="M46.444,42.905c-0.219-0.164-0.533-0.123-0.7,0.099c-0.166,0.221-0.122,0.534,0.099,0.7l2.914,2.195C48.847,45.967,48.952,46,49.058,46c0.151,0,0.301-0.068,0.399-0.199c0.166-0.221,0.122-0.534-0.099-0.7L46.444,42.905z" />
                          <path fill="#1f212b" d="M55.306,41.587l-3.337,2.514c-0.221,0.166-0.265,0.479-0.099,0.7C51.969,44.932,52.118,45,52.27,45c0.105,0,0.211-0.033,0.301-0.101l3.337-2.514c0.221-0.166,0.265-0.479,0.099-0.7C55.839,41.464,55.524,41.423,55.306,41.587z" />
                          <path fill="#1f212b" d="M58.682,39.044l-1.778,1.339c-0.221,0.166-0.265,0.479-0.099,0.7c0.099,0.131,0.248,0.199,0.399,0.199c0.105,0,0.211-0.033,0.301-0.101l1.778-1.339c0.221-0.166,0.265-0.479,0.099-0.7C59.215,38.92,58.9,38.88,58.682,39.044z" />
                          <path fill="#1f212b" d="M66.899,33.479c-0.167-0.222-0.481-0.263-0.7-0.099l-5.919,4.46c-0.221,0.166-0.265,0.479-0.099,0.7c0.099,0.131,0.248,0.199,0.399,0.199c0.105,0,0.211-0.033,0.301-0.101l5.919-4.459C67.021,34.014,67.065,33.7,66.899,33.479z" />
                          <path fill="#1f212b" d="M16.5,56c0.276,0,0.5-0.224,0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5S16,54.224,16,54.5v1C16,55.776,16.224,56,16.5,56z" />
                        </svg>
                      </a>
                      leonardoq.leao@gmail.com
                    </div>

                    {/* Icone do Linkedin em SVG */}
                    <div className='single-icon-contact' >

                      <a href='https://www.linkedin.com/in/leonardoqleao/'>
                        <svg id='linkdin' viewBox="0 0 64 64">
                          <rect width="50" height="50" x="7" y="7" fill="#58b5e8" rx="6" ry="6" />
                          <path fill="#faefde" d="M19.5 19A3.5 3.5 0 1 0 19.5 26 3.5 3.5 0 1 0 19.5 19zM39.76 28c-2.21 0-5 1.78-6.19 2.79V29.46a1 1 0 0 0-1-1H27.48a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h5.4a1 1 0 0 0 1-1V39.88c0-3.16 1.78-5.34 3.89-5.34s3.37 2.39 3.37 5.51V50.48a1 1 0 0 0 1 1h5.4a1 1 0 0 0 1-1V38.77C48.4 33.44 47.37 28 39.76 28zM16 29H23V51H16z" />
                          <path fill="#65c5ef" d="M11,7H53a4,4,0,0,1,4,4v0a3,3,0,0,1-3,3H10a3,3,0,0,1-3-3v0a4,4,0,0,1,4-4Z" />
                          <path fill="#8d6c9f" d="M23 28H16a1 1 0 0 0-1 1V51a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V29A1 1 0 0 0 23 28zM22 50H17V30h5zM39.88 27.44a8.47 8.47 0 0 0-5.44 1.88V29a1 1 0 0 0-1-1H27a1 1 0 0 0-1 1V51a1 1 0 0 0 1 1h6.7a1 1 0 0 0 1-1V39.89c0-3.31.82-4.55 3-4.55s2.49 1.46 2.49 4.72V51a1 1 0 0 0 1 1h6.71a1 1 0 0 0 1-1V38.72C48.92 33.14 47.85 27.44 39.88 27.44zm7 22.56H42.21V40.06c0-2.35 0-6.72-4.49-6.72-5 0-5 4.93-5 6.55V50H28V30h4.43v2a1.08 1.08 0 0 0 1.09 1 1 1 0 0 0 .88-.53 6.07 6.07 0 0 1 5.46-3c5.87 0 7 3.55 7 9.29zM19.5 18A4.5 4.5 0 1 0 24 22.5 4.5 4.5 0 0 0 19.5 18zm0 7.33a2.83 2.83 0 1 1 2.83-2.83A2.83 2.83 0 0 1 19.5 25.33z" />
                          <path fill="#8d6c9f" d="M51,6H13a7,7,0,0,0-7,7V51a7,7,0,0,0,7,7H51a7,7,0,0,0,7-7V13A7,7,0,0,0,51,6Zm5,45a5,5,0,0,1-5,5H13a5,5,0,0,1-5-5V13a5,5,0,0,1,5-5H51a5,5,0,0,1,5,5Z" />
                          <path fill="#8d6c9f" d="M17 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 17 16zM12 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V13A1 1 0 0 0 12 12zM32 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 32 16zM37 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 37 16zM42 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 42 16zM47 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 47 16zM52 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V13A1 1 0 0 0 52 12zM22 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 22 16zM27 16a1 1 0 0 0 1-1V13a1 1 0 0 0-2 0v2A1 1 0 0 0 27 16z" />
                        </svg>
                      </a>
                      linkedin.com/in/leonardoqleao/
                    </div>

                    {/* Icone do Telegram em SVG */}
                    <div className='single-icon-contact' >
                      <a href='https://t.me/LeonardoQ_Leao'>
                        <svg id='telegram' viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="35" fill="#39c2d8" />
                          <path fill="#b3b2c3" d="M48.537,60.436l-5.279,4.876c0,0-0.228,0.178-0.54,0.186c-0.106,0.008-0.221-0.008-0.335-0.062l1.483-8.947L48.537,60.436z" />
                          <path fill="#fff" d="M59.643,66.128c0,0-0.243,1.372-1.917,1.372c-0.89,0-1.346-0.426-1.346-0.426L43.874,56.49l-6.124-3.14l-7.858-2.132c0,0-1.392-0.411-1.392-1.59c0-0.985,1.438-1.45,1.438-1.45L62.8,34.872c0,0,0.845-0.372,1.575-0.372c0.625,0,1.125,0.375,1.125,1c0,0.121-0.012,0.252-0.029,0.375C65.434,36.145,59.643,66.128,59.643,66.128z" />
                          <path fill="#d7d6eb" d="M59.34,40.81c-0.15-0.203-0.375-0.309-0.605-0.31c-0.165-0.001-0.332,0.052-0.475,0.163L37.75,53.357c0,0,3.913,10.95,3.992,11.143c0.372,0.91,0.641,0.936,0.641,0.936l1.483-8.947l15.33-14.578c0.201-0.154,0.305-0.389,0.304-0.625C59.5,41.119,59.447,40.951,59.34,40.81z" />
                          <path fill="#1f212b" d="M50,86c-19.851,0-36-16.149-36-36s16.149-36,36-36s36,16.149,36,36S69.851,86,50,86z M50,16c-18.748,0-34,15.252-34,34s15.252,34,34,34s34-15.252,34-34S68.748,16,50,16z" />
                          <path fill="#1f212b" d="M65.5,24.227c-0.087,0-0.175-0.022-0.255-0.07c-0.638-0.377-1.299-0.735-1.967-1.065c-0.247-0.123-0.349-0.422-0.227-0.67c0.123-0.249,0.425-0.347,0.67-0.227c0.689,0.341,1.374,0.711,2.033,1.102c0.237,0.141,0.316,0.447,0.176,0.685C65.837,24.139,65.671,24.227,65.5,24.227z" />
                          <path fill="#1f212b" d="M68.5,26.25c-0.106,0-0.213-0.034-0.304-0.103c-0.322-0.247-0.65-0.486-0.983-0.72c-0.226-0.159-0.281-0.47-0.122-0.696c0.158-0.228,0.47-0.28,0.696-0.123c0.345,0.241,0.683,0.49,1.017,0.745c0.22,0.167,0.261,0.481,0.094,0.701C68.799,26.182,68.65,26.25,68.5,26.25z" />
                          <path fill="#1f212b" d="M50,81c-17.094,0-31-13.907-31-31s13.906-31,31-31c3.668,0,7.259,0.635,10.672,1.886c0.26,0.095,0.393,0.382,0.298,0.642s-0.383,0.393-0.642,0.297C57.025,20.614,53.551,20,50,20c-16.542,0-30,13.458-30,30s13.458,30,30,30s30-13.458,30-30c0-8.439-3.585-16.535-9.836-22.213c-0.205-0.186-0.22-0.502-0.034-0.707c0.187-0.204,0.503-0.219,0.706-0.034C77.296,32.914,81,41.28,81,50C81,67.093,67.094,81,50,81z" />
                          <path fill="#1f212b" d="M57.726,68c-1.056,0-1.626-0.503-1.688-0.561L43.595,56.909l-6.026-3.091l-7.808-2.119C29.679,51.675,28,51.162,28,49.627c0-1.333,1.711-1.902,1.783-1.926l32.829-13.293C62.637,34.397,63.549,34,64.375,34C65.316,34,66,34.631,66,35.5c0,0.143-0.015,0.298-0.034,0.442c-0.038,0.276-5.235,27.19-5.832,30.277C60.022,66.837,59.378,68,57.726,68z M64.375,35c-0.613,0-1.367,0.326-1.374,0.33L30.125,48.641C29.81,48.746,29,49.126,29,49.627c0,0.785,1.025,1.107,1.035,1.11l7.846,2.129c0.034,0.009,0.066,0.021,0.098,0.038l6.124,3.141c0.033,0.017,0.065,0.039,0.095,0.063l12.505,10.584C56.728,66.714,57.064,67,57.726,67c1.24,0,1.418-0.92,1.425-0.96c0-0.002,0.001-0.005,0.001-0.007c1.985-10.279,5.758-29.827,5.825-30.234C64.989,35.707,65,35.6,65,35.5C65,35.024,64.479,35,64.375,35z" />
                          <path fill="#1f212b" d="M42.655,66c-0.159,0-0.328-0.038-0.486-0.113c-0.202-0.096-0.315-0.313-0.279-0.534l1.483-8.946c0.029-0.177,0.151-0.325,0.32-0.387c0.17-0.063,0.358-0.029,0.495,0.087l4.67,3.946c0.11,0.092,0.175,0.228,0.178,0.371c0.003,0.144-0.056,0.281-0.161,0.378l-5.278,4.876c-0.091,0.074-0.413,0.307-0.866,0.319C42.706,66,42.681,66,42.655,66z M44.216,57.439l-1.236,7.452l4.802-4.439L44.216,57.439z" />
                          <path fill="#1f212b" d="M42.383,65.936c-0.016,0-0.032-0.001-0.049-0.002c-0.378-0.037-0.732-0.456-1.055-1.245c-0.079-0.194-3.346-9.333-4-11.164c-0.079-0.222,0.007-0.47,0.208-0.594l20.51-12.694c0.187-0.147,0.438-0.243,0.741-0.237c0.396,0.001,0.761,0.188,1.002,0.509c0.168,0.222,0.26,0.498,0.26,0.777c0,0.405-0.182,0.777-0.498,1.021l-15.17,14.43l-1.456,8.781C42.836,65.761,42.625,65.936,42.383,65.936z M38.356,53.569c1.226,3.428,3.272,9.151,3.751,10.473l1.266-7.635c0.018-0.107,0.07-0.206,0.148-0.28l15.33-14.579C58.96,41.462,59,41.378,59,41.286c0-0.044-0.01-0.111-0.059-0.175c0-0.001-0.001-0.002-0.002-0.002c-0.052-0.07-0.115-0.083-0.208-0.109c-0.06,0-0.117,0.021-0.167,0.059L38.356,53.569z" />
                        </svg>
                      </a>
                      t.me/LeonardoQ_Leao
                    </div>

                    {/* Icone do WhatsApp em SVG */}
                    <div className='single-icon-contact' >

                      <a href='https://wa.me/+556291820243'>
                        <svg id='whatsapp' viewBox="0 0 64 64">
                          <path fill="#97e0bb" d="M3,32A29,29,0,1,1,16,56.2C13,57,6,59,6,59A94.15,94.15,0,0,0,8.36,48.81,28.87,28.87,0,0,1,3,32Z" />
                          <path fill="#72caaf" d="M32 9A23 23 0 1 0 32 55A23 23 0 1 0 32 9Z" />
                          <path fill="#faefde" d="M24,18l3,8-2.68,4.21L32,37l4,3.09L40,36l8,3-2.16,6.33-6.4,1.74L27.81,42.42s-8.64-6.44-11-14c-1.31-4.08,1.74-8.72,1.74-8.72Z" />
                          <path fill="#8d6c9f" d="M46.95,37.52l-.42-.21s-4.41-2.2-5.25-2.49a2.43,2.43,0,0,0-3,.92l-.33.46a24.53,24.53,0,0,1-1.61,2.12.67.67,0,0,1-.71,0l-.24-.1a17.84,17.84,0,0,1-5.54-3.46,22.06,22.06,0,0,1-4-5c0-.07-.06-.12-.06-.12a2.31,2.31,0,0,1,.28-.36c.2-.25.39-.45.59-.66s.34-.36.51-.56l.08-.09a5,5,0,0,0,.89-1.29A2.53,2.53,0,0,0,28,24.47c-.12-.25-1-2.46-1.63-3.92l-.67-1.62h0c-.64-1.54-1.35-1.84-2.5-1.89-.28,0-.58,0-.93,0a4.71,4.71,0,0,0-3.42,1.29A9.2,9.2,0,0,0,16,25.22c0,3.41,2,6.69,3.27,8.4l.13.19c3.77,5.46,8.44,9.55,13.15,11.5C36.74,47,39,47.5,40.52,47.5a7.86,7.86,0,0,0,1.7-.19c2.25-.49,5.05-2.15,5.81-4.29.63-1.78.79-3.68.37-4.42A2.92,2.92,0,0,0,46.95,37.52Zm-.81,4.83c-.47,1.34-2.63,2.63-4.34,3-1,.22-2.58.55-8.46-1.89C29,41.66,24.62,37.82,21.07,32.67l-.21-.3C19.79,30.92,18,28.06,18,25.22a7.31,7.31,0,0,1,2.36-5.59A2.79,2.79,0,0,1,22.3,19c.3,0,.56,0,.83,0a2.42,2.42,0,0,1,.41,0,1.67,1.67,0,0,1,.35.62l.67,1.62c.9,2.18,1.54,3.74,1.68,4s.16.42.1.54a3.21,3.21,0,0,1-.61.86l-.08.09c-.15.18-.3.33-.45.49s-.46.49-.69.78a2.19,2.19,0,0,0-.39,2.75,23.71,23.71,0,0,0,4.39,5.45,20,20,0,0,0,6.12,3.82l.22.09a2.61,2.61,0,0,0,2.94-.53,25.38,25.38,0,0,0,1.78-2.32l.33-.46c.21-.29.35-.33.71-.2.56.2,3.78,1.77,5,2.4l.45.22.54.25A7.32,7.32,0,0,1,46.14,42.35Z" />
                          <path fill="#8d6c9f" d="M32.06,2H32A30,30,0,0,0,2,32,29.66,29.66,0,0,0,7.41,49.16L4,59.45a1,1,0,0,0,1.25,1.27l10.7-3.42A30,30,0,1,0,32.06,2ZM32,60a27.82,27.82,0,0,1-15.4-4.62,1,1,0,0,0-.55-.17,1,1,0,0,0-.3,0l-9.27,3,3-8.9a1,1,0,0,0-.14-.91A27.69,27.69,0,0,1,4,32,28,28,0,0,1,32,4h0a28,28,0,0,1,0,56Z" />
                          <path fill="#8d6c9f" d="M47.37 13.2a1 1 0 0 0-1.25 1.56 21.46 21.46 0 0 1 1.77 1.59 1 1 0 0 0 1.42-1.41A23.7 23.7 0 0 0 47.37 13.2zM26.93 10.65a21.72 21.72 0 0 1 12.38.4 22 22 0 0 1 3 1.26 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89 24 24 0 0 0-3.29-1.37 23.67 23.67 0 0 0-13.52-.44 1 1 0 1 0 .51 1.93zM14.57 41.82a1 1 0 0 0-1.34-.45l-1.85.93a1 1 0 0 0 .9 1.79l1.85-.93A1 1 0 0 0 14.57 41.82zM16 45.88l-1.55 1.38a1 1 0 1 0 1.33 1.49l1.55-1.38A1 1 0 1 0 16 45.88zM11.51 33h.06a1 1 0 0 0 .06-2l-2.07-.12a1 1 0 0 0-.12 2zM21.17 49.25a1 1 0 0 0-1.39.29l-1.14 1.73a1 1 0 1 0 1.67 1.1l1.14-1.73A1 1 0 0 0 21.17 49.25zM12.93 37.08a1 1 0 0 0-1.18-.78l-2 .42a1 1 0 0 0 .2 2l.2 0 2-.42A1 1 0 0 0 12.93 37.08z" />
                        </svg>
                      </a>
                      +55 62 9 9182-0243
                    </div>

                  </div>

                  {/* Aqui está o formulário, o mesmo tem a função Axios para envio, mas no momento é estético. */}
                  <form method="post" className='form' onSubmit={this.submit} >
                    <div class="input-field">
                      <div className='input-def'>
                        {/* Input 'nome' */}
                        <input className={classN[8]} type="text" id="full-name" required onChange={this.handleFormNome} value={this.state.value} />
                        <label for="full-name" id='label-full-name' >Nome:</label><br /><br />
                      </div>
                      <div className='input-def'>
                        {/* Input 'E-mail' */}
                        <input className={classN[8]} type="text" id="email" required onChange={this.handleFormEmail} value={this.state.value} />
                        <label for="email" id='label-email'>E-mail:</label><br /><br />
                      </div>
                      <div className='input-def'>
                        {/* Input 'Telefone' */}
                        <input className={classN[8]} type="number" id="tel" required onChange={this.handleFormTelefone} value={this.state.value} />
                        <label for="tel" id='label-tel'>Telefone:</label><br /><br />
                      </div>
                      <div className='input-def'>
                        {/* textarea 'Assunto' */}
                        <textarea type="text" id="tel" required onChange={this.handleFormAsstunto} value={this.state.value} />
                        <label for="tel" id='label-tel'>Assunto:</label><br /><br />
                      </div>

                      <input className={classN[8]} type="submit" id='env' value='Enviar' />

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
}
export default App;