import "./hero.css"
import logo from "../../images/logo.jpg"
import {BsInstagram} from 'react-icons/bs'
export default function Hero() {
    return (
        <div className="hero_Div">
            <img src={logo} className="logo" />
            <a className="location" href="https://www.google.com/maps/place/C%C3%B3rdoba,%20Argentina">cordoba, argentina</a>
            <a href="https://www.instagram.com/tienda_bazan/">
                <button className="instagramButton">
                    <BsInstagram className="instaIcon"/>
                    <p className="instagramP">tienda_bazan</p>
                    
                </button>
            </a>
          
        </div>

    )
}
