const Form = require("../model/Form");

exports.addForm = async (req, res) => {
  try {
    const { name, phone, email, selectservices } = req.body;

    const form = new Form({ name, phone, email, selectservices });
    await form.save();
    res.status(201).json({ message: "Form added successfully" });
  } catch (error) {
    console.error("Error adding form:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getForm = async (req, res) => {
  try {
    const form = await Form.find();
    res.status(200).json(form);
  } catch (error) {
    console.error("Error fetching form:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedForm = await Form.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Form deleted successfully", deletedForm });
  } catch (error) {
    console.error("Error deleting Form:", error);
    res.status(500).json({ messae: error.messae });
  }
};
