import { Serie } from "./serie.js";
import { series } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
let seriesTCaption: HTMLElement = document.getElementById('promedioSeries')!;
let infoTarjeta: HTMLElement = document.getElementById('tarjeta')!;


renderSeriesInTable(series);

seriesTCaption.innerHTML=`Promedio de temporadas: ${getPromedioTemporadas(series)}`;

function renderSeriesInTable(series: Serie[]):void{
    series.forEach(c=>{
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${c.id}</td>
                                <td><button class="btn btn-link">${c.nombre}</button></td>
                                <td>${c.canal}</td>
                                <td>${c.temporadas}</td>`;
        seriesTbody.appendChild(trElement);    
        let btn = trElement.querySelector(".btn")!;
        btn.addEventListener('click', ()=>renderCard(c.nombre, c.imagen, c.descripcion, c.link));
    });
}

function getPromedioTemporadas(series: Serie[]):number{
    let suma: number = 0;
    series.forEach(c=>suma=suma+c.temporadas);
    return suma/series.length;
}

function renderCard(nombre:string, imagen:string, descripcion:string, link:string):void{
    infoTarjeta.style.visibility = 'visible';
    infoTarjeta.innerHTML = `<img src="${imagen}" class="card-img-top" height="150" width="200" alt="${nombre} Image">
                              <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">${descripcion}</p>
                                <a href=${link} class="card-link" target="_blank">${link}</a>
                              </div>`;
}
