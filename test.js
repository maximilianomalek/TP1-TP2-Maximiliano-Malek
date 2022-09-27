import { 
    leerArchivoComoString,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays,
    combinarDosArrays2
 } from "./index.js";


console.log(leerArchivoComoString('./Archivos/archivo1.txt'));
escribirTextoEnArchivo('./Archivos/archivo2.txt','Agregando texto', true)
//escribirTextoEnArchivo('./Archivos/archivo3.txt','Agregando texto', false)
console.log('\n/* -------------------- transformarStringEnArrayDeNumeros --------------------*/');
console.log(transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', '|'))
console.log('\n/* -------------------- transformarArrayDeNumerosAUnSoloString --------------------*/');
console.log(transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ','))
console.log('\n/* -------------------- combinarDosArrays --------------------*/');
console.log(combinarDosArrays([1, 5, 10], [2, 3, 8, 11,4,7,9]))
console.log('\n/* -------------------- combinarNArrays --------------------*/');
console.log(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))
console.log('\n/* -------------------- combinarDosArrays2 --------------------*/');
console.log(combinarDosArrays2([1, 5, 10], [2, 3, 8, 11,4,7,9]))