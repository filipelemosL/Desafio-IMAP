import React from "react";
import '../Styles/Charts.css';


const Charts = () => {
    return (
        <>
            <div className="dashboard">
                <div className="chart">
                    <img className='donut' src='src/assets/licitações.svg'></img>
                </div>
                <p>O gráfico revela uma situação marcante, com 80% das licitações atualmente em aberto, indicando uma significativa predominância de processos ainda não concluídos. Esta proporção destaca a extensão das oportunidades que estão em fase de avaliação e decisão.</p>
                <div className="chart">
                    <img className='bars' src='src/assets/licitaes-por-ms.svg'></img>
                </div>
                <p>Ao longo do ano fictício de 2022, acompanhamos de perto a dinâmica das licitações da prefeitura, refletida neste gráfico mensal. Cada barra representa o número de licitações realizadas em um determinado mês, proporcionando insights valiosos sobre a atividade contratual.</p>
            </div>
        </>
    )
}

export default Charts;