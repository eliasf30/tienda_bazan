import "./navbar.css"
import { BsWhatsapp } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div className="navbar">
            <h3 className="navbarTitle">tienda bazan</h3>
            
            <a target="_BLANK" href="https://api.whatsapp.com/send/?phone=3517690689&text=Tengo+una+consulta+sobre+tu+tienda+online&type=phone_number&app_absent=0">
                <BsWhatsapp className="whatsappIcon" />
                
            </a>
            
            
            
        </div>
    )
}