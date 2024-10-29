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

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateCompliment = (developerName, complimentStyle) => {
  if (!compliments[complimentStyle]) {
    console.warn(
      `Unknown compliment style: ${complimentStyle}. Choosing a random style.`
    );
  }
  const style = compliments[complimentStyle]
    ? complimentStyle
    : getRandomElement(Object.keys(compliments));

  const complimentArray = compliments[style];
  const randomCompliment = getRandomElement(complimentArray);

  return `🎉 Hey ${developerName}, ${randomCompliment}`;
};

module.exports = {
  compliments,
  getRandomElement,
  generateCompliment,
};
