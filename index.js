import fs from 'fs';

const leerArchivoComoString = function (ruta) {
    return fs.readFileSync(ruta, 'utf-8')
}


const escribirTextoEnArchivo = function (ruta, texto, flag) {


    try {
        
        leerArchivoComoString(ruta);
        return fs.writeFileSync(ruta, texto);
    }
    catch (error) {
        if (flag) {
            fs.writeFileSync(ruta, texto);
        }
        else{
        throw "No se pudo escribir el archivo"}
    }
}


const transformarStringEnArrayDeNumeros = function (texto, separador) {
    let output = texto.split(separador)
    output = output.filter(a => Number(a))
    return output
}

const transformarArrayDeNumerosAUnSoloString = function (array,separador) {
    return array.join(separador)
}


const combinarDosArrays = function (a,b) {
   return a.concat(b).sort((num1,num2)=>num1-num2)
}


const combinarDosArrays2 = function(array1, array2) {
   let union =array1.concat(array2)
    for (let i = 0; i < union.length; i++ ) {
        for (let j = 0; j < union.length; j++) {
            if (union[i] < union[j]) {
                let temp = union[i];
                union[i] = union[j];
                union[j] = temp;
            }
        }
    }
    return union

}


const combinarNArrays = function (a) {
    return a.flat().sort((num1,num2)=>num1-num2)
}

export {
    leerArchivoComoString,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays,
    combinarDosArrays2
}