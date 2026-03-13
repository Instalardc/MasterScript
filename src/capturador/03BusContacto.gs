//  03BusContanctos


/**    libro Contactos hoja Cnt
idcon, contacto, empresa, telefono, razon, isr, cif, celular, email, puesto, alias, corporativo, direccion, status, usuario, fecha, contactoBasico, tarjetaContacto, , , , , , , , 

059, Joaquín Rodriguez, Spiro, 999 924 2526, SPIRO SA DE CV, TRUE, , 999 129 8059, , Director, Joaquín, , C. 84ᴬ 489-A, Centro, 97000 Mérida, Yuc., prospecto, instalardc@gmail.com, 21/1/2026, 🆔59👤joaquin rodriguez🏷️joaquin💼director📲999 129 8059✉️🏢spiro📄spiro sa de cv⚖️true📞999 924 2526🏨c 84ᴬ 489a centro 97000 merida yuc, 🆔059 ══════════════════════════
╠   ꧁👤Joaquín Rodriguez 🏷️Joaquín 💼Director꧂ 
╚╗      📲999 129 8059 ✉️ 
𓀕║  🏢Spiro 
╔╝📄SPIRO SA DE CV ⚖️TRUE 
╚╗  📞999 924 2526 🏨C. 84ᴬ 489-A, Centro, 97000 Mérida, Yuc.  ꧅
    ╚═══════════════════════════, , , , , , , , 
 
 la función debe traer la ColQ - contactoBasico para registrar en Enc!J, en lugar de registrar por separado en J,K,L,M,N,O,P
 
 */



function buscarcontactosD(searchTerm) {
  try {
    var libroContactos = SpreadsheetApp.openById("10XMvgFQSyDkRtzOea_yO6ejhbv_X2Ww4h_O9NM3E8ic");
    var hojaContactos = libroContactos.getSheetByName('Cnt');
    if (!hojaContactos) return [];
    
    const lastRow = hojaContactos.getLastRow();
    if (lastRow < 2) return [];
    
    const datos = hojaContactos.getRange(1, 1, lastRow, 18).getValues();
    const resultados = [];
    const searchLimpio = NOMEN(searchTerm);
    
    for (let i = 1; i < datos.length; i++) {
      const fila = datos[i];
      if (!fila[0]) continue;
      
      const contactoLimpio = NOMEN(fila[1] || '');
      const empresaLimpia = NOMEN(fila[2] || '');
      
      if (contactoLimpio.includes(searchLimpio) || empresaLimpia.includes(searchLimpio)) {
        resultados.push({
          idcon: fila[0],
          contacto: fila[1] || '',
          empresa: fila[2] || '',
          telefono: fila[3] || '',
          razon: fila[4] || '',
          isr: fila[5] || '',
          cif: fila[6] || '',
          celular: fila[7] || '',
          email: fila[8] || '',
          puesto: fila[9] || '',
          alias: fila[10] || '',
          corporativo: fila[11] || '',
          direccion: fila[12] || '',
          status: fila[13] || ''
        });
      }
    }
    return resultados;
  } catch (error) {
    Logger.log("ERROR en buscarcontactosD: " + error.message);
    return [];
  }
}

function getcontacto(idcon) {
  try {
    var libroContactos = SpreadsheetApp.openById("10XMvgFQSyDkRtzOea_yO6ejhbv_X2Ww4h_O9NM3E8ic");
    var hojaContactos = libroContactos.getSheetByName('Cnt');
    if (!hojaContactos) return null;
    
    const lastRow = hojaContactos.getLastRow();
    const datos = hojaContactos.getRange(1, 1, lastRow, 18).getValues();
    const idconStr = String(idcon);
    
    for (let i = 1; i < datos.length; i++) {
      if (String(datos[i][0]) === idconStr) {
        const fila = datos[i];
        return {
          idcon: fila[0],
          contacto: fila[1] || '',
          empresa: fila[2] || '',
          telefono: fila[3] || '',
          razon: fila[4] || '',
          isr: fila[5] || '',
          celular: fila[7] || '',
          email: fila[8] || '',
          puesto: fila[9] || '',
          alias: fila[10] || ''
        };
      }
    }
    return null;
  } catch (error) {
    Logger.log('Error en getcontacto: ' + error.message);
    return null;
  }
}

