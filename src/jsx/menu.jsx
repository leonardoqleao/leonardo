import { Component } from "react";
import iconDark from '../img/iconmonstreyedark.svg';
import iconLight from '../img/iconmonstreyewhite.svg';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            lightOurDark: iconDark,
        }
    }
    fLightOurDark = () => {
        this.state.lightOurDark == iconLight ? this.setState({ lightOurDark: iconDark }) : this.setState({ lightOurDark: iconLight })
    }


    render() {
        let { lightOurDark } = this.state;


        
        return (

            <header className='cabecalho ccolor'>
                <div className='menu-below-700 mbcolor'>
                    <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#ffffff'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
                </div>
                <nav className='menu mcolor'>
                    <ul className="idlist" >
                        <li><a href='#personal'>PERSONAL STATEMENT</a>  </li>
                        <li><a href='#experience'>EXPERIENCE</a>  </li>
                        <li><a href='#projects'>PROJECTS</a>  </li>
                        <li><a href='#github'>GITHUB</a>  </li>
                        <li><a href='#repositories'>REPOSITORIES</a></li>
                        <li><a href='#education'>EDUCATION</a>  </li>
                        <li><a href='#contact'>CONTACT</a>  </li>
                    </ul>
                </nav>
                <div onClick={this.fLightOurDark}>
                    <img src={lightOurDark} alt="lightButton" className="button-light-dark"/>
                </div>
            </header>
        );
    }
}
export default Menu