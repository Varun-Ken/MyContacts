//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getAllContactController = (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
};

const getContactController = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Get Contact for ID : ${id}` });
};

const createContactController = (req, res) => {
  try {
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
  } catch (error) {
    console.log(`Error in the Create Contact Method : ${error}`);
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateContactController = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update Contact for the ID : ${id}` });
};

const deleteContactController = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete the contact with an ID : ${id}` });
};

module.exports = {
  getContactController,
  getAllContactController,
  createContactController,
  updateContactController,
  deleteContactController,
};
