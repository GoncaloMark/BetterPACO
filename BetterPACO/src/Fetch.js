export class TableDadosParser {
    divs;
    tables;
    dados;
    doc;
    lines;
    classInfo;
    constructor(doc){
        this.doc = doc;
        this.dados = {};
        this.divs = this.doc.body.querySelectorAll('#template_main > div');
        this.classInfo = {}

    }

    getDados(){
        this.tables = 
            [
                this.divs[0].querySelectorAll('center > table > tbody > tr[class="table_line"]'),

                this.divs[1].querySelectorAll('center > table > tbody > tr[class="table_line"]'),

                this.divs[2].querySelectorAll('center > table > tbody > tr[class="table_line"]')
            ]
        ;

        this.tables.forEach((element, curIndex) => {
            element.forEach((element, index) => {
                this.dados["T"+(curIndex+1)+"Linha"+(index+1)] = element.querySelectorAll("td");
            });
        });

        return this.dados;
    }

    getSchedule(ScheD){
                const schedule = ScheD.body.querySelectorAll('#template_main > table')[0];
                const lines = schedule.querySelectorAll('tbody > tr:nth-child(n+3):nth-child(-n+8) > td[class="horario_turma"]');
                this.lines = lines;
                const dias = [
                    "Segunda",
                    "Terça",
                    "Quarta",
                    "Quinta",
                    "Sexta"
                ]

                this.lines.forEach((el, index) => {
                    const title = el.attributes[5];
                    if(title.value.includes(dias[0])){
                        this.classInfo["Aula"+index] = ["Segunda-Feira", el.textContent?.split("(")[0].split("\n")[1]];
                    } else if(title.value.includes(dias[1])){
                        this.classInfo["Aula"+index] = ["Terça-Feira", el.textContent?.split("(")[0].split("\n")[1]];
                    } else if(title.value.includes(dias[2])){
                        this.classInfo["Aula"+index] = ["Quarta-Feira", el.textContent?.split("(")[0].split("\n")[1]];
                    } else if(title.value.includes(dias[3])){
                        this.classInfo["Aula"+index] = ["Quinta-Feira", el.textContent?.split("(")[0].split("\n")[1]];
                    } else if(title.value.includes(dias[4])){
                        this.classInfo["Aula"+index] = ["Sexta-Feira", el.textContent?.split("(")[0].split("\n")[1]];
                    }

                });

                //console.log(this.classInfo)

                return {sched: this.classInfo, lines: this.lines};
    }
}

export async function fetchOtherPages(links){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type','text/html; charset=windows-1252');
    let doc;
    const text = [];
    try {
        const res_1 = await Promise.all(
            links.map(
                (el) => fetch(el, { headers: myHeaders })
                    .then(res => res.arrayBuffer())
                    .then(buffer => {
                        const decoder = new TextDecoder('windows-1252');
                        const text_1 = decoder.decode(buffer);
                        return text_1;
                    })
            )

        );
        res_1.map((el_1) => {
            text.push(el_1);
        });
        const html = text;
        const parser = new DOMParser();
        const documents = [];

        for (let i = 0; i < html.length; i++) {
            doc = parser.parseFromString(html[i], 'text/html');
            documents[i] = doc;
        }
        const tables = new TableDadosParser(documents[0]);
        const dados = tables.getDados();
        const {sched, lines} = tables.getSchedule(documents[2]);
        const values = Object.values(sched).map((el, i) => {
            return {start: {hours: lines[i].attributes[5].value.split("INÍCIO:")[1].split("DURAÇÃO")[0].includes(",5") ? lines[i].attributes[5].value.split("INÍCIO:")[1].split("DURAÇÃO")[0].split(",")[0] : lines[i].attributes[5].value.split("INÍCIO:")[1].split("DURAÇÃO")[0].split("h")[0], minutes: lines[i].attributes[5].value.split("INÍCIO:")[1].split("DURAÇÃO")[0].includes(",5") ? "30" : "00"}, duration: {hours: lines[i].attributes[5].value.split("DURAÇÃO:")[1].split('LOTAÇÃO')[0].includes(",5") ? lines[i].attributes[5].value.split("DURAÇÃO:")[1].split('LOTAÇÃO')[0].split(",")[0] : lines[i].attributes[5].value.split("DURAÇÃO:")[1].split('LOTAÇÃO')[0].split("h")[0], minutes: lines[i].attributes[5].value.split("DURAÇÃO:")[1].split('LOTAÇÃO')[0].includes(",5") ? "30" : "00"}}
        })

        const time = values.map(el => {
            return {start: addTimes([el.start]), end: addTimes([el.start, el.duration])}
        })
        return {dados, sched, time};
    } catch (e) {
        return console.error(e.message);
    }

}

const addTimes = function(timeMap) {
    let totalH = 0
    let totalM = 0
    // First simply adding all of it together, total hours and total minutes
    for (var x in timeMap) {
        totalH += parseInt(timeMap[x].hours, 10);
        totalM += parseInt(timeMap[x].minutes, 10);
    }

    // If the minutes exceed 60
    if (totalM >= 60) {
        // Divide minutes by 60 and add result to hours
        totalH += Math.floor(totalM / 60);
        // Add remainder of totalM / 60 to minutes
        totalM = totalM % 60;
    }

    if(totalM === 0){
        return totalH + "h00"
    }

    return totalH + "h" + totalM;
}