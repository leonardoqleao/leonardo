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
                        <p>
                            Costumo organizar bem as minhas tarefas antes de iniciar, gosto de estar ciente das coisas que
                            acontecem; desenvolvi isso enquanto eu estudava na 7ª série, em uma escola com o período em tempo
                            integral, onde somente o turno da manhã era pré-definido pela escola, e cabia a mim escolher o que
                            fazer no turno da tarde. Era necessário que eu me organizasse para poder fazer o máximo de atividade
                            na parte da tarde onde era livre para escolher o que queria fazer. Pude aprender muito mais do que
                            matemática e português, aprendi a me organizar no tempo e na vida. Aprendi a jogar xadrez onde
                            desenvolvi meu pensamento crítico, aprendi a tocar instrumentos musicais desenvolvendo assim a parte
                            criativa da mente, onde sem dúvidas, me ajudou muito do decorrer da minha vida.
                        </p>
                        <p>
                            Tenho facilidade em melhorar coisas que são feitas de um jeito que eu acho ineficiente, acredito que
                            sempre vai ter como melhorar ou agilizar algum processo. Usando o tempo e as ferramentas disponíveis
                            ao meu favor. Compreendo que muitas das vezes as coisas não saem como o planejado, o que não me
                            frusta, porque eu procuro focar as minhas forças na solução, deixando os problemas apenas como
                            ponto de partida.
                        </p>
                        <p>
                            Com um espírito de competidor, estou sempre buscando desafios, algo que possa me colocar ao máximo.
                            Na programação não é diferente. Acredito que eu tenha começado da maneira errada, fazendo alguns
                            scripts para cheats em jogos, lembro de um projeto que eu desenvolvi para conseguir farmar no DDtank
                            na minha época de escola, e mesmo não me orgulhando dos resultados, hoje eu compreendo que isso
                            elevou a minha percepção de problemas.

                        </p>
                    </p>
                </div>
            </section>
        )
    }
} export default personal