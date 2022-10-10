"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluir = exports.diminuirIdade = exports.addIdade = exports.idadeAction = exports.idadeForm = exports.nome = void 0;
const User_1 = require("../models/User");
const nome = (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.render('pages/nome', {
        nome,
        idade
    });
};
exports.nome = nome;
const idadeForm = (req, res) => {
    res.render('pages/idade');
};
exports.idadeForm = idadeForm;
const idadeAction = (req, res) => {
    let mostrarIdade = false;
    let idade = 0;
    if (req.body.ano) {
        let anoNascimento = parseInt(req.body.ano);
        let anoAtual = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};
exports.idadeAction = idadeAction;
const addIdade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let results = yield User_1.User.findAll({ where: { id } });
    if (results.length > 0) {
        let usuario = results[0];
        usuario.age++;
        yield usuario.save();
    }
    res.redirect('/');
});
exports.addIdade = addIdade;
const diminuirIdade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let results = yield User_1.User.findAll({ where: { id } });
    if (results.length > 0) {
        let usuario = results[0];
        usuario.age--;
        yield usuario.save();
    }
    res.redirect('/');
});
exports.diminuirIdade = diminuirIdade;
const excluir = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    yield User_1.User.destroy({ where: { id } });
    res.redirect('/');
});
exports.excluir = excluir;
