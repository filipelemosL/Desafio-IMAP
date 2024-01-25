import React from "react";
import '../Styles/Charts.css';

var options = {
    series: [{
        name: 'Inflation',
        data: [2, 3, 4, 10, 4, 3, 3, 2, 1, 0, 0, 0]
    }],
    chart: {
        height: 300,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val;
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val;
            }
        }

    },
    title: {
        text: 'Número de Licitações',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
            color: '#000'
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

const Charts = () => {
    return (
        <>
            <div className="chartcontainer">
                <div className="chartcontainer">
                    <div id='chart'></div>
                </div>
                <div className="charttext">
                    <p>Ao longo do ano de 2022, acompanhamos de perto a dinâmica das licitações da prefeitura, refletida neste gráfico mensal. Cada barra representa o número de licitações realizadas em um determinado mês, proporcionando insights valiosos sobre a atividade contratual.</p>
                </div>

            </div>
        </>
    )
}

export default Charts;