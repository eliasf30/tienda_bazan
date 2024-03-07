import "./cart.css"

import { BsCart } from 'react-icons/bs';
import { AiFillCloseSquare, AiOutlineReload } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from "react";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import CardCarrito from "./cardCarrito/cardcarrito"
import CardOrder from "./cardOrder/cardOrder"


export default function Cart() {



    const [orderLabel, setorderLabel] = useState({ bottom: "-100%", transition: ".5s" })
    const [client, setClient] = useState({ nombre: "", direccion: "", telefono: "", comentario: "" })

    const nombre = useRef("")
    const direccion = useRef("")
    const telefono = useRef("")
    const comentario = useRef("")

    const [showCart, setShowCart] = useState({ opacity:"0" ,bottom: "-600px", transition: ".5s" })
    const [InfoLabel, setInfoLabel] = useState({ opacity:"0", bottom: "-600px", transition: ".5s" })

    const { items, totalcost } = useSelector(state => state.cart);

    useEffect(() => {
        if (items.length === 0) {
            setShowCart({ opacity:"0",bottom: "-600px", transition: ".5s" })
        }
    }, [items])



    function submitOrder() {

        setInfoLabel({opacity:"0", bottom: "-600px", transition: ".5s" })
        setorderLabel({ bottom: "0", transition: ".5s" })

        setClient({
            nombre: nombre.current.value,
            direccion: direccion.current.value,
            telefono: telefono.current.value,
            comentario: comentario.current.value
        })


        return link;
    }


    const productos = items.map(item => `${item.quantity} x ${item.title} %0D%0A`)

    const text = `hola, mi nombre es: ${client.nombre}%0D%0Ami direccion es: ${client.direccion}%0D%0Ami numero telefonico es: ${client.telefono}%0D%0A%0D%0Aquiero ordenar:%0D%0A${[productos]}%0D%0Acomentarios adicionales: ${(client.comentario !== "") ? client.comentario : "ninguno"}`


    const link = `https://api.whatsapp.com/send?phone=3517690689&text=${text.replace(" ", "%20")}`



    function Reload() {
       
        setorderLabel({ bottom: "-100%", transition: ".5s" })
    }





    return (<>

        {
            (items.length) ?
                (<div className="cart" style={{ bottom: "2%", transition: ".5s" }} >
                    <BsCart onClick={() => { setShowCart({opacity:"1", bottom: "12%", transition: ".5s" }); setInfoLabel({ opacity:"0", bottom: "-600px", transition: ".5s" }) }} className="cartIcon" />
                    <button className="continueButton" onClick={() => { setInfoLabel({opacity:"1" ,bottom: "12%", transition: ".5s" }); setShowCart({ opacity:"0", bottom: "-600px", transition: ".5s" }) }}>
                        <h3 >continuar</h3>
                    </button>
                    <h4>${totalcost}</h4>

                </div>) : (



                    <div className="cart" style={{ bottom: "-100px", transition: ".5s" }}>


                        <h3 >continuar</h3>
                        <h4>${totalcost}</h4>
                    </div>)
        }



        <div style={showCart} className="itemsDiv">
            <AiFillCloseSquare style={{ position: "absolute", right: "0", margin: "1%" }} className="whatsappIcon" onClick={() => { setShowCart({ opacity:"0", bottom: "-600px", transition: ".5s" }) }} />
            <div className="productDIV">
                {items.length ? (
                    items.map(item => <CardCarrito key={item.id} {...item} />)
                ) : (
                    <h3 className='noProductH3'>Aca van tus productos...</h3>
                )}
            </div>
            <div className="totalDiv">
                <h3>Total</h3>
                <h3>${totalcost}</h3>
            </div>
        </div>

        <div style={InfoLabel} className="formDiv">

            <input ref={nombre} className="formInput" type="text" placeholder="Nombre" />
            <input ref={direccion} className="formInput" type="text" placeholder="Direccion" />
            <input ref={telefono} className="formInput" type="number" placeholder="Telefono" />
            <input ref={comentario} className="formInput" type="text" placeholder="Comentarios" />

            <button onClick={submitOrder} className="formButton"> Guardar Informacion</button>


        </div>
        <div style={orderLabel} className="orderDiv">
            <h3 className="resumenTittle">Resumen De Tu Pedido!</h3>
            <div className="clientanditems"  >
                <div className="client">
                    <h2>Informacion del Cliente</h2>
                    <div>
                        <div className="infoClientDivs">
                            <h3>Nombre:&nbsp; </h3>
                            <h4>{client.nombre}</h4>
                        </div>
                        <div className="infoClientDivs">
                            <h3>Direccion:&nbsp; </h3>
                            <h4>{client.direccion}</h4>
                        </div>
                        <div className="infoClientDivs">
                            <h3>Telefono:&nbsp; </h3>
                            <h4>{client.telefono}</h4>
                        </div>
                        <div >
                            <h3 className="infoClientDivs">Comentarios:&nbsp; </h3>
                            <h4 className="comentario">{client.comentario}</h4>
                        </div>
                    </div>


                </div>
                <div className="items">
                    <h2>Informacion del Pedido</h2>

                    <div className="productOrder" style={{ height: "100%" }}>
                        {items.map(item => <CardOrder key={item.id} {...item} />)}
                    </div>


                    <div className="totalDiv">
                        <h3>Total</h3>
                        <h3>${totalcost}</h3>
                    </div>
                </div>
            </div>
            <a className="a" target="_blank" href={link}>
                <button onClick={Reload} className="whatsappButton"><BsWhatsapp />Enviar Por Whatsapp</button>
            </a>
        </div>

    </>
    )
}