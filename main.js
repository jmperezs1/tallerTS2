import { series } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var seriesTCaption = document.getElementById('promedioSeries');
renderSeriesInTable(series);
seriesTCaption.innerHTML = "Promedio de temporadas: ".concat(getPromedioTemporadas(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                                <td style=\"color: dodgerblue;\">").concat(c.nombre, "</td>\n                                <td>").concat(c.canal, "</td>\n                                <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var suma = 0;
    series.forEach(function (c) { return suma = suma + c.temporadas; });
    return suma / series.length;
}
