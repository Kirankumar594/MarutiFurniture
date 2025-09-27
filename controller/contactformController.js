const Contactform = require("../model/Contactform");

exports.addContactform = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contactform = new Contactform({ name, email,message });
    await contactform.save();
    res.status(201).json({ message: "Contactform added successfully" });
  } catch (error) {
    console.error("Error adding contactform:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getContactform = async (req, res) => {
  try {
    const contactform = await Contactform.find();
    res.status(200).json(contactform);
  } catch (error) {
    console.error("Error fetching contactform:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.deleteContactform = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContactform = await Contactform.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Contactform deleted successfully", deletedContactform });
  } catch (error) {
    console.error("Error deleting Contactform:", error);
    res.status(500).json({ messae: error.messae });
  }
};
