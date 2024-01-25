import React from "react";
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <h3>Leis e Normativas</h3>
                <ul>
                    <li><a href="#">Lei 8.666/1993</a></li>
                    <li><a href="#">Lei 14.133/2021</a></li>
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>Para Fornecedores</h3>
                <ul>
                    <li><a href="#">Informação</a></li>
                    <li><a href="#">Documentação</a></li>
                    <li><a href="#">Formulário</a></li>
                   
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>Licitações</h3>
                <ul>
                    <li><a href="#">Dispensa/Inex</a></li>
                    <li><a href="#">Avisos</a></li>
                    
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>Contato</h3>
                <ul>
                    <li><a href="#">Fornecedores</a></li>
                    <li><a href="#">Licitações</a></li>
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>Sobre o Portal</h3>
                <ul>
                    <li><a href="#">Glossário</a></li>
                    <li><a href="#">Mapa do Site</a></li>
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>Links de Interesse</h3>
                <ul>
                    <li><a href="#">Portal da Transparência</a></li>
                    <li><a href="#">Portal de Dados Abertos do Recife</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;