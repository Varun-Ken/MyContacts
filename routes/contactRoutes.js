const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create Contact" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update Contact for the ID : ${id}` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete the contact with an ID : ${id}` });
});

module.exports = router;
