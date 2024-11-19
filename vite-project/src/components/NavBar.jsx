import { Link } from "react-router-dom";
import Logo from "./logo";
import Portuga from "./Portuga";
export default function NavBar(){
 return(
    <>
        <nav>
            <ul>
                <Logo />
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/duvidas'}>Duvidas</Link></li>
                <li><Link to={'/planos'}>Planos</Link></li>
                <li><Link to={'/contato'}>Contato</Link></li>
                <Portuga/>
            </ul>
        </nav>
       
    </>

            



 )


}