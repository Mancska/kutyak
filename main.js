import { ADATLISTA } from "./adat.js";
import { Rendezes } from "./rendezes.js";

function init() {
  const articleElem = $("article");
  articleElem.append(osszeAllit(ADATLISTA));
}

function osszeAllit(lista) {
  let txt = "";

  txt += `<table class="table table-striped">`;
  txt += `<tr class="table-dark"><th id="knev">név</th>
    <th id="kfajta">Fajta</th>
    <th id="kkor">kor</th></tr>`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    for (const key in lista[index]) {
      txt += `<td>${lista[index][key]}</td>`;
    }
    txt += `</tr>`;
  }
  txt += `</table>`;

  return txt;
}

function renderTable(data) {
  const table = osszeAllit(data);
  $('table').replaceWith(table);
}

$("#knev, #kkor, #kfajta").on("click", function(event) {
  const id = $(event.target).attr("id");
  const sortedData = Rendezes(ADATLISTA, id.slice(1));
  renderTable(sortedData);
});

init();
