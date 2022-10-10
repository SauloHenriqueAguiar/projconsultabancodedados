"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeController = __importStar(require("../controllers/homeController"));
const InfoController = __importStar(require("../controllers/infoController"));
const UserController = __importStar(require("../controllers/userController"));
const router = (0, express_1.Router)();
router.get('/', HomeController.home);
router.post('/novousuario', HomeController.novoUsuario);
router.get('/usuario/:id/mais', UserController.addIdade);
router.get('/usuario/:id/menos', UserController.diminuirIdade);
router.get('/usuario/:id/excluir', UserController.excluir);
router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);
router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);
exports.default = router;
