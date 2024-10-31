const {
  compliments,
  getRandomElement,
  generateCompliment,
} = require('../complimentGenerator');

describe('getRandomElement', () => {
  test('returns an element from the array', () => {
    const array = [1, 2, 3];
    const result = getRandomElement(array);
    expect(array).toContain(result);
  });
});

describe('generateCompliment', () => {
  const developerName = 'Test Developer';

  test('generates compliment with valid style', () => {
    const consoleSpy = jest.spyOn(console, 'warn');
    const result = generateCompliment(developerName, 'enthusiastic');
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(result).toMatch(/🎉 Hey Test Developer/);
    expect(result).toMatch(new RegExp(compliments.enthusiastic.join('|')));

    consoleSpy.mockRestore();
  });

  test('handles invalid style by choosing random valid style', () => {
    const consoleSpy = jest.spyOn(console, 'warn');
    const invalidStyle = 'invalid-style';
    const result = generateCompliment(developerName, invalidStyle);

    expect(consoleSpy).toHaveBeenCalledWith(
      `Unknown compliment style: ${invalidStyle}. Choosing a random style.`
    );
    expect(result).toMatch(/🎉 Hey Test Developer/);
    const allCompliments = Object.values(compliments).flat();
    expect(allCompliments.some((comp) => result.includes(comp))).toBeTruthy();

    consoleSpy.mockRestore();
  });

  test('includes provided developer name in the compliment', () => {
    const customName = 'Super Coder';
    const result = generateCompliment(customName, 'enthusiastic');
    expect(result).toContain(customName);
  });
});
