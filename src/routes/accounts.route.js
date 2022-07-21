const express = require("express");
const router = express.Router({ mergeParams: true });

const accountsController = require("../controllers/accounts.controller");
const accountsCarsRoute = require("./accountsCars.route");
const { check, validationResult } = require("express-validator");

router.route("/").get(check("firstName").isAlpha(), (req, res, next) => {
  try {
    validationResult(req).throw();
    accountsController.getAll(req, res);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.route("/addaccount").post(accountsController.addAccount);
router.route("/:_id").get(accountsController.get);
router.route("/:_id").post(accountsController.postTest);
router.use("/:Account_id", accountsCarsRoute);

module.exports = router;
