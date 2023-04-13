const fs = require('fs');

const crearArchivo = (base, limite, show) => {
  return new Promise((resolve, reject) => {
    let salida = '';

    // Colores ANSI
    const azul = '\x1b[34m';
    const rojo = '\x1b[31m';
    const amarillo = '\x1b[33m';
    const reset = '\x1b[0m';

    for (let i = 1; i <= limite; i++) {
      salida += `${azul}${i}${reset} ${rojo}x${reset} ${azul}${base}${reset} ${rojo}=${reset} ${amarillo}${base * i}${reset}\n`;
    }

    if (show) {
      console.log(salida);
    }

    let archivo = `tabla-${base}.txt`;
    fs.writeFile(archivo, salida, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(archivo);
      }
    });
  });
};

module.exports = {
  crearArchivo,
};
