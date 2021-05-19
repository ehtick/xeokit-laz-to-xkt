#!/usr/bin/env node


const commander = require('commander');
const package = require('./package.json');
const {convertPCDFileToXKT} = require("./src/convertPCDFileToXKT.js");

const program = new commander.Command();

program.version(package.version, '-v, --version');

program
    .option('-s, --source [file]', 'path to source PCD file')
    .option('-o, --output [file]', 'path to target xkt file');

program.on('--help', () => {

});

program.parse(process.argv);

if (program.source === undefined) {
    console.error('\n\nError: please specify source PCD path.');
    program.help();
    process.exit(1);
}

if (program.output === undefined) {
    console.error('\n\nError: please specify target XKT path.');
    program.help();
    process.exit(1);
}

console.log('\n\nReading PCD file: ' + program.source);

console.log('Converting to XKT format v8');

async function main() {
    await convertPCDFileToXKT(program.source, program.output);
}

main().catch(err => {
    console.error('Something went wrong:', err);
    process.exit(1);
});
