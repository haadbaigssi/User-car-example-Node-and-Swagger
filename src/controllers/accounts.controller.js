const accountsService = require("../services/accounts.service");

const get = function (req, res) {
  console.log(req.body);
  res.send(accountsService.get(req.params._id));
};

const postTest = function (req, res) {
  console.log(req.body);
  res.status(200).send("All OK");
};

const getAll = function (req, res) {
  res.send(accountsService.getAll(req, res));
};

const addAccount = function (req, res) {
  res.send(accountsService.addAccount(req, res));
};


module.exports = {
  get,
  getAll,
  postTest,
  addAccount
};
