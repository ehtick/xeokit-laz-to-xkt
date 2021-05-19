const {parsePCDIntoXKTModel} = require("./parsePCDIntoXKTModel.js");

const {XKTModel, writeXKTModelToArrayBuffer} = require("@xeokit/xeokit-xkt-utils/dist/xeokit-xkt-utils.cjs.js");

function convertPCDDataToXKT(pcdData) {
    const xktModel = new XKTModel();
    parsePCDIntoXKTModel(pcdData, xktModel);
    xktModel.finalize();
    const xktArrayBuffer = writeXKTModelToArrayBuffer(xktModel);
    return Buffer.from(xktArrayBuffer);
}

exports.convertPCDDataToXKT = convertPCDDataToXKT;