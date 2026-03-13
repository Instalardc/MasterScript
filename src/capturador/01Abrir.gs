// 01Abre  -----------


function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📋 Capturador')
    .addItem('Abrir Capturador', 'showCapturadorModal')
    .addItem('📤 Subir Archivo (Sidebar)', 'mostrarFormularioDeSubida')
    .addToUi();
}



function showCapturadorModal() {
  const template = HtmlService.createTemplateFromFile('IndexCapturador');
  const htmlOutput = template.evaluate()
    .setWidth(1200)
    .setHeight(650)
    .setTitle('Capturador');
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Capturador Modal');
}




// Función puente necesaria para conectar el HTML con la Biblioteca
function incluirEncabezado() {
  return masterHeaderV1.obtenerEncabezado();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function NOMEN(texto) {
  if (!texto || texto === "") return "";
  let limpio = String(texto).toLowerCase();
  const reemplazos = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u', 'ñ': 'n',
    'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u',
    '.': '', ',': '', ';': '', '!': '', '¡': '', '?': '', '¿': '',
    '@': '', '#': '', '$': '', '%': '', '&': '', '*': '',
    '(': '', ')': '', '[': '', ']': '', '{': '', '}': '',
    '<': '', '>': '', '/': '', '\\': '', '|': '', '_': ' ', '-': ' '
  };
  Object.keys(reemplazos).forEach(key => {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    limpio = limpio.replace(regex, reemplazos[key]);
  });
  limpio = limpio.trim().replace(/\s+/g, ' ');
  const palabras = limpio.split(' ');
  if (palabras.length === 0) return "";
  let resultado = palabras[0];
  for (let i = 1; i < palabras.length; i++) {
    const palabra = palabras[i];
    if (palabra.length > 0) {
      resultado += palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }
  }
  return resultado;
}



/**
IMPORTANTE  NOMENCLATURA
 Renombrar usando el prefijo de nomenclatura  que es {idcot,(4,0)}{idcon(3,0)}. ej. 0032017. esta nos dice cotización numero 32 del cliente 17 "." esta siempre va a ir en todo archivo creado o recibido para identificarla como parte de una cotizacion. seguida de 3 caracteres que indican el tipo de archivo, espacio en blanco y finalmente el identificador particular ejemplos:

clave "."sufijo " "                                  identificador NOMEN 
0032017.COT - cotización                            titulo de la cotización
0032017.A11 - "A" Adjunto, linea1, archivo1         nombreOriginalDelArchivo
0032017.PAG - folio132146441Bancomer                folio del comprobante de pago		      
0032017.FAC - 13216477suplementosMeridaSAdeCV       1er grupo del folio de la factura y rfc             
0032017.SFA - gabineteLuminoso                      solicitud de factura		
0032017.OCP - gabineteLuminoso                      orden de compra a Produccion
0032017.OCA - gabineteLuminoso                      orden de compra a administración
*/





