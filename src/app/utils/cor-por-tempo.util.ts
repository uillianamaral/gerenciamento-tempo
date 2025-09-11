/**
 * Retorna a classe de cor correspondente ao tempo de espera.
 * A classe será usada para aplicar variáveis CSS no componente.
 */
export function getCorPorTempo(
  segundosTotaisEspera: number,
  contagemParalisada: boolean = false,
  ocorrenciaEncerrada: boolean = false
): string {

  if (contagemParalisada || ocorrenciaEncerrada) {
    return 'status-cinza';
  }

  const minutos = segundosTotaisEspera / 60;

  if (minutos < 30) {
    return 'status-verde';
  } else if (minutos < 45) {
    return 'status-amarelo';
  } else {
    return 'status-vermelho';
  }
}
