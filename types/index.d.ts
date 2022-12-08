interface DOMchanger {
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    setListeners: () => void;
    appendElements: () => void;
}
type EVT = {
    buttonEstudante: HTMLElement;
    buttonDocente: HTMLElement;
    buttonSecretaria: HTMLElement;
};
type Menu = {
    menuEstudante: HTMLElement;
    menuDocente: HTMLElement;
    menuSecretaria: HTMLElement;
};
declare class RenderIndex implements DOMchanger {
    private body;
    private info;
    private arrInfo;
    private childLink;
    private header;
    private footer;
    private nav;
    private section;
    private article;
    private heading;
    private dummyTimer;
    readonly avisos: ({
        Title1: string;
        Text1: string;
        Title2?: undefined;
        Text2?: undefined;
        Title3?: undefined;
        Text3?: undefined;
        Title4?: undefined;
        Text4?: undefined;
    } | {
        Title2: string;
        Text2: string;
        Title1?: undefined;
        Text1?: undefined;
        Title3?: undefined;
        Text3?: undefined;
        Title4?: undefined;
        Text4?: undefined;
    } | {
        Title3: string;
        Text3: string;
        Title1?: undefined;
        Text1?: undefined;
        Title2?: undefined;
        Text2?: undefined;
        Title4?: undefined;
        Text4?: undefined;
    } | {
        Title4: string;
        Text4: string;
        Title1?: undefined;
        Text1?: undefined;
        Title2?: undefined;
        Text2?: undefined;
        Title3?: undefined;
        Text3?: undefined;
    })[];
    readonly buttons: EVT;
    readonly menu: Menu;
    constructor();
    deleteBody: () => void;
    setClasses: () => void;
    setInnerHTML: () => void;
    appendElements: () => void;
    setListeners: () => void;
}
