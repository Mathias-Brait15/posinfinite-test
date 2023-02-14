const router = require("express").Router();
const ItemController = require("../controllers/itemController");
const UserController = require("../controllers/userController");
const { Authentication } = require("../middlewares/authentication");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "dwhy4tcu5",
  api_key: "144961597436714",
  api_secret: "Jf9B0fbr6_-w5q93Uk4yewAQDVY",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "assets",
  },
});
const upload = multer({ storage: storage });

router.post("/register", UserController.Register);
router.post("/login", UserController.Login);
router.get("/", ItemController.getAllItem);
router.get("/newItem", ItemController.getItemNews);
router.get("/category", ItemController.getAllCategory);
router.post("/", upload.single("imgUrl"), ItemController.addItem);
router.get("/invoice", Authentication, ItemController.getInvoice);
router.get("/user", Authentication, UserController.getDataUser);
router.get("/:id", ItemController.getItemById);
router.post("/:id", Authentication, ItemController.checkoutItem);
module.exports = router;
