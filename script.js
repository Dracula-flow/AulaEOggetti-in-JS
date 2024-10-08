class Student {
    constructor(Nome, Cognome, Matricola, Corso) {
        this.Nome=Nome
        this.Cognome=Cognome
        this.Matricola=Matricola
        this.Corso=Corso
    }
}

const new_student = [];

//Matricolatore automatico
let Matr = document.getElementById("elMatr");
Matr.value = 1; //valore iniziale

function auto_matr() {
    Matr.value = new_student.length + 1;
}
    
//Estrattore informazioni form
function data() {
    let nome_form = document.querySelector("#elNome").value;
    let cognome_form = document.querySelector("#elCognome").value;
    let matricola_form = document.querySelector("#elMatr").value;
    let corso_form = document.querySelector("#elCorso").value;

    let new_entry = new Student(nome_form,cognome_form,matricola_form,corso_form)
    // console.log(new_entry);
    new_student.push(new_entry)
    //così riesce a pushare ogni entry nell'array.
    print();
    //Stampante
    function print() {
        let bullet_point = document.createElement("li"); //creo il punto della lista

        //Un oggetto non può essere reso normalmente tramite un semplice innerHTML o Text content.
        //Per rendere le proprietà di un oggetto stampabili in un formato comprensibile ci sono vari metodi
        //Il più semplice è usare la funzione JSON.stringify, che trasforma l'oggetto in una stringa.

        let item= JSON.stringify(new_entry).split("");
        //L'oggetto viene però stampato con {,} e altra punteggiatura.
        //Dopo aver splittato la stringa, puliamo l'output. Shift e pop per le parentesi graffe.
        item.shift();
        item.pop();
        //Uso la funzione replace per gli altri caratteri. // serve per i caratteri speciali, g segna che vanno ricercate tutte le istanze del carattere
        let sanitized_item = item.join("").replace(/,/g, ";").replace(/"/g, " ");
        bullet_point.textContent = sanitized_item;
        
        document.querySelector("#list").appendChild(bullet_point); //associo il punto della lista all'ul nell'HTML
    }
}

//Pulsante per le funzioni
let btn = document.querySelector("#btnInvia");
btn.addEventListener("click", data);
btn.addEventListener("click", auto_matr);