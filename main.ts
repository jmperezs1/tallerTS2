import { Serie } from "./serie.js";

import { series } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
let seriesTCaption: HTMLElement = document.getElementById('promedioSeries')!;

renderSeriesInTable(series);

seriesTCaption.innerHTML=`Promedio de temporadas: ${getPromedioTemporadas(series)}`

function renderSeriesInTable(series: Serie[]):void{
    series.forEach(c=>{
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${c.id}</td>
                                <td style="color: dodgerblue;">${c.nombre}</td>
                                <td>${c.canal}</td>
                                <td>${c.temporadas}</td>`;
        seriesTbody.appendChild(trElement);            
    });
}

function getPromedioTemporadas(series: Serie[]):number{
    let suma: number = 0;
    series.forEach(c=>suma=suma+c.temporadas);
    return suma/series.length;
}