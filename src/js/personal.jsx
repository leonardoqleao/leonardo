import { Component } from "react";
import '../style/testBootstrap.css'
import '../style/App.css';
import '../style/dark.css';
import '../style/light.css';
import '../style/teste.css';
import '../style/media.css';
import '../style/index.css';
import '../style/text.css';

class personal extends Component {


    render() {
        return (
            <section>
                <div className='text-container'>
                    <h1 className='text-h1'>Um pouco sobre mim:</h1>
                    <p className='text-p1'>

                        Começo dizendo que eu gosto das coisas bem-organizadas, nada clichê, apenas gosto de estar ciente das coisas que acontecem, por muito tempo eu sou assim. Gosto
                        de fazer tudo ocorrer seguindo um parâmetro. Por tempos isso foi frustrante, as tentativas de controlar
                        tudo, sempre buscando a melhor forma de fazer alguma coisa.


                    </p>
                </div>
            </section>
        )
    }
} export default personal