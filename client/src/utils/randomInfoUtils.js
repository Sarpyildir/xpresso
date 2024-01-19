import randomInfo from "../data/randomInfo.js";

// Function to get a random fact from the randomInfo array
const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * randomInfo.length);
  return randomInfo[randomIndex];
};

export { getRandomFact };
