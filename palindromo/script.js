function palindromo(string) {
  
    let min = string.toLowerCase();
  
  
    let reverse = '';
    for (let i = min.length - 1; i >= 0; i--) {
      reverse += min[i];
    }

    let pali = reverse.charAt(0).toUpperCase() + reverse.slice(1);
  
    if (stringa === pali) {
      return console.log(
        `La parola ${stringa} è il palindromo di :  ${pali}.`
      );
    } else {
      return console.log(
        `La parola ${stringa} non è è giusta :  ${pali}`
      );
    }
  }
  