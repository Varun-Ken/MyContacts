const {
  getContactController,
  createContactController,
  getAllContactController,
  deleteContactController,
  updateContactController,
} = require("../controllers/contactController");
 
const router = require("express").Router();

router.route("/").get(getAllContactController).post(createContactController);

router.get("/:id", getContactController);

router.put("/:id", updateContactController);

router.delete("/:id", deleteContactController);

module.exports = router; 
