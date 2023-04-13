const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    describe: 'Número base para la tabla de multiplicar',
    demandOption: true,
  })
  .option('l', {
    alias: 'limite',
    type: 'number',
    describe: 'Límite para la tabla de multiplicar',
    default: 10,
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    describe: 'Muestra la tabla de multiplicar en la consola',
    default: false,
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw new Error('La base tiene que ser un número');
    }
    if (isNaN(argv.l)) {
      throw new Error('El límite tiene que ser un número');
    }
    return true;
  }).argv;

module.exports = argv;
