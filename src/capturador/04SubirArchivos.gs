//  04SubeAdjunto

/**
    var folder = DriveApp.getFolderById('1STGqtBigDkyVZnJBRCdIaY7vNeIF-sht');
  renombrar ver NOMEN en 01Abrir
*/




function upSubirAdjunto(data) {
  try {
    var idcot   = data.idcot;
    var idcon   = data.idcon;
    var adjNum  = data.adjNum;
    var nomOrig = data.nombreOriginal;
    var mime    = data.mimeType || 'application/octet-stream';

    // Decodificar y subir
    var bytes  = Utilities.base64Decode(data.base64);
    var blob   = Utilities.newBlob(bytes, mime, nomOrig);
    var folder = DriveApp.getFolderById('1STGqtBigDkyVZnJBRCdIaY7vNeIF-sht');
    var file   = folder.createFile(blob);

    // Nombre sagrado: 0312017.A11 nombreLimpio.ext
    var dotPos = nomOrig.lastIndexOf('.');
    var ext    = dotPos > 0 ? '.' + nomOrig.substring(dotPos + 1).toLowerCase() : '';
    var sinExt = dotPos > 0 ? nomOrig.substring(0, dotPos) : nomOrig;

    var cot  = String(idcot).padStart(4, '0');
    var con  = String(idcon).padStart(3, '0');
    var adj  = String(adjNum).padStart(2, '0');

    // NOMEN() ya existe en tu Code.gs
    var nombreFinal = cot + con + '.A' + adj + ' ' + NOMEN(sinExt) + ext;
    file.setName(nombreFinal);

    Logger.log('✅ upSubirAdjunto: ' + nombreFinal);
    return nombreFinal;

  } catch(e) {
    Logger.log('❌ upSubirAdjunto: ' + e.message);
    throw new Error(e.message);
  }
}

