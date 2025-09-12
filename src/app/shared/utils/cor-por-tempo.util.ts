/**
 * Retorna a classe CSS de status (cor) com base no tempo de espera e no estado da ocorrência.
 *
 * @param segundosTotaisEspera - Tempo total de espera em segundos.
 * @param contagemParalisada - Se true, a contagem está paralisada e a função retorna sempre 'status-cinza'. Padrão: false.
 * @param ocorrenciaEncerrada - Se true, a ocorrência está encerrada e a função retorna sempre 'status-cinza'. Padrão: false.
 *
 * @returns Uma string com a classe de status:
 *  - 'status-cinza'   => quando contagemParalisada === true ou ocorrenciaEncerrada === true
 *  - 'status-verde'   => quando o tempo total é menor que 30 minutos
 *  - 'status-amarelo' => quando o tempo total é maior ou igual a 30 minutos e menor que 45 minutos
 *  - 'status-vermelho'=> quando o tempo total é maior ou igual a 45 minutos
 *
 * @remarks
 * O cálculo converte segundos em minutos usando: minutos = segundosTotaisEspera / 60.
 * Valores negativos de segundos são avaliados normalmente (por exemplo, um valor negativo será tratado como menor que 30 minutos).
 *
 * @example
 * ```ts
 * getCorPorTempo(1500);           // 1500s = 25min -> 'status-verde'
 * getCorPorTempo(2000);           // ~33.33min -> 'status-amarelo'
 * getCorPorTempo(3000, true);     // contagem paralisada -> 'status-cinza'
 * getCorPorTempo(3000, false, true); // ocorrência encerrada -> 'status-cinza'
 * ```
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
