//   02ids

function generarNuevoIdcot() {
  try {
    var libro = SpreadsheetApp.openById("19kXge4GRISHVsvcB127WGV3IpKiVO9rDfLU-nCm100A");
    var hoja = libro.getSheetByName('Enc');
    const valores = hoja.getRange('A2:A').getValues().flat().filter(v => v !== '');
    const lastId = valores.length > 0 ? Math.max(...valores.map(v => parseInt(v))) : 0;
    return lastId + 1;
  } catch (error) {
    Logger.log('Error: ' + error.message);
    return parseInt(new Date().getTime().toString().slice(-4));
  }
}

function generarNuevoIddet() {
  try {
    var libro = SpreadsheetApp.openById("19kXge4GRISHVsvcB127WGV3IpKiVO9rDfLU-nCm100A");
    var hoja = libro.getSheetByName('Det');
    const valores = hoja.getRange('A2:A').getValues().flat().filter(v => v !== '');
    const lastId = valores.length > 0 ? Math.max(...valores.map(v => parseInt(v))) : 0;
    return lastId + 1;
  } catch (error) {
    Logger.log('Error: ' + error.message);
    return parseInt(new Date().getTime().toString().slice(-4));
  }
}

