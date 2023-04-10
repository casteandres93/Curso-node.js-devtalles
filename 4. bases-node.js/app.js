const fs = require('fs');
console.clear();
console.log('====================');
console.log(' Tabla del: 3');
console.log('====================');

const base = 5;
let salida = '';

for (let i = 1; i <= 10; i++) {
  salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile('tabla-3.txt', salida, (err) => {
  if (err) throw err;
  console.log('tabla-5.txt creado');
});
