// Pari e Dispari

// pari
function pari (number) {
    return number % 2 === 0;
  }
  // dispari 
  function dispari(number) {
    return number % 2 !== 0;
  }
  // chiedere se il numero scelto è pari o dispari 
  let miaScelta = prompt('pari o dispari?');
  console.log('la tua scelta è:' + ' ' + miaScelta);
  
  //iniziare la funzione con la scelta dell'ultente
  let mioNumero;
  
  // chiedere di inseire un numero da 1 a 5
  while (true) {
    mioNumero = parseInt(prompt('scegli un numero da 1 a 5'));
  
    if ( mioNumero >= 1 && mioNumero <= 5) {
      console.log(true)
    } else {
      alert('scelgo un numero da 1 a 5');
    }console.log('il mio numero è:' + ' ' +mioNumero);
  }
  
  
  // funzione 2: pc
  let pcNum = Math.floor(Math.random() * 5) + 1;
  console.log('pc numero:' + ' ' + pcNum)
  
  // somma
  let somma = mioNumero + pcNum;
  console.log(somma)
  
  // se esce pari o dispari
  if (miaScelta === pari && somma % 2 === 0) {
    console.log('Ho vinto!'); 
  } else {
    console.log('Hai perso');
  
  }
