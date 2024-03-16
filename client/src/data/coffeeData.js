const coffeeData = [
  {
    id: 1,
    name: "Espresso",
    description:
      "Originated in Italy, it’s a concentrated coffee beverage created by forcing hot water through finely-ground coffee beans. It is both a coffee beverage and a brewing method, which is generally thicker than other methods. It’s the basic drink from which other milk and non-milk coffee drinks are based such as Latte, Cappuccino, and Americano. Methods for making espresso are Espresso machine, French press, Mokka pot or AeroPress.",
    ingredients: ["Coffee"],
    photo:
      "https://images.pexels.com/photos/1710023/pexels-photo-1710023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Americano",
    description:
      "Also known as American, is a type of coffee prepared by an espresso shot with hot water at a 1:3 to 1:4 ratio. Easily adopts the flavors and aromas of the espresso. It is a bit stronger than espresso with a rich bold flavor..",
    ingredients: ["Coffee", "Water"],
    photo:
      "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Latte",
    description:
      "Originated in Italy, latte is a coffee-based drink that is made with espresso as a base, steamed milk, and a thin layer of milk foam on top. Contains one shot of espresso and a generous amount of steamed milk, which makes it a creamy beverage. It is known for its smooth texture. Since the ratio of milk to espresso can vary based on regional preferences, the texture can vary as well.",
    ingredients: ["Coffee", "Milk", "Foam"],
    photo:
      "https://i.lezzet.com.tr/images-xxlarge-secondary/latte-nedir-nasil-yapilir-63a67490-83ad-4a8c-a76a-dcb04e398985.jpg",
  },
  {
    id: 4,
    name: "Mocha",
    description:
      "Originated in Yemen, Mocha means a type of good quality coffee that is made from a specific coffee bean. It is a type of coffee drink that combines the flavors of coffee and chocolate, followed by milk or cream. It’s like a variant of latte, in the sense that it is often 1/3 espresso and 2/3 steamed milk. Can also be incorporated into desserts, such as cakes, cookies, and ice cream.",
    ingredients: ["Coffee", "Milk", "Chocolate Syrup", "Whipped Cream"],
    photo:
      "https://www.starbucksathome.com/tr/sites/default/files/2022-04/10032021_CafeMocha_LS-min.png",
  },
  {
    id: 5,
    name: "Cortado",
    description:
      "Cortado is a Spanish-origin coffee drink consisting of equal parts espresso and warm milk, cutting the acidity of the coffee. It offers a balance between the boldness of espresso and the smoothness of milk, providing a rich and flavorful experience in a compact serving size. The simplicity of its composition allows coffee enthusiasts to appreciate the distinct qualities of both espresso and milk in every sip.",
    ingredients: ["Coffee", "Milk"],
    photo: "https://www.coffeechefs.com/wp-content/uploads/2020/11/Cortado.jpg",
  },
  {
    id: 6,
    name: "Flat White",
    description:
      "Originating in Australia and New Zealand, it is a blend of micro-foamed milk poured over a single or double shot of espresso. Contains a strong and robust coffee flavor while maintaining a luxurious, silky mouthfeel. The ratio of coffee to milk is much higher than in a latte. It’s distinction from latte comes from its volume and velvety milk texture. ",
    ingredients: ["Coffee", "Milk"],
    photo:
      "https://mithra.coffee/blog/wp-content/uploads/2021/03/flat-white-nasil-yapilir.jpg",
  },
  {
    id: 7,
    name: "Cappuccino",
    description:
      "Originated in Italy, it is a classic espresso-based drink consisting of equal parts espresso, steamed milk, and frothed milk. Known for its luxurious and creamy texture, the beverage is often topped with a sprinkle of cocoa or cinnamon. The balanced combination of strong espresso and velvety milk foam defines the cappuccino's timeless appeal, making it a beloved choice for coffee enthusiasts worldwide.",
    ingredients: ["Coffee", "Milk", "Foam"],
    photo:
      "https://tr.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/cappuccino_2000x1400px.jpg",
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "An Italian coffee, which translates to 'stained' or 'marked'. It features a shot of espresso 'stained' with a small amount of frothy milk. This minimalist yet bold beverage allows the rich flavor of espresso to shine through, with variations like caramel macchiatos incorporating sweet syrups for added depth. The macchiato offers a concentrated and customizable coffee experience in a concise serving.",
    ingredients: ["Coffee", "Milk"],
    photo:
      "https://tr.jura.com/-/media/global/images/coffee-recipes/images-redesign-2020/latte_macchiato_2000x1400px.jpg",
  },
  {
    id: 9,
    name: "Frappe",
    description:
      "Originated in Greece, it is a chilled coffee beverage made by blending instant coffee, sugar, water, and ice. This frothy concoction delivers a refreshing and caffeinated treat, often customizable with flavored syrups or toppings like whipped cream. Its simplicity and icy indulgence make the frappe a popular choice, especially in warm weather.",
    ingredients: ["Coffee", "Milk", "Ice", "Flavored Syrup"],
    photo:
      "https://www.nescafe.com/tr/sites/default/files/2023-11/Frappe_2023_Frappe-Mocha_1066x1066%20%281%29%20%281%29.jpg",
  },
  {
    id: 10,
    name: "Cold Brew",
    description:
      "Cold brew is a coffee brewing method known for its simplicity and smooth flavor. Coarsely ground coffee is steeped in cold water for an extended period, typically 12-24 hours, resulting in a concentrated and less acidic brew. Served over ice, cold brew is appreciated for its bold taste and higher caffeine content compared to traditional iced coffee, making it a favorite among those seeking a refreshing and potent coffee experience.",
    ingredients: ["Coffee", "Cold Water", "Ice"],
    photo:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2014/09/cold-brew-coffee-yeni.jpg",
  },
  {
    id: 11,
    name: "Chai Tea",
    description:
      "Originated in India, Chai tea latte is a popular and comforting beverage made by combining spiced chai tea with steamed milk. The aromatic blend of black tea and spices like cardamom and cinnamon is enriched with the creamy texture of frothy milk. Often sweetened, chai tea lattes offer a delightful balance of bold spiciness and velvety smoothness, making them a beloved choice for those seeking a cozy and flavorful drink.",
    ingredients: ["Tea", "Milk", "Spices"],
    photo:
      "https://i.nefisyemektarifleri.com/2023/06/15/chai-tea-latte-nedir-icindekiler-kalori-degeri-faydalari-tarifi.jpg",
  },
  {
    id: 12,
    name: "Affogato",
    description:
      "It is an Italian dessert coffee, which features a scoop of vanilla ice cream 'drowned' or 'affogato' in a shot of hot espresso. This delightful contrast of hot and cold creates a simple yet indulgent treat. Affogatos can be customized with various ice cream flavors, and the result is a rich and satisfying blend of creamy sweetness and robust coffee flavor.",
    ingredients: ["Espresso", "Vanilla Ice Cream"],
    photo:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/affogato-b6adf43e-6506-4605-97ae-d5c102b406b6.jpg",
  },
];

export default coffeeData;
