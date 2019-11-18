//Creo una variabile e la imposto uguale ad una stringa che l'utente avrà inserito correttamente grazie ad un ciclo do-while(la condizione di validità è che la stringa deve essere minimo due caratteri) inoltre creo l'arrai dei cognomi già esistenti

var cognomeUtente;

var cognomi = ['Rossi','Bianchi','Esposito','Brambilla','Caio','Sempronio'];

do {
    cognomeUtente = prompt('Inserisci il tuo cognome')
} while (cognomeUtente.length < 2);

//Inserisco il cognome dell'utente nell'array dei cognomi esistenti e faccio il log dell'array per controllo
cognomi.push(cognomeUtente);

console.log(cognomi);

//Ordino alfabeticamente l'array con la fnzione sort che di default mette le stringhe in ordine alfabetico
cognomi.sort();
console.log(cognomi);

for (var i = 0; i < cognomi.length; i++) {
    if(cognomi[i] == cognomeUtente){
        alert('Il cognome inserito dall\'utente si trova in posizione ' + i + ' dell\'array dei cognomi ordinato alfabeticamente');
        alert('Se stai eseguendo questo programma di test ne capirai qualcosa di array...\nQuindi ti ricordi che negli array si conta da zero? \uD83D\uDE02 \uD83D\uDE02 \uD83D\uDE02')
    }
}
