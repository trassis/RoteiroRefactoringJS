const { readFileSync } = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalcularFatura = require("./servico.js");
var gerarFaturaStr = require("./apresentacao.js");

// main
const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalcularFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);

/*
const htmlStr = gerarFaturaHTML(faturas, calc);
console.log(htmlStr);
*/
