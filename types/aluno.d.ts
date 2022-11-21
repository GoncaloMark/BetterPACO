interface DOMchanger {
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    setListeners: () => void;
    appendElements: () => void;
}
declare class RenderSecVirtual implements DOMchanger {
    body: HTMLBodyElement;
    childLink: HTMLLinkElement;
    dadosContent: {};
    constructor();
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    appendElements: () => void;
    setListeners: () => void;
}
interface Dados {
    [key: string]: NodeListOf<Element>;
}
interface ConteudoLinha {
    [key: string]: string[];
}
declare class TableDadosParser {
    divs: NodeListOf<Element>;
    tables: NodeListOf<Element>[];
    content: ConteudoLinha;
    dados: Dados;
    constructor(doc: Document);
    getDados(): void;
}
declare var documents: any;
