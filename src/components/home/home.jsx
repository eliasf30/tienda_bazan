import "./home.css"
import { products } from "../../products/products"
import CardProduct from "../../products/cardProducts/cardProducts"
import { useRef, useState } from "react"
import { isDisabled } from "@testing-library/user-event/dist/utils"

export default function Home() {
    const inputtitle = useRef()


    const [category, UseCategory] = useState("")
   

    const productsFiltered = products.filter(product => {
        
        return product.category.some(cat => category.includes(cat));})
        

    
    return (
        <div className="home">
           
            <div className="homeButtons">
                <button onClick={() => {UseCategory("")}} className="filterButtons" disabled={category==""}>Todos</button>
                <button onClick={() => {UseCategory("Noche")}} className="filterButtons" disabled={category=="Noche"}>Noche</button>
                <button onClick={() => {UseCategory("Dia")}} className="filterButtons" disabled={category=="Dia"}>Dia</button>
                <button onClick={() => {UseCategory("Abrigos")}} className="filterButtons" disabled={category=="Abrigos"}>Abrigos</button>
            
            </div>
            <div className="homeButtons">
                <button onClick={() => {UseCategory("Remeras")}} className="filterButtons" disabled={category=="Remeras"}>Remeras</button>
                <button onClick={() => {UseCategory("Pantalones")}} className="filterButtons" disabled={category=="Pantalones"}>Pantalones</button>
                <button onClick={() => {UseCategory("Shortsypolleras")}} className="filterButtons" disabled={category=="Shortsypolleras"}>Shorts y polleras</button>
                <button onClick={() => {UseCategory("Bodies")}} className="filterButtons" disabled={category=="Bodies"}>Bodies</button>
                <button onClick={() => {UseCategory("Tops")}} className="filterButtons" disabled={category=="Tops"}>Tops</button>
            
            </div>
            <div className="productDiv">
               
                {
                (category =="")?  products.map(product => <CardProduct id={product.id} {...product} />) : productsFiltered.map(product => <CardProduct id={product.id} {...product} />)
                }
                 
                
              
                
                
            
                
            </div>
            
        </div>

    )
}