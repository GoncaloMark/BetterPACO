//Requisitos:
//Apresentar página com os dados pessoais do aluno com o seu histórico de notas (com média), situação de prescrição, horário, calendário de exames, Propinas, Operações num aside maybe!

interface DOMchanger {
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    setListeners: () => void;
    appendElements: () => void;
}

//TALVEZ APAGAR O BODY FORA DA CLASSE! E POR JÁ A NAVBAR EM ACTION TB!

class RenderSecVirtual implements DOMchanger {
    body;
    childLink;
    dadosContent;

    constructor(){
        this.body = document.body as HTMLBodyElement;
        this.childLink = document.getElementsByName("topo")[0] as HTMLLinkElement;
        this.dadosContent = {}


    }

    deleteBody: () => void = () => {

    }

    setClasses: () => void = () => {
        
    }

    setInnerHTML: () => void = () => {
        
    }

    appendElements: () => void = () => {
        
    }

    setListeners: () => void = () => {
        
    }
}

//TALVEZ FAZER UM TYPE QUE LIMPA OS TITULOS E OS VALORES?
class TableDadosParser {
    divs;
    table1;
    table2;
    table3;
    constructor(doc:any){
        this.divs = doc.body.querySelectorAll('#template_main > div') as NodeListOf<Element>;
        this.table1 = this.divs[0].querySelectorAll('center > table > tbody > tr[class="table_line"]') as NodeListOf<Element>;
        this.table2 = this.divs[1].querySelectorAll('center > table > tbody > tr[class="table_line"]') as NodeListOf<Element>;
        this.table3 = this.divs[2].querySelectorAll('center > table > tbody > tr[class="table_line"]') as NodeListOf<Element>;
    }

}

var documents:any = []

window.onload = () => {
    const links = 
    [
        "https://paco.ua.pt/secvirtual/c_dadospess.asp",
        "https://paco.ua.pt/secvirtual/c_situacaoprescricao.asp",
        "https://paco.ua.pt/secvirtual/c_planocurr.asp",
        "https://paco.ua.pt/secvirtual/horarios/c_horario_aluno.asp",
        "https://paco.ua.pt/secvirtual/c_calendarioDeExames.asp",
        "https://paco.ua.pt/secvirtual/c_estadoDasProprinas.asp",
        "https://paco.ua.pt/tcalunos/ConsultaInscricaoEfectuada.asp",
    ]

//USE THIS TO MANIPULATE OTHER PAGES DOM!
async function fetchOtherPages(links:string[]){
    let doc;
    for(let i=0; i<links.length; i++){

        await fetch(links[i]).then((response) => {return response.text()}).then(function (html) {

            // Convert the HTML string into a document object
            const parser = new DOMParser();
            doc = parser.parseFromString(html, 'text/html');
            documents[i] = doc;
        })
        
        .catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        })
        
    };
};

fetchOtherPages(links).then(() => {
    new TableDadosParser(documents[0])
});
}



