import { series } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var seriesTCaption = document.getElementById('promedioSeries');
var infoTarjeta = document.getElementById('tarjeta');
renderSeriesInTable(series);
seriesTCaption.innerHTML = "Promedio de temporadas: ".concat(getPromedioTemporadas(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                                <td><button class=\"btn btn-link\">").concat(c.nombre, "</button></td>\n                                <td>").concat(c.canal, "</td>\n                                <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        var btn = trElement.querySelector(".btn");
        btn.addEventListener('click', function () { return renderCard(c.nombre, c.imagen, c.descripcion, c.link); });
    });
}
function getPromedioTemporadas(series) {
    var suma = 0;
    series.forEach(function (c) { return suma = suma + c.temporadas; });
    return suma / series.length;
}
function renderCard(nombre, imagen, descripcion, link) {
    infoTarjeta.style.visibility = 'visible';
    infoTarjeta.innerHTML = "<img src=\"".concat(imagen, "\" class=\"card-img-top\" height=\"150\" width=\"200\" alt=\"").concat(nombre, " Image\">\n                              <div class=\"card-body\">\n                                <h5 class=\"card-title\">").concat(nombre, "</h5>\n                                <p class=\"card-text\">").concat(descripcion, "</p>\n                                <a href=").concat(link, " class=\"card-link\" target=\"_blank\">").concat(link, "</a>\n                              </div>");
}
