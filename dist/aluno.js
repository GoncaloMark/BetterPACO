"use strict";
//Requisitos:
//Apresentar página com os dados pessoais do aluno com o seu histórico de notas (com média), situação de prescrição, horário, calendário de exames, Propinas, Operações num aside maybe!
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//TALVEZ APAGAR O BODY FORA DA CLASSE! E POR JÁ A NAVBAR EM ACTION TB!
var RenderSecVirtual = /** @class */ (function () {
    function RenderSecVirtual() {
        this.deleteBody = function () {
        };
        this.setClasses = function () {
        };
        this.setInnerHTML = function () {
        };
        this.appendElements = function () {
        };
        this.setListeners = function () {
        };
        this.body = document.body;
        this.childLink = document.getElementsByName("topo")[0];
        this.dadosContent = {};
    }
    return RenderSecVirtual;
}());
//TALVEZ FAZER UM TYPE QUE LIMPA OS TITULOS E OS VALORES?
var TableDadosParser = /** @class */ (function () {
    function TableDadosParser(doc) {
        this.dados = {};
        this.divs = doc.body.querySelectorAll('#template_main > div');
        this.tables =
            [
                this.divs[0].querySelectorAll('center > table > tbody > tr[class="table_line"]'),
                this.divs[1].querySelectorAll('center > table > tbody > tr[class="table_line"]'),
                this.divs[2].querySelectorAll('center > table > tbody > tr[class="table_line"]')
            ];
        this.content = {};
    }
    TableDadosParser.prototype.getDados = function () {
        var _this = this;
        this.tables.forEach(function (element, curIndex) {
            element.forEach(function (element, index) {
                _this.dados["T" + (curIndex + 1) + "Linha" + (index + 1)] = element.querySelectorAll("td");
            });
        });
        Object.values(this.dados).forEach(function (element, curIndex) {
            var buffer = [];
            element.forEach(function (element) {
                buffer.push(element.innerHTML);
                _this.content["ContentLinha" + (curIndex + 1)] = buffer;
            });
        });
        console.log(this.content);
    };
    return TableDadosParser;
}());
var documents = [];
window.onload = function () {
    var links = [
        "https://paco.ua.pt/secvirtual/c_dadospess.asp",
        "https://paco.ua.pt/secvirtual/c_situacaoprescricao.asp",
        "https://paco.ua.pt/secvirtual/c_planocurr.asp",
        "https://paco.ua.pt/secvirtual/horarios/c_horario_aluno.asp",
        "https://paco.ua.pt/secvirtual/c_calendarioDeExames.asp",
        "https://paco.ua.pt/secvirtual/c_estadoDasProprinas.asp",
        "https://paco.ua.pt/tcalunos/ConsultaInscricaoEfectuada.asp",
    ];
    //USE THIS TO MANIPULATE OTHER PAGES DOM!
    function fetchOtherPages(links) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, fetch(links[i]).then(function (response) { return response.text(); }).then(function (html) {
                                            // Convert the HTML string into a document object
                                            var parser = new DOMParser();
                                            doc = parser.parseFromString(html, 'text/html');
                                            documents[i] = doc;
                                        })
                                            .catch(function (err) {
                                            // There was an error
                                            console.warn('Something went wrong.', err);
                                        })];
                                    case 1:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < links.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    }
    ;
    fetchOtherPages(links).then(function () {
        var tables = new TableDadosParser(documents[0]);
        tables.getDados();
    });
};
