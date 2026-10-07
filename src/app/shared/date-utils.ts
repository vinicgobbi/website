const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

function parse(yearMonth: string): { ano: number; mes: number } {
  const [ano, mes] = yearMonth.split('-').map(Number);
  return { ano, mes };
}

/** "2025-07" → "jul 2025" */
export function formatMonth(yearMonth: string): string {
  const { ano, mes } = parse(yearMonth);
  return `${MESES[mes - 1]} ${ano}`;
}

/** Duração inclusiva entre dois meses, ex.: "2 anos e 9 meses". Sem `fim`, conta até hoje. */
export function formatDuration(inicio: string, fim?: string, hoje = new Date()): string {
  const a = parse(inicio);
  const b = fim ? parse(fim) : { ano: hoje.getFullYear(), mes: hoje.getMonth() + 1 };
  const total = Math.max(1, (b.ano - a.ano) * 12 + (b.mes - a.mes) + 1);
  const anos = Math.floor(total / 12);
  const meses = total % 12;

  const partes: string[] = [];
  if (anos) partes.push(`${anos} ${anos === 1 ? 'ano' : 'anos'}`);
  if (meses) partes.push(`${meses} ${meses === 1 ? 'mês' : 'meses'}`);
  return partes.join(' e ');
}
