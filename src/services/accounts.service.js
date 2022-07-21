const data = require("../data");

const get = function (_id) {
  return getAll().find((account) => account._id == _id);
};

const getAll = function (req, res) {
  if (req?.query?.firstName) {
    return data.Accounts.find(
      (account) => account.name.first == req.query.firstName
    );
  }
  return data.Accounts;
};

const addAccount = function (req, res) {
  if (req?.body) {
    data.Accounts.push(req.body);
    console.log("body: ",req.body);
  }
  return data.Accounts;
};



module.exports = {
  get,
  getAll,
  addAccount
};
