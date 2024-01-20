import User from "../models/user.js";

async function changePassword(req, res) {
  try {
    const loginEmail = req.body.email;
    const oldPassword = req.body.password;
    const newPassword = req.body.newPassword;

    const dbUser = await User.findOne({ email: loginEmail }).exec();
    console.log(dbUser);
    if (dbUser) {
      if (dbUser.password === oldPassword) {
        // Change old password of user to new password
        dbUser.password = newPassword;
        // Save user to database
        await dbUser.save();
        res.status(200).json(dbUser);
      } else {
        res.status(401).json({ message: "Wrong password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function addFavoriteCoffee(req, res) {
  try {
    const loginEmail = req.body.email;
    const dbUser = await User.findOne({ email: loginEmail }).exec();

    if (dbUser) {
      dbUser.favoriteCoffee.push({ name: req.body.coffeeName });
      await dbUser.save();
      res.status(200).json(dbUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function addFavoriteBean(req, res) {
  try {
    const loginEmail = req.body.email;
    const dbUser = await User.findOne({ email: loginEmail }).exec();

    if (dbUser) {
      dbUser.favoriteBean.push({ name: req.body.beanName });
      await dbUser.save();
      res.status(200).json(dbUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function removeFavoriteCoffee(req, res) {
  try {
    const loginEmail = req.body.email;
    const coffeeName = req.body.coffeeName;
    const dbUser = await User.findOne({ email: loginEmail }).exec();

    if (dbUser) {
      // Remove the coffee with the specified name
      dbUser.favoriteCoffee = dbUser.favoriteCoffee.filter(
        (coffee) => coffee.name !== coffeeName
      );
      await dbUser.save();
      res.status(200).json(dbUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function removeFavoriteBean(req, res) {
  try {
    const loginEmail = req.body.email;
    const beanName = req.body.beanName;
    const dbUser = await User.findOne({ email: loginEmail }).exec();

    if (dbUser) {
      // Remove the coffee with the specified name
      dbUser.favoriteBean = dbUser.favoriteBean.filter(
        (bean) => bean.name !== beanName
      );
      await dbUser.save();
      res.status(200).json(dbUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function getFavoriteCoffees(req, res) {
  try {
    const loginEmail = req.query.email;
    const dbUser = await User.findOne({ email: loginEmail }).exec();

    if (dbUser) {
      const favoriteCoffees = dbUser.favoriteCoffee;
      res.status(200).json(favoriteCoffees);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function getFavoriteBeans(req, res) {
  try {
    const loginEmail = req.query.email;
    const dbUser = await User.findOne({ email: loginEmail }).exec();

    if (dbUser) {
      const favoriteBeans = dbUser.favoriteBean;
      res.status(200).json(favoriteBeans);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export {
  changePassword,
  addFavoriteCoffee,
  addFavoriteBean,
  getFavoriteCoffees,
  getFavoriteBeans,
  removeFavoriteCoffee,
  removeFavoriteBean,
};
