// Definir los entrenadores y clientes
var entrenadores = [
    { nombre: 'A', reputacion: 4.5, plazasDisponibles: 1 },
    { nombre: 'B', reputacion: 3.2, plazasDisponibles: 4 },
    { nombre: 'C', reputacion: 1.2, plazasDisponibles: 3 },
    { nombre: 'D', reputacion: 3.4, plazasDisponibles: 2 }
];
var clientes = [
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
function asignacionOptima(entrenadores, clientes) {
    // Ordenar los entrenadores por reputación de mayor a menor
    entrenadores.sort(function (a, b) { return b.reputacion - a.reputacion; });
    // Ordenar los clientes por importancia de reputación de mayor a menor
    clientes.sort(function (a, b) { return b.importanciaReputacion - a.importanciaReputacion; });
    // Iterar sobre cada cliente y asignarlo al entrenador disponible con mayor reputación
    for (var _i = 0, clientes_1 = clientes; _i < clientes_1.length; _i++) {
        var cliente = clientes_1[_i];
        var entrenadorDisponible = void 0;
        var valorSatisfaccionMax = void 0;
        for (var _a = 0, entrenadores_1 = entrenadores; _a < entrenadores_1.length; _a++) {
            var entrenador = entrenadores_1[_a];
            if (entrenador.plazasDisponibles > 0) {
                entrenadorDisponible = entrenador;
                break;
            }
        }
        if (entrenadorDisponible) {
            valorSatisfaccionMax = (entrenadorDisponible.reputacion * 20) - (cliente.importanciaReputacion * 0.5);
            console.log("|Entrenador: ".concat(entrenadorDisponible.nombre, "| Reputaci\u00F3n: ").concat(entrenadorDisponible.reputacion, "| Plazas disponibles: ").concat(entrenadorDisponible.plazasDisponibles, "|------->|Cliente: ").concat(cliente.nombre, "| Importancia Reputaci\u00F3n: ").concat(cliente.importanciaReputacion, "| Valor de satisfacci\u00F3n: ").concat(valorSatisfaccionMax.toFixed(1), " %|"));
            entrenadorDisponible.plazasDisponibles--;
        }
    }
}
asignacionOptima(entrenadores, clientes);
