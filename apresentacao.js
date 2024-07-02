const formatarMoeda = require('./util.js');

module.exports = function gerarFaturaStr(fatura, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;
  for (let apre of fatura.apresentacoes) {
    faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
  }
  faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
  faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
  return faturaStr;
}

module.exports = function gerarFaturaHTML(fatura, calc) {
  let htmlStr = `<html> \n`;
  htmlStr += `<p> Fatura ${fatura.cliente} </p>\n`;
  htmlStr += `<ul> \n`;
  for (let apre of fatura.apresentacoes) {
    htmlStr += `<li>  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`;
  }
  htmlStr += `</ul> \n`;
  htmlStr += `<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))} </p>\n`;
  htmlStr += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} </p>\n`;
  htmlStr += `</html> \n`;
  return htmlStr;
}
