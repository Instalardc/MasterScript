# MasterScript
codigos maestros y bibliotecas principales

## Estructura del Proyecto CRM ERP en Google Apps Script

Este repositorio contiene el código organizado para un CRM ERP desarrollado en Google Sheets con Apps Script.

### Estructura de Carpetas
- `src/master/` - 4 archivos generales
- `src/capturador/` - 12 archivos para captura de datos (incluye `capturarCotizacion.gs`)
- `src/c/` - 13 archivos (clasificación o cálculo?)
- `src/BibliotecaUpleaderCapturas/` - 3 archivos para biblioteca y subida de capturas

### Funcionalidad Principal
El sistema permite el seguimiento del proceso de venta desde la captura de solicitud de cotización hasta el cobro de comisión.

**Flujo principal:**
1. Capturar solicitud de cotización
2. Buscar contacto
3. Generar título e ID de cotización
4. Capturar línea de productos hasta descripción
5. Subir adjuntos
6. Especificar medida/unidad
7. Validar y registrar en hojas "Enc" (Encabezado) y "Det" (Detalle)

### Cómo usar
1. Copia los archivos .gs a tu proyecto de Google Apps Script
2. Asegúrate de tener las hojas "Enc" y "Det" en tu Spreadsheet
3. Ejecuta la función `onOpen` para crear el menú
4. Usa el menú "CRM ERP" > "Capturar Cotización" para iniciar

### Organización
Para mantener el código organizado:
- Separa funciones por módulo
- Usa nombres descriptivos
- Implementa validaciones
- Maneja errores apropiadamente
