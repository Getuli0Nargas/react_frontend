import { Link } from "react-router-dom";
import Logo from "./logo";
import Portuga from "./Portuga";
export default function NavBar(){
 return(
    <>
        <nav>
            <ul>
                <Logo />
                <Link to={'/home'}>Home</Link>
                <Link to={'/duvidas'}>Dúvidas</Link>
                <Link to={'/planos'}>Planos</Link>
                <Link to={'/contato'}>Contato</Link>
                <Portuga/>
            </ul>
        </nav>
       
    </>

            



 )


}