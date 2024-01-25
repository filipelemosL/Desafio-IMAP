import React from "react";
import '../Styles/Services.css'
import '../Styles/GlobalStyles.css'

const Services = () => {
    return (
        <>
            <h2 className="titulo text-center mt-5 pt-5 mb-5 ">Serviços</h2>
            <div className="cardsContainer row">
                <div className="cards licitacoes" >
                    <h4 className="cardtext">Licitações</h4>
                    <h4 className="hiddentext">Licitações</h4>
                </div>
                <div className="cards fornecedores">
                    <h4 className="cardtext">Fornecedores</h4>
                    <h4 className="hiddentext">Fornecedores</h4>
                </div>
                <div className="cards registro">
                    <h4 className="cardtext">Registro de Preços</h4>
                    <h4 className="hiddentext">Registro de Preços</h4>
                </div>
            </div>
            <div className="cardsContainer row">
                <div className="cards contratos">
                    <h4 className="cardtext">Contratos</h4>
                    <h4 className="hiddentext">Contratos</h4>
                </div>
                <div className="cards dispensas">
                    <h4 className="cardtext text-center ">Dispensas e Inexigibilidades</h4>
                    <h4 className="hiddentext text-center">Dispensas e Inexigibilidades</h4>
                </div>
                <div className="cards legislacao">
                    <h4 className="cardtext text-nowrap">Legislação de Compras</h4>
                    <h4 className="hiddentext">Legislação de Compras</h4>
                </div>
            </div>
        </>
    )
}

export default Services;