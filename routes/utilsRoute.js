const {
  createPincode,
  getAllPincodes,
  createAndUpdateHeader,
  getHeaderLine,
  createCoupon,
  getAllCoupons,
  sendContactInformation,
} = require("../controllers/utilsController");

const router = require("express").Router();

router.route("/util/pincode/create").post(createPincode);
router.route("/util/pincodes").get(getAllPincodes);
router.route("/util/header").post(createAndUpdateHeader);
router.route("/util/header").get(getHeaderLine);
router.route("/util/coupon/create").post(createCoupon);
router.route("/util/coupons").get(getAllCoupons);
router.route("/util/sendMessage").post(sendContactInformation);

module.exports = router;
