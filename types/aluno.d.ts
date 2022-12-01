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
    footer: HTMLElement;
    nav: HTMLElement;
    LeftDiv: HTMLElement;
    RightDiv: HTMLElement;
    header: HTMLElement;
    section: HTMLElement;
    content: Dados;
    constructor(content: Dados);
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    appendElements: () => void;
    setListeners: () => void;
}
interface Dados {
    [key: string]: NodeListOf<Element>;
}
declare class TableDadosParser {
    divs: NodeListOf<Element>;
    tables: NodeListOf<Element>[];
    dados: Dados;
    constructor(doc: Document);
    getDados(): void;
}
declare var documents: Document[];
