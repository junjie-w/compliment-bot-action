const core = require('@actions/core');

const { generateCompliment } = require('./complimentGenerator.js');

try {
  const developerName = core.getInput('developer_name');
  const complimentStyle = core.getInput('compliment_style');

  const compliment = generateCompliment(developerName, complimentStyle);

  console.log(compliment);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}
