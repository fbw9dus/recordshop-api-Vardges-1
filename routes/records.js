const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const auth = require('../middleware/authenticator')

const {
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
  addRecord
} = require("../controllers/recordsController");


router
  .route("/")
  .get(getRecords)
  .post(auth, addRecord);

router
  .route("/:id")
  .get(getRecord)
  .delete(deleteRecord)
  .put(updateRecord);

module.exports = router;