/* 

Enunciado:

Realizar una función que permita convertir cantidades personalizadas de una unidad de medida a otra, manejando errores mediante "try-catch".

Se debe crear una función ConvertirUnidades que reciba como argumentos la unidad de origen, la unidad a convertir, y la cantidad a ser convertida. La función debe utilizar el bloque de "try catch" para manejar errores en caso de que las unidades recibidas sean incorrectas o iguales y que la cantidad ingresada sea negativa o no sea un numero. Los tipo de unidades permitidos deben ser "centimetros" y "pulgadas", en caso de ingresar otro tipo de unidad también deberá arrojar un error.

*/

function convertirUnidades(cantidad, unidadOrigen, unidadDestino) {
  // Escribe la lógica aquí
   try {
    const unidadesPermitidas = ["centimetros", "pulgadas"];

    // Verificar si las unidades proporcionadas son válidas.
    if (!unidadesPermitidas.includes(unidadOrigen) || !unidadesPermitidas.includes(unidadDestino)) {
      throw new Error("Unidades no válidas. Las unidades permitidas son: centimetros, pulgadas.");
    }

    // Verificar si las unidades de origen y destino son iguales.
    if (unidadOrigen === unidadDestino) {
      throw new Error("Las unidades de origen y destino no pueden ser iguales.");
    }

    // Verificar si la cantidad es un número positivo.
    if (typeof cantidad !== "number" || isNaN(cantidad) || cantidad <= 0) {
      throw new Error("La cantidad debe ser un número positivo.");
    }

    // Lógica para realizar las conversiones entre diferentes unidades de medida.
    if (unidadOrigen === "centimetros" && unidadDestino === "pulgadas") {
      return cantidad / 2.54; // 1 pulgada = 2.54 centímetros
    } else if (unidadOrigen === "pulgadas" && unidadDestino === "centimetros") {
      return cantidad * 2.54; // 1 pulgada = 2.54 centímetros
    }
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
}

module.exports = convertirUnidades;
