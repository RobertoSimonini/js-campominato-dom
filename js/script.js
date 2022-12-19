/*
! CONSEGNA
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: :avviso:non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
*/

// ******************************************************************************** //




// Prendo gli elementi dal DOM 
const btnPlay = document.getElementById('play');
const grid = document.getElementById('grid');
const select = document.getElementById('userChoice')
// Aggiungo le impostazioni affinchè possa creare la griglia 
let totalCells = 100;


// # Creo una funzione che mi permetta di creare le celle all'interno della grid
function createCell (content) {
    const cell = document.createElement('div');
    if (userChoice === 'normal') {
        cell.classList.add('normal-cell');
    } else if (userChoice === 'hard') {
        cell.classList.add('hard-cell');
    } else {
        cell.classList.add('cell');
    }
    cell.append(content)
    grid.appendChild(cell);
    return cell;
}

// Creo un array che contenga il punteggio dell'utente 
const userScore = [];

// # Creao una funzione che mi permetta di generare 16 numeri random senza doppioni 
function getUniqueRandomBomb () {
    let randomNumber;
    do{
        randomNumber = Math.floor(Math.random() * totalCells) + 1;
    }while (bombsArray.includes(randomNumber));

    return randomNumber;
}

// Creo un array dove metterò le 16 bombe
const bombsArray = []


console.log(bombsArray);

// Aggiungo l'even listener al bottone 
btnPlay.addEventListener ('click', function(){
    // Aggiungo la classe al grid così da creare il container per il campo minato
    grid.classList.add('grid');
    
    // Prendo il value della select 
    userChoice = select.value;
    
    // Creo la condizione per cambiare la modalità di gioco
    if (userChoice === 'normal') {
        totalCells = 81;
    } else if (userChoice === 'hard') {
        totalCells = 49;
    }

    // Creo il ciclo per creare i 16 numeri
    for (j = 1; j <= 16; j++) {
        bombsArray.push(getUniqueRandomBomb())
    };

    for (let i = 1; i <= totalCells; i++) {

        // Aggiungo la funzione che crei le celle e le appena nella griglia 
        const cell = createCell (i);

        cell.addEventListener ('click', function(){
            cell.classList.toggle('bg-sky-blue');
            // Aggiungo la cella cliccata all'array dell'utente 
            userScore.push(i);
        });
    };
});

