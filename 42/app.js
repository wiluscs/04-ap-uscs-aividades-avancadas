let i;
let pool = 0;

for ( i = 0; i < 101; i++) {
    console.log(pool + ' + ' + i)
    pool = pool + i;
    console.log('Igual: '+ pool)
}