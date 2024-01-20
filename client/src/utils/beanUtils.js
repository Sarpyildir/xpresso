import beanData from "../data/beanData";

const getBeanAll = () => {
  return beanData;
};

// Function to get bean details by name
const getBeanByName = (beanName) => {
  return beanData.find(
    (bean) => bean.name.toLowerCase() === beanName.toLowerCase()
  );
};

export { getBeanAll, getBeanByName };
