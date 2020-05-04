const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);
const {userValidationRules} = require('../lib/validation/uservalidation')
const { validateInputs} = require('../middleware/validator')
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  loginUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(validateInputs(userValidationRules), addUser);

router.route("/login")
  .post(loginUser)

router
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);
  

module.exports = router;
