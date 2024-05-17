const genero = document.getElementsByName("genero");
const outros = document.getElementById("outros");
const naturalidade = document.getElementById("naturalidade");
const nacionalidade = document.getElementById("nacionalidade");

const estadosBrasil = [
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" },
];

function abrirOutros() {
  if (genero[2].checked) outros.disabled = false;
  else (outros.disabled = true), (outros.value = "");
}
function verEstados() {
  if (nacionalidade.value == "BR") {
    naturalidade.hidden = false;
    document.getElementById("labelNaturalidade").hidden = false;
    if (!naturalidade[1]) {
      for (let i = 0; i < estadosBrasil.length; i++) {
        let option = document.createElement("option");
        option.textContent = estadosBrasil[i].nome;
        option.setAttribute("value", estadosBrasil[i].sigla);
        naturalidade.appendChild(option);
      }
    }
  } else {
    naturalidade.hidden = true;
    naturalidade[0].selected = true;
    document.getElementById("labelNaturalidade").hidden = true;
  }
}
