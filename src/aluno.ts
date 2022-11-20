//Requisitos:
//Apresentar página com os dados pessoais do aluno com o seu histórico de notas (com média), situação de prescrição, horário, calendário de exames, Propinas, Operações num aside maybe!

interface DOMchanger {
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    setListeners: () => void;
    appendElements: () => void;
}

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

class TableParser {
    divs;
    constructor(){
        this.divs = document.body.querySelectorAll('#template_main > div') as NodeListOf<Element>;
    }

}


//USE THIS TO MANIPULATE OTHER PAGES DOM!
async function fetchOtherPages(link:string){
    let doc;
    await fetch(link).then((response) => {return response.text()}).then(function (html) {

	// Convert the HTML string into a document object
	const parser = new DOMParser();
	doc = parser.parseFromString(html, 'text/html');
    return doc

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
};
