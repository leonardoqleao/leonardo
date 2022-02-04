import { Component } from "react"

class Github extends Component {
    render() {
        return (
            <div>
                <h2 id='github'>GitHub:</h2>
                <div className='imgs'>
                    <div className='most'> <img height="300em" src='https://github-readme-stats.vercel.app/api/top-langs/?username=leonardoqleao&layout=demo&theme=vue&hide_border=true&hide=c' /></div>
                    <img className='stats' height="180em" src='https://github-readme-stats.vercel.app/api?username=leonardoqleao&count_private=true&theme=vue&show_icons=true' />
                </div>
            </div>
        );
    }
}
export default Github

