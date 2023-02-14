const { Item, Category, Transaction, User } = require("../models/index");
class ItemController {
  static async getAllItem(req, res, next) {
    try {
      const items = await Item.findAll();
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getItemNews(req, res, next) {
    try {
      const items = await Item.findAll({
        order: [["createdAt", "DESC"]],
      });

      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getAllCategory(req, res, next) {
    try {
      const category = await Category.findAll();
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async getItemById(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);
      if (!item) {
        throw { name: "Item not found" };
      }
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async addItem(req, res, next) {
    try {
      const { name, description, price, sku, stock, CategoryId } = req.body;

      if (!name) {
        throw { name: "Name is required" };
      }

      let imgProfilePath = req.file;
      console.log(imgProfilePath, "<----- imagee weee");
      if (!imgProfilePath) throw { name: "Image Profile required" };

      await Item.create({
        name,
        imgUrl: imgProfilePath.path,
        description,
        price,
        sku,
        stock,
        CategoryId,
      });

      res.status(201).json({ message: "Successfully create new item" });
    } catch (error) {
      next(error);
    }
  }

  static async checkoutItem(req, res, next) {
    try {
      const { id } = req.params;
      const quantity = +req.body.quantity;
      const item = await Item.findByPk(id);

      console.log(quantity);
      console.log(id);

      const userId = req.user.id;

      if (!item) {
        throw { name: "Item not found" };
      }

      if (!quantity) {
        throw { name: "Quantity is required" };
      }

      if (item.stock < quantity) {
        throw { name: "Not Enough Stock" };
      }

      const user = await User.findByPk(userId);

      if (!user) {
        throw { name: "User not found" };
      }

      const total_item = item.price * quantity;

      if (user.user_balance < total_item) {
        throw { name: "Not Enough User Balance" };
      }

      await Transaction.create({
        UserId: userId,
        ItemId: id,
        quantity,
        total_item_purchase: total_item,
      });

      const update_balance = user.user_balance - total_item;

      await User.update(
        {
          user_balance: update_balance,
        },
        {
          where: {
            id: userId,
          },
        }
      );

      await Item.update(
        {
          stock: item.stock - quantity,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(201).json({ message: "Successfuly checkout item" });
    } catch (error) {
      next(error);
    }
  }

  static async getInvoice(req, res, next) {
    try {
      const userId = req.user.id;
      const invoice = await Transaction.findAll({ where: { UserId: userId } });
      let total_transaction = 0;
      invoice.map((el) => {
        return (total_transaction = total_transaction + el.total_item_purchase);
      });

      res.status(200).json({ total_transaction, data: invoice });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ItemController;
