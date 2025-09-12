/**
 * Converte um valor em segundos para uma string no formato "HH:MM:SS".
 *
 * O valor de entrada é interpretado em segundos inteiros; qualquer parte fracionária
 * será descartada (arredondada para baixo). Cada componente (horas, minutos e segundos)
 * é representado com pelo menos dois dígitos, preenchendo com zeros à esquerda quando necessário.
 * As horas podem crescer além de dois dígitos se o total de segundos corresponder a muitas horas.
 *
 * @param totalSegundos - Número total de segundos (espera-se um valor numérico não negativo).
 *                        Valores fracionários serão truncados; valores negativos não são garantidos
 *                        a produzir um resultado significativo.
 *
 * @returns Uma string no formato "HH:MM:SS", com horas, minutos e segundos zero-padded.
 *
 * @example
 * // Retorna "01:01:01"
 * formatarTempo(3661);
 *
 * @example
 * // Retorna "00:00:00"
 * formatarTempo(0);
 *
 * @remarks
 * - Para precisão de tempo superior (por exemplo, milissegundos), faça a conversão apropriada antes de chamar a função.
 * - A função não lança exceções por entradas não numéricas; entretanto, passar valores não numéricos pode resultar em comportamento inesperado.
 */
export function formatarTempo(totalSegundos: number): string {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const horasFormatadas = String(horas).padStart(2, '0');
  const minutosFormatados = String(minutos).padStart(2, '0');
  const segundosFormatados = String(segundos).padStart(2, '0');

  return `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}