const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContactController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
});

const getContactController = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Get Contact for ID : ${id}` });
};

const createContactController = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    //   res
    //     .status(400)
    //     .json({ success: false, error: "Both name and email are mandatory" });

    throw new Error("Both fields name and email are mandatory");
  }
  console.log(req.body);
  //console.log(`Name : ${name} \nEmail : ${email}`);
  res.status(201).json({ message: "Create Contact" });
});

const updateContactController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update Contact for the ID : ${id}` });
});

const deleteContactController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete the contact with an ID : ${id}` });
});

module.exports = {
  getContactController,
  getAllContactController,
  createContactController,
  updateContactController,
  deleteContactController,
};
