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
declare class TableParser {
    divs: NodeListOf<Element>;
    constructor();
}
declare function func(): Promise<void>;
declare let a: any;
