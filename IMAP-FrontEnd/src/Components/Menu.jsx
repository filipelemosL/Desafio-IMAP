import React from "react";
import '../Styles/Menu.css'
import '../Styles/GlobalStyles.css'
const Menu = () => {
    return (
        <header>
            <div className="background">
                <div className="mainContainer">
                    <div className="explorar">
                        <p className="cardTitle">Explorar</p>
                    </div>
                    <div className="informacoes">
                        <p className="cardTitle">Informações</p>
                    </div>
                    <div className="participar">
                        <p className="cardTitle">Participar</p>
                    </div>
                <img src="src/assets/logo.png" className="logo" alt='logo'></img>
                <div className="explorar">
                        <p className="cardTitle">Explorar</p>
                    </div>
                    <div className="informacoes">
                        <p className="cardTitle">Informações</p>
                    </div>
                    <div className="participar">
                        <p className="cardTitle">Participar</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;