const {convertPCDDataToXKT} = require("./convertPCDDataToXKT.js");
const fs = require('fs').promises;

async function convertPCDFileToXKT(source, output) {
    const pcdData = await fs.readFile(source);
    const xktContent = await convertPCDDataToXKT(pcdData);
    await fs.writeFile(output, xktContent);
}

exports.convertPCDFileToXKT = convertPCDFileToXKT;