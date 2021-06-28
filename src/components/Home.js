import '../App.less'
import { NavLink } from 'react-router-dom'


 export default function Home () {
    return (
        <div>
            <div>
                <NavLink to='/projects'><button>Projects</button></NavLink>
                <NavLink to='/contact'><button>Contact Me</button></NavLink>
            </div>
            <h1>Matthew Casey</h1>
                <p>Welcome to my Portfolio site. I am a currently enrolled student at Lambda School and I am excited to get into the 
                development community and get into the tech world.
            </p>

        </div>
    )
}