const express = require("express");
const {
  addForm,
  getForm,
  deleteForm,
} = require("../controller/formController");



const router = express.Router();

router.post("/", addForm);
router.get("/", getForm);
router.delete("/:id", deleteForm);
module.exports = router;
