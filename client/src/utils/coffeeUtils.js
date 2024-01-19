import coffeeData from "../data/coffeeData";

const getCoffeeAll = () => {
  return coffeeData;
};

// Function to get coffee details by name
const getCoffeeByName = (coffeeName) => {
  return coffeeData.find(
    (coffee) => coffee.name.toLowerCase() === coffeeName.toLowerCase()
  );
};

export { getCoffeeAll, getCoffeeByName };
