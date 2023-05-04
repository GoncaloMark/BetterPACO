import { fetchOtherPages } from "./Fetch";

const links = 
    [
        "https://paco.ua.pt/secvirtual/c_dadospess.asp",
        "https://paco.ua.pt/secvirtual/c_planocurr.asp",
        "https://paco.ua.pt/secvirtual/horarios/c_horario_aluno.asp",
    ];

async function getTables(){
    const tables = await fetchOtherPages(links)
    return tables;
}

export async function dadosLoader(){
    const tables = await getTables();
    const { dados } = tables;
    return { dados }
}

export async function horarioLoader(){
    const tables = await getTables();
    const { sched, time } = tables;
    return { sched, time }
}
