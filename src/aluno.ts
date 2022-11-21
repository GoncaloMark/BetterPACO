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

interface Dados{
    [key:string] : NodeListOf<Element>
}

interface ConteudoLinha{
    [key:string] : string[]
}

//TALVEZ FAZER UM TYPE QUE LIMPA OS TITULOS E OS VALORES?
class TableDadosParser {
    divs;
    tables;
    content:ConteudoLinha
    dados:Dados;
    constructor(doc:Document){
        this.dados = {}
        this.divs = doc.body.querySelectorAll('#template_main > div') as NodeListOf<Element>;
        this.tables = 
            [
                this.divs[0].querySelectorAll('center > table > tbody > tr[class="table_line"]') as NodeListOf<Element>,

                this.divs[1].querySelectorAll('center > table > tbody > tr[class="table_line"]') as NodeListOf<Element>,

                this.divs[2].querySelectorAll('center > table > tbody > tr[class="table_line"]') as NodeListOf<Element>
            ]
        ;

        this.content = {}
    }

    getDados(){
        this.tables.forEach((element:NodeListOf<Element>, curIndex) => {
            element.forEach((element:Element, index) => {
                this.dados["T"+(curIndex+1)+"Linha"+(index+1)] = element.querySelectorAll("td") as NodeListOf<Element>;
            })
        })

        Object.values(this.dados).forEach((element, curIndex) => {
            const buffer:string[] = []
            element.forEach((element) => {
                buffer.push(element.innerHTML as string)
                this.content["ContentLinha"+(curIndex+1)] = buffer;
            })
        })
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
    const tables = new TableDadosParser(documents[0])
    tables.getDados()
});
}



