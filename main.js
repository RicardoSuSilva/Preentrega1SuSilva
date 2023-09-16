// Este algoritmo para calcular las notas promedio de un alumno en el 

let apellido = prompt("Este algoritmo te ayuda a calcular la nota promedio de un alumno del curso de JavaScript, ingresar apellido")
// funcion para calcular promedio de notas 
function promedio(cantidad, suma) {
    return suma / cantidad;
  }
  
  // Variables para almacenar la cantidad y la suma de las notas de los alumnos
  let cantidad = 0;
  let suma = 0;
  let seguir = true;
  
  // Bucle para pedir las notas al usuario
  while (seguir) {
    
    let nota = prompt(nombre,"Ingrese una NOTA o presione CANCELAR para terminar");
  
     if (nota === null) {
      seguir = false;
    } else {
      // Convertir la nota a un número
      nota = Number(nota);
  
      // Si la nota es válida, incrementar la cantidad y la suma
      if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        cantidad++;
        suma += nota;
      } else {
        // Si la nota no es válida, mostrar un mensaje de error
        alert("La nota debe ser un número entre 0 y 10");
      }
    }
  }
  
  // Si hay al menos una nota, calcular y mostrar el promedio
  if (cantidad > 0) {
    let promedioNotas = promedio(cantidad, suma);
    alert(apellido + " : "+"El promedio de las notas es " + promedioNotas);
  } else {
    alert(apellido + " : "+"No se ingresaron notas");
  }
