interface DOMchanger {
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    setListeners: () => void;
    appendElements: () => void;
}
type TimeMap = {
    "hours": string;
    "minutes": string;
};
declare const addTimes: (timeMap: TimeMap[]) => string;
declare class RenderSecVirtual implements DOMchanger {
    body: HTMLBodyElement;
    childLink: HTMLLinkElement;
    dadosContent: {};
    footer: HTMLElement;
    nav: HTMLElement;
    LeftDiv: HTMLElement;
    header: HTMLElement;
    section: HTMLElement;
    content: Dados;
    aulas: NodeListOf<Element>;
    ClassInfo: Classes;
    constructor(content: Dados, aulas: NodeListOf<Element>, dias: Classes);
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    appendElements: () => void;
    setListeners: () => void;
}
interface Dados {
    [key: string]: NodeListOf<Element>;
}
interface Classes {
    [key: string]: string[];
}
declare class TableDadosParser {
    divs: NodeListOf<Element>;
    tables: NodeListOf<Element>[];
    dados: Dados;
    doc: Document;
    lines: NodeListOf<Element>;
    classInfo: Classes;
    constructor(doc: Document);
    getDados(): void;
    getSchedule(ScheD: Document): void;
}
declare var documents: Document[];
