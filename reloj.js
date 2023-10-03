function obtenerHoraDigital() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const ampm = horas >= 12 ? 'PM' : 'AM';
  
    const horaFormateada = horas % 12 || 12; 
  
    const reloj = `${horaFormateada}:${minutos}:${segundos} ${ampm}`;
    console.log(reloj);

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  setInterval(mostrarReloj, 1000);
  export { obtenerHoraDigital };