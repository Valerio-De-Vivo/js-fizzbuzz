var stampa;

for (var i = 1 ; i <=100 ; i++) {
    if (i % 3 == 0 &&  i % 5 == 0 ) {
        stampa = i + ' fizzbuzz';
    } else if ( i % 5 == 0) {
        stampa = i +' buzz';
    } else if (i % 3 == 0) {
        stampa = i + ' fizz';
    } else {
        stampa = i;
    }

    document.getElementById('stampa').innerHTML += stampa + '<br>' ; 
}