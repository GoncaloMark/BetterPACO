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
declare class TableDadosParser {
    divs: NodeListOf<Element>;
    table1: NodeListOf<Element>;
    table2: NodeListOf<Element>;
    table3: NodeListOf<Element>;
    constructor(doc: any);
}
declare var documents: any;
