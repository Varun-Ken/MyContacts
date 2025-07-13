const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContactController = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  res
    .status(200)
    .json({ success: true, message: "Get All Contacts", contact: contacts });
});

const getContactController = async (req, res) => {
  const { id } = req.params;
  const fetchContact = await Contact.find({ name: id });

  if (fetchContact.length < 1) {
    res.status(404);
    throw new Error("Contact not found");
    //res.status(404).json({ success: false, message: "Contact not Found" });
    console.log("Contact not found");
  }
  res.status(200).json({
    success: true,
    message: `Get Contact for ID : ${id}`,
    contact: fetchContact,
  });
};

const createContactController = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    //   res
    //     .status(400)
    //     .json({ success: false, error: "Both name and email are mandatory" });
    res.status(400);
    throw new Error("Three fields name, email and phone number are mandatory");
  }

  const newContact = new Contact({
    name,
    email,
    phone,
  });

  await newContact.save();

  console.log(req.body);
  res
    .status(201)
    .json({ success: true, message: "Create Contact", contact: newContact });
});

const updateContactController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const fetchContact = await Contact.find({ name: id });
  if (fetchContact.length < 1) {
    res.status(404);
    throw new Error("Contact not found");
    //res.status(404).json({ success: false, message: "Contact not Found" });
    console.log("Contact not found");
  }
  const updateContact = await Contact.findOneAndUpdate(
    { name: id },
    { $set: { phone: req.body.phone } },
    { new: true }
  );
  res
    .status(200)
    .json({ success: true, message: `Updated Contact`,contact:updateContact });
});

const deleteContactController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const fetchContact = await Contact.find({name:id})
  if (fetchContact.length < 1) {
    res.status(404);
    throw new Error("Contact not found");
    //res.status(404).json({ success: false, message: "Contact not Found" });
    console.log("Contact not found");
  }
  const deleteContact = await Contact.findOneAndDelete({name:id})
  res
    .status(200)
    .json({ success: true, message: `Deleted the contact` });
});

module.exports = {
  getContactController,
  getAllContactController,
  createContactController,
  updateContactController,
  deleteContactController,
};
