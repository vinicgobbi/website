import { formatDuration, formatMonth } from './date-utils';

describe('date-utils', () => {
  it('formata mês/ano', () => {
    expect(formatMonth('2025-07')).toBe('jul 2025');
  });

  it('calcula duração inclusiva entre dois meses', () => {
    expect(formatDuration('2022-11', '2025-07')).toBe('2 anos e 9 meses');
    expect(formatDuration('2025-01', '2025-12')).toBe('1 ano');
    expect(formatDuration('2025-07', '2025-07')).toBe('1 mês');
  });

  it('conta até hoje quando não há data de fim', () => {
    expect(formatDuration('2025-07', undefined, new Date(2026, 9, 7))).toBe('1 ano e 4 meses');
  });
});
