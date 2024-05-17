interface Entrenador {
    nombre: string;
    reputacion: number;
    plazasDisponibles: number;
  }
  
interface Cliente {
    nombre: string;
    importanciaReputacion: number;
  }
  
// Definir los entrenadores y clientes
const entrenadores: Entrenador[] = [
  { nombre: 'A', reputacion: 4.5, plazasDisponibles: 1 },
  { nombre: 'B', reputacion: 3.2, plazasDisponibles: 4 },
  { nombre: 'C', reputacion: 1.2, plazasDisponibles: 3 },
  { nombre: 'D', reputacion: 3.4, plazasDisponibles: 2 }
];
  
const clientes: Cliente[] = [
  { nombre: 'q', importanciaReputacion: 2.6 },
  { nombre: 'r', importanciaReputacion: 3.7 },
  { nombre: 's', importanciaReputacion: 8.5 },
  { nombre: 't', importanciaReputacion: 9.7 },
  { nombre: 'u', importanciaReputacion: 2.6 },
  { nombre: 'v', importanciaReputacion: 4.7 },
  { nombre: 'w', importanciaReputacion: 5.6 },
  { nombre: 'x', importanciaReputacion: 3.7 },
  { nombre: 'y', importanciaReputacion: 8.1 },
  { nombre: 'z', importanciaReputacion: 2.5 }
];

//Función para asignar los clientes con mayor importancia de reputación a los entrenadores con mayor reputación
function asignacionOptima(entrenadores: Entrenador[], clientes: Cliente[]): void {
  // Ordenar los entrenadores por reputación de mayor a menor
  entrenadores.sort((a, b) => b.reputacion - a.reputacion);

  // Ordenar los clientes por importancia de reputación de mayor a menor
  clientes.sort((a, b) => b.importanciaReputacion - a.importanciaReputacion);

  // Iterar sobre cada cliente y asignarlo al entrenador disponible con mayor reputación
  for (const cliente of clientes) {
    let entrenadorDisponible: Entrenador | undefined;
    let valorSatisfaccionMax: number;
    for (const entrenador of entrenadores) {
      if (entrenador.plazasDisponibles > 0) {
        entrenadorDisponible = entrenador;
        break;
      }
    }
    if (entrenadorDisponible) {
      valorSatisfaccionMax = (entrenadorDisponible.reputacion*20)-(cliente.importanciaReputacion*0.5);
      console.log(`|Entrenador: ${entrenadorDisponible.nombre}| Reputación: ${entrenadorDisponible.reputacion}| Plazas disponibles: ${entrenadorDisponible.plazasDisponibles}|------->|Cliente: ${cliente.nombre}| Importancia Reputación: ${cliente.importanciaReputacion}| Valor de satisfacción: ${valorSatisfaccionMax.toFixed(1)} %|`);
      entrenadorDisponible.plazasDisponibles--;
    }
  }
}

asignacionOptima(entrenadores, clientes);
