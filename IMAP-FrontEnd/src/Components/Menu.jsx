import React from "react";
import '../Styles/Menu.css'
import '../Styles/GlobalStyles.css'
const Menu = () => {
    return (
        <header className="row">
            <div className="background">
                <div className="mainContainer">
                    <div className="navtitle">
                        <p className="cardTitle">Início</p>
                    </div>
                    <div className="navtitle">
                        <p className="cardTitle">Informações</p>
                    </div>
                    <div className="navtitle">
                        <p className="cardTitle">Participar</p>
                    </div>
                <img src="src/assets/logo.png" className="logo" alt='logo'></img>
                <div className="navtitle">
                        <p className="cardTitle">Explorar</p>
                    </div>
                    <div className="navtitle">
                        <p className="cardTitle">Notícias</p>
                    </div>
                    <div className="navtitle">
                        <p className="cardTitle">Fale Conosco</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;