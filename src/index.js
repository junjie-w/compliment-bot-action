const core = require("@actions/core");

const compliments = {
  enthusiastic: [
    "You're on fire! 🔥🔥🔥 Keep crushing it! 🚀",
    "You're unstoppable! 💪 Let's dominate this code! 💻",
    "Woohoo! You're amazing! 😎🙌 Keep up the great work! 🎉🎉",
  ],
  funny: [
    "You deserve a cookie for this push 🍪!",
    "Holy code! You're making magic happen 🧙‍♂️✨!",
    "If coding was an Olympic sport, you'd get gold 🥇💻!",
  ],
  motivational: [
    "Keep pushing! You're doing incredible work 🚀",
    "Believe in your code! It's changing the world 🌍",
    "You've got this! Every line of code counts 🧠💻",
  ],
};

try {
  const developerName = core.getInput("developer_name");
  const complimentStyle = core.getInput("compliment_style");

  const complimentArray =
    compliments[complimentStyle] || compliments.enthusiastic;
  const randomCompliment =
    complimentArray[Math.floor(Math.random() * complimentArray.length)];

  console.log(`🎉 Hey ${developerName}, ${randomCompliment}`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}
