import healthStatus from '../src/health.js';

describe('healthStatus', () => {
  test('returns "healthy" when health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(healthStatus(character)).toBe('healthy');
  });

  test('returns "wounded" when health between 15 and 50', () => {
    const character1 = { name: 'Воин', health: 50 };
    expect(healthStatus(character1)).toBe('wounded');
    
    const character2 = { name: 'Лучник', health: 15 };
    expect(healthStatus(character2)).toBe('wounded');
  });

  test('returns "critical" when health < 15', () => {
    const character = { name: 'Лекарь', health: 10 };
    expect(healthStatus(character)).toBe('critical');
  });

  test('edge cases', () => {
    expect(healthStatus({ name: 'A', health: 51 })).toBe('healthy');
    expect(healthStatus({ name: 'B', health: 50 })).toBe('wounded');
    expect(healthStatus({ name: 'C', health: 15 })).toBe('wounded');
    expect(healthStatus({ name: 'D', health: 14 })).toBe('critical');
    expect(healthStatus({ name: 'E', health: 0 })).toBe('critical');
  });
});