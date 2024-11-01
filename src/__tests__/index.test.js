const core = require('@actions/core');

const { generateCompliment } = require('../complimentGenerator.js');

jest.mock('@actions/core');
jest.mock('../complimentGenerator.js');

describe('GitHub Action', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('successfully generates and logs a compliment', () => {
    core.getInput.mockImplementation((name) => {
      if (name === 'developer_name') return 'Test Developer';
      if (name === 'compliment_style') return 'enthusiastic';
      return '';
    });

    const mockCompliment = '🎉 Hey Test Developer, You\'re amazing!';
    generateCompliment.mockReturnValue(mockCompliment);

    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    require('../index.js');

    expect(core.getInput).toHaveBeenCalledWith('developer_name');
    expect(core.getInput).toHaveBeenCalledWith('compliment_style');
    expect(generateCompliment).toHaveBeenCalledWith(
      'Test Developer',
      'enthusiastic'
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(mockCompliment);

    consoleLogSpy.mockRestore();
  });

  test('handles errors properly', () => {
    const errorMessage = 'Test error';

    core.getInput.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    const setFailedSpy = jest.spyOn(core, 'setFailed');

    jest.isolateModules(() => {
      require('../index.js');
    });

    expect(setFailedSpy).toHaveBeenCalledWith(
      `Action failed with error: ${errorMessage}`
    );
  });
});
