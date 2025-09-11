export function formatarTempo(totalSegundos: number): string {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const horasFormatadas = String(horas).padStart(2, '0');
  const minutosFormatados = String(minutos).padStart(2, '0');
  const segundosFormatados = String(segundos).padStart(2, '0');

  return `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}