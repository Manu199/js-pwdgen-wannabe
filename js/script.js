/*

1. Chiedere all'utente il suo nome.

2. Chiedere all'utente il suo cognome.

3. Chiedere all'utente il suo colore preferito.

4. Effettuare l'innerHTML dell'output nomecognomecolorepreferito23

*/ 

const outputTag = document.getElementById('output');


const name = prompt('Inserire il nome');

const lastname = prompt('Inserire il cognome');

const color = prompt('Inserire il colore preferito');

const password = 'Your' + ' ' + 'Password' + ' ' + '=' + ' ' + name + lastname + color + 23;

const message = password 


outputTag.innerHTML = message;  