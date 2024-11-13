import { Link } from "react-router-dom";
import Logo from "./logo";
import Portuga from "./Portuga";
export default function NavBar(){
 return(
    <>
        <nav>
            <ul>
                <Logo />
                <li>Home</li>
                <Link to={'/duvidas'}>Dúvidas</Link>
                <li>Planos</li>
                <li>Produtos</li>
                <Portuga/>
            </ul>
        </nav>
       
    </>

            



 )


}