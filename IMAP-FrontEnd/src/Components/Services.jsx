import React from "react";
import '../Styles/Services.css'
import '../Styles/GlobalStyles.css'

const Services = () => {
    return (
        <>
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
                    <h4 className="cardtext">Dispensas e Inexigibilidades</h4>
                    <h4 className="hiddentext">Dispensas e Inexigibilidades</h4>
                </div>
                <div className="cards legislacao">
                    <h4 className="cardtext">Legislação de Compras</h4>
                    <h4 className="hiddentext">Legislação de Compras</h4>
                </div>
            </div>
            <div className="pca">
                <h4>Clique aqui para ter acesso ao plano de contratação anual</h4>
            </div>
        </>
    )
}

export default Services;